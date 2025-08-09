const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Postgres using DATABASE_URL. Render provides this env var
// automatically when a database is linked. SSL is required for external
// connections.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

app.use(express.json());

async function ensureTable() {
  await pool.query(`CREATE TABLE IF NOT EXISTS logs (
    id SERIAL PRIMARY KEY,
    ip TEXT,
    timestamp TIMESTAMPTZ,
    event TEXT,
    country TEXT,
    region TEXT,
    city TEXT
  )`);
}

app.get('/logs', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT ip, timestamp, event, country, region, city FROM logs ORDER BY id ASC');
    const logs = rows.map(r => ({
      ip: r.ip,
      timestamp: r.timestamp,
      event: r.event,
      location: { country: r.country, region: r.region, city: r.city }
    }));
    res.json(logs);
  } catch (err) {
    console.error('Failed to read logs', err);
    res.status(500).json({ error: 'failed to read logs' });
  }
});

app.post('/log', async (req, res) => {
  const event = req.body.event || '';
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  let country = null, region = null, city = null;

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    if (geoRes.ok) {
      const geo = await geoRes.json();
      country = geo.country_name;
      region = geo.region;
      city = geo.city;
    }
  } catch (err) {
    console.error('Geo lookup failed', err);
  }

  const timestamp = new Date();

  try {
    const { rows } = await pool.query(
      'INSERT INTO logs (ip, timestamp, event, country, region, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ip, timestamp, event, country, region, city',
      [ip, timestamp, event, country, region, city]
    );
    const row = rows[0];
    res.status(201).json({
      ip: row.ip,
      timestamp: row.timestamp,
      event: row.event,
      location: { country: row.country, region: row.region, city: row.city }
    });
  } catch (err) {
    console.error('Failed to store log', err);
    res.status(500).json({ error: 'failed to store log' });
  }
});

ensureTable()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Log server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server', err);
    process.exit(1);
  });

