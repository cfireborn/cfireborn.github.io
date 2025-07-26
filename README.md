# cfireborn.github.io

This repository hosts a collection of small web games and demos.
All pages are static and can be opened directly in a browser.

### Activity Log

The `activitylog` directory contains a small demo that records
clicked actions with random creative blurbs. Open `activitylog/index.html`
in a browser to try it out.

To share the log between visitors, the page can optionally connect to a
Firebase Firestore database. Copy `activitylog/firebaseConfig.example.js` to
`activitylog/firebaseConfig.js` and fill in your Firebase project credentials.
See the comments in that file for the required fields. When configured, each
client will push entries to Firestore and display updates in real time.

## Development

Simply edit the files in place and open `index.html` or any of the
subfolders' `index.html` in a browser to test locally.

## Previewing Pull Requests

A GitHub Actions workflow automatically deploys previews for every pull
request. Once you open a PR, the "Deploy static site to GitHub Pages"
check will provide a URL where you can view the proposed changes.
