const express = require('express');
const { Pool } = require('pg');
const fetch = require('node-fetch');

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

  // Add location column for rough geo data
  await pool.query(`ALTER TABLE logs ADD COLUMN IF NOT EXISTS location JSONB`);

  // Track counts for various button presses
  await pool.query(`CREATE TABLE IF NOT EXISTS counts (
    type TEXT PRIMARY KEY,
    count INTEGER NOT NULL
  )`);
}

// Helper: fetch with timeout
async function fetchWithTimeout(url, options = {}, timeoutMs = 3500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    return null;
  }
}

// Helper: normalize location from various providers
function normalizeFromIpwho(data) {
  if (!data || data.success === false) return null;
  const city = data.city || undefined;
  const region = data.region || data.region_name || data.state || data.province || undefined;
  const country = data.country || data.country_name || undefined;
  if (!city && !region && !country) return null;
  return { city, region, country };
}

function normalizeFromIpapiCo(data) {
  if (!data || data.error) return null;
  const city = data.city || undefined;
  const region = data.region || data.region_code || data.state || data.province || undefined;
  const country = data.country_name || data.country || undefined;
  if (!city && !region && !country) return null;
  return { city, region, country };
}

function normalizeFromIpApiCom(data) {
  if (!data || data.status === 'fail') return null;
  const city = data.city || undefined;
  const region = data.regionName || data.region || undefined;
  const country = data.country || undefined;
  if (!city && !region && !country) return null;
  return { city, region, country };
}

async function geolocateIp(ip) {
  // Skip local/private
  if (!ip || ip === '127.0.0.1') return null;

  // Normalize IPv6-embedded IPv4 like ::ffff:1.2.3.4
  const match = String(ip).match(/(\d+\.\d+\.\d+\.\d+)$/);
  const normalizedIp = match ? match[1] : ip;

  // Try ipwho.is first (HTTPS)
  try {
    const r1 = await fetchWithTimeout(`https://ipwho.is/${normalizedIp}`, { method: 'GET' });
    if (r1 && r1.ok) {
      const d1 = await r1.json();
      const loc1 = normalizeFromIpwho(d1);
      if (loc1) return loc1;
    }
  } catch (_) {}

  // Fallback: ipapi.co (HTTPS)
  try {
    const r2 = await fetchWithTimeout(`https://ipapi.co/${normalizedIp}/json/`, { method: 'GET' });
    if (r2 && r2.ok) {
      const d2 = await r2.json();
      const loc2 = normalizeFromIpapiCo(d2);
      if (loc2) return loc2;
    }
  } catch (_) {}

  // Final fallback: ip-api.com (HTTP)
  try {
    const r3 = await fetchWithTimeout(`http://ip-api.com/json/${normalizedIp}?fields=status,country,regionName,city`, { method: 'GET' });
    if (r3 && r3.ok) {
      const d3 = await r3.json();
      const loc3 = normalizeFromIpApiCom(d3);
      if (loc3) return loc3;
    }
  } catch (_) {}

  return null;
}

app.get('/logs', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT ip, timestamp, event, location FROM logs ORDER BY id DESC LIMIT 50');
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

  // Best-effort server-side geolocation (non-blocking beyond short timeouts)
  let location = null;
  try {
    location = await geolocateIp(ip);
  } catch (_) {
    location = null;
  }

  try {
    const { rows } = await pool.query(
      'INSERT INTO logs (ip, timestamp, event, location) VALUES ($1, $2, $3, $4) RETURNING ip, timestamp, event, location',
      [ip, timestamp, event, location]
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

