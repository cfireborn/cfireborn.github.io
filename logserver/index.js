import express from 'express';
import {initializeApp, cert} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
app.use(bodyParser.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, 'serviceAccountKey.json');

let credentials;
if (fs.existsSync(serviceAccountPath)) {
  credentials = cert(serviceAccountPath);
} else if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  credentials = cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT));
} else {
  console.error('Firebase service account credentials not found.');
  process.exit(1);
}

initializeApp({
  credential: credentials
});

const db = getFirestore();

app.post('/log', async (req, res) => {
  const data = req.body;
  if (!data.action || !data.message || !data.timestamp) {
    return res.status(400).json({error: 'Invalid entry'});
  }
  try {
    await db.collection('activitylog').add(data);
    res.json({status: 'ok'});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Failed to store entry'});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Log server listening on ${PORT}`));
