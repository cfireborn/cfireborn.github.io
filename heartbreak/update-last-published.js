#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// find timestamp of the latest commit in the repository
const commitIso = execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
const commitDate = new Date(commitIso);
const dateStr = commitDate.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: 'numeric' });
const timeStr = commitDate.toLocaleTimeString();

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/Last published: [^<]+/, `Last published: ${dateStr}, ${timeStr}`);
fs.writeFileSync(indexPath, html);
