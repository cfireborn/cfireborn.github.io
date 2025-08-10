const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable trust proxy so req.ip / x-forwarded-for are respected behind Render's proxy
app.set('trust proxy', true);

// Connect to Postgres using DATABASE_URL. Render provides this env var
// automatically when a database is linked. SSL is required for external
// connections.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

app.use(express.json());

// Allow cross-origin browser requests from the static site
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

async function ensureTables() {
  await pool.query(`CREATE TABLE IF NOT EXISTS logs (
    id SERIAL PRIMARY KEY,
    ip TEXT,
    timestamp TIMESTAMPTZ,
    event TEXT
  )`);

  // Track counts for various button presses
  await pool.query(`CREATE TABLE IF NOT EXISTS counts (
    type TEXT PRIMARY KEY,
    count INTEGER NOT NULL
  )`);
}

app.get('/logs', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT ip, timestamp, event FROM logs ORDER BY id DESC LIMIT 50');
    res.json(rows);
  } catch (err) {
    console.error('Failed to read logs', err);
    res.status(500).json({ error: 'failed to read logs' });
  }
});

app.post('/log', async (req, res) => {
  const event = req.body.event || '';
  // Normalize IP from proxy header or socket
  const forwardedFor = req.headers['x-forwarded-for'];
  const firstForwarded = Array.isArray(forwardedFor) ? forwardedFor[0] : (forwardedFor || '');
  const rawCandidate = (firstForwarded || req.socket.remoteAddress || '').split(',')[0].trim();
  const ip = rawCandidate.replace(/^::ffff:/, '').replace(/^::1$/, '127.0.0.1');

  const timestamp = new Date();

  try {
    const { rows } = await pool.query(
      'INSERT INTO logs (ip, timestamp, event) VALUES ($1, $2, $3) RETURNING ip, timestamp, event',
      [ip, timestamp, event]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Failed to store log', err);
    res.status(500).json({ error: 'failed to store log' });
  }
});

// Increment a counter for the provided type
app.post('/count', async (req, res) => {
  const type = req.body.type;
  if (!type) return res.status(400).json({ error: 'missing type' });

  try {
    await pool.query(
      'INSERT INTO counts (type, count) VALUES ($1, 1) ON CONFLICT (type) DO UPDATE SET count = counts.count + 1',
      [type]
    );
    const { rows } = await pool.query('SELECT count FROM counts WHERE type = $1', [type]);
    res.json({ type, count: rows[0].count });
  } catch (err) {
    console.error('Failed to update count', err);
    res.status(500).json({ error: 'failed to update count' });
  }
});

// Return all counts
app.get('/stats', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT type, count FROM counts');
    const stats = { progress: 0, activity: 0, darkmode: 0 };
    rows.forEach(r => {
      stats[r.type] = r.count;
    });
    res.json(stats);
  } catch (err) {
    console.error('Failed to read stats', err);
    res.status(500).json({ error: 'failed to read stats' });
  }
});

ensureTables()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Log server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server', err);
    process.exit(1);
  });

