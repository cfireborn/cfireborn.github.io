# Heartbreak Healing

A small interactive page to visualize healing progress and generate supportive emojis.
Click any action button to spawn an encouraging emoji, add a note to the activity log at the bottom of the page, and boost healing progress by 1%.
Use the shuffle button to see Charlie drawn in a different art style while staying in the same emotional stage.

Edit `script.js` for functionality and `styles.css` for layout/styling. Page is in `index.html`.

## Collective Activity Log

The page can sync its activity log across visitors using a lightweight
Express backend found in `backend/`.

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd heartbreak/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Provide a Postgres connection string in the `DATABASE_URL` environment
   variable. Render's free PostgreSQL works well:
   - Render dashboard → **New** → **PostgreSQL** → choose the *Free* plan.
   - After the database is created, copy the **External Database URL** and
     set it as `DATABASE_URL` in your environment.
4. Start the server (defaults to port 4000):
   ```bash
   npm start
   ```
5. The server exposes:
   - `POST /log` – store an event. IP, timestamp, and rough location are
     automatically appended.
   - `GET /logs` – retrieve all stored events.

Front‑end code in `script.js` posts new entries to the backend and polls
`/logs` every few seconds to keep the log synced across clients. By default,
`LOG_SERVER` points to the deployed Render instance at
`https://cfireborn-github-io.onrender.com`; update this constant if your
backend uses a different URL.

#### Deploying on Render

1. Commit this repository and push it to a GitHub repo.
2. In Render, create a **Web Service** for `heartbreak/backend` with build
   command `npm install` and start command `npm start`.
3. Add the `DATABASE_URL` environment variable to the service using the
   external connection string from the database you created earlier.
4. Deploy the service and use the generated URL as `LOG_SERVER` in the
   client.
