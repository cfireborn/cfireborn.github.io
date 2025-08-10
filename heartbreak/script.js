// Starting healing progress percentage
let progress = 35; // percent

let currentImagePath = '';
// July 11, 2025 at midnight UTC
const breakupDate = new Date('2025-07-11T00:00:00Z');

// Backend endpoint for syncing activity logs
const LOG_SERVER =
  window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : 'https://cfireborn-github-io.onrender.com';

// Local fallback storage keys
const LOCAL_STATS_KEY = 'hb-local-stats';
const LOCAL_LOGS_KEY = 'hb-local-logs';
const LOCAL_ONLY_LOGS_KEY = 'hb-local-only-logs';
const LOCAL_DAILY_KEY = 'hb-local-daily-stats';
// Frontend geolocation cache
const GEO_CACHE_KEY = 'hb-geo-cache';
const GEO_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

function loadLocalStats() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STATS_KEY)) || {
      progress: 0,
      activity: 0,
      darkmode: 0,
      shuffle_charlie_button_presses: 0,
      valuable_lessons_button_presses: 0
    };
  } catch (_) {
    return { progress: 0, activity: 0, darkmode: 0, shuffle_charlie_button_presses: 0, valuable_lessons_button_presses: 0 };
  }
}

function saveLocalStats(stats) {
  try {
    localStorage.setItem(LOCAL_STATS_KEY, JSON.stringify(stats));
  } catch (_) {}
}

function loadLocalDaily() {
  try {
    const obj = JSON.parse(localStorage.getItem(LOCAL_DAILY_KEY));
    const todayStr = new Date().toISOString().slice(0, 10);
    if (!obj || obj.date !== todayStr) {
      return { date: todayStr, counts: {} };
    }
    return obj;
  } catch (_) {
    return { date: new Date().toISOString().slice(0, 10), counts: {} };
  }
}

function saveLocalDaily(obj) {
  try { localStorage.setItem(LOCAL_DAILY_KEY, JSON.stringify(obj)); } catch (_) {}
}

function loadLocalOnlyLogs() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_ONLY_LOGS_KEY)) || [];
  } catch (_) {
    return [];
  }
}

function saveLocalOnlyLogs(logs) {
  try {
    localStorage.setItem(LOCAL_ONLY_LOGS_KEY, JSON.stringify(logs));
  } catch (_) {}
}

function renderStats(stats) {
  // Normalize supports both flat totals and { totals: {}, today: {} }
  let totals = stats;
  let today = {};
  if (stats && typeof stats === 'object' && 'totals' in stats) {
    totals = stats.totals || {};
    today = stats.today || {};
  }
  // Merge in local daily fallback
  const localDaily = loadLocalDaily();
  const keys = ['progress', 'activity', 'darkmode', 'shuffle_charlie_button_presses', 'valuable_lessons_button_presses'];
  keys.forEach(key => {
    const totalVal = (totals && typeof totals[key] === 'number') ? totals[key] : (loadLocalStats()[key] || 0);
    const todayVal = (today && typeof today[key] === 'number') ? today[key] : (localDaily.counts[key] || 0);
    const todayEl = document.getElementById(`count-${key}-today`);
    const totalEl = document.getElementById(`count-${key}-total`);
    if (todayEl) todayEl.textContent = todayVal;
    if (totalEl) totalEl.textContent = totalVal;
  });
}

function loadLocalLogs() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_LOGS_KEY)) || [];
  } catch (_) {
    return [];
  }
}

function saveLocalLogs(logs) {
  try {
    localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(logs));
  } catch (_) {}
}

// ------- Frontend IP geolocation (cached) -------
function loadGeoCache() {
  try {
    return JSON.parse(localStorage.getItem(GEO_CACHE_KEY)) || {};
  } catch (_) {
    return {};
  }
}

function saveGeoCache(cache) {
  try { localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(cache)); } catch (_) {}
}

function isLocalIp(ip) {
  return !ip || ip === 'local' || ip === '127.0.0.1' || ip === '::1';
}

async function fetchGeoForIp(ip) {
  if (isLocalIp(ip)) return null;
  try {
    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, { cache: 'force-cache' });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      city: data.city || null,
      region: data.region || data.region_code || null,
      country: data.country_name || data.country || null
    };
  } catch (_) {
    return null;
  }
}

async function getLocationForIp(ip) {
  const cache = loadGeoCache();
  const now = Date.now();
  const cached = cache[ip];
  if (cached && (now - cached.cachedAt) < GEO_CACHE_TTL_MS) {
    return cached.location || null;
  }
  const loc = await fetchGeoForIp(ip);
  cache[ip] = { cachedAt: now, location: loc };
  saveGeoCache(cache);
  return loc;
}

function formatLocation(loc) {
  if (!loc) return '';
  const parts = [];
  if (loc.city) parts.push(loc.city);
  if (loc.region) parts.push(loc.region);
  if (loc.country) parts.push(loc.country);
  return parts.join(', ');
}

function buildEntryKey(entry) {
  return `${entry.timestamp}|${entry.event}|${entry.ip || ''}`;
}

function renderLogs(entries) {
  const logEl = document.getElementById('log');
  if (!logEl) return;
  const merged = (entries || []).concat(loadLocalOnlyLogs());
  logEl.innerHTML = '';

  merged.slice().reverse().forEach(entry => {
    const div = document.createElement('div');
    div.className = 'entry';
    const key = buildEntryKey(entry);
    div.dataset.key = key;

    const ts = new Date(entry.timestamp).toLocaleString();
    const ip = entry.ip || 'local';

    const timestampNode = document.createTextNode(`[${ts}] `);
    div.appendChild(timestampNode);

    const locSpan = document.createElement('span');
    locSpan.className = 'log-loc';
    const locText = formatLocation(entry.location);
    if (locText) {
      locSpan.textContent = `[${locText}] `;
    }
    div.appendChild(locSpan);

    div.appendChild(document.createTextNode(entry.event));

    const ipSpan = document.createElement('span');
    ipSpan.className = 'spoiler ip-spoiler';
    ipSpan.setAttribute('role', 'button');
    ipSpan.setAttribute('tabindex', '0');
    ipSpan.setAttribute('aria-label', 'Reveal IP');
    ipSpan.textContent = ` [${ip}]`;
    function toggleReveal() { ipSpan.classList.toggle('revealed'); }
    ipSpan.addEventListener('click', toggleReveal);
    ipSpan.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleReveal();
      }
    });
    div.appendChild(ipSpan);

    logEl.appendChild(div);
  });

  // Populate missing locations asynchronously via frontend geolocation
  populateMissingLocations(merged);
}

async function populateMissingLocations(entries) {
  const nodes = Array.from(document.querySelectorAll('#log .entry'));
  const nodeByKey = new Map(nodes.map(n => [n.dataset.key, n]));

  const tasks = [];
  for (const entry of entries) {
    const ip = entry.ip || 'local';
    const hasLoc = !!formatLocation(entry.location);
    if (hasLoc || isLocalIp(ip)) continue;
    const key = buildEntryKey(entry);
    const node = nodeByKey.get(key);
    if (!node) continue;
    tasks.push(
      getLocationForIp(ip).then(loc => {
        if (!loc) return;
        const locSpan = node.querySelector('.log-loc');
        if (locSpan && !locSpan.textContent) {
          const txt = formatLocation(loc);
          if (txt) locSpan.textContent = `[${txt}] `;
        }
      })
    );
  }

  if (tasks.length) {
    try { await Promise.allSettled(tasks); } catch (_) {}
  }
}

// -------- Remaining existing code --------
function updateDaysSinceBreakup() {
  const span = document.getElementById('days-since');
  if (!span) return;
  const diffMs = Date.now() - breakupDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  span.textContent = diffDays;
}

function updateProgress() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = progress + '%';

  const label = document.getElementById('progress-label');
  label.textContent = progress + '/100%';

  // Update Charlie's image based on healing progress
  updateCharlieImage();
}

function changeProgress(delta) {
  progress = Math.min(100, Math.max(0, progress + delta));
  updateProgress();
}

function updateCharlieImage() {
  const boyImg = document.getElementById('boy-image');
  
  // Use the image randomizer to get appropriate image
  if (typeof getRandomImagePath === 'function') {
    currentImagePath = getRandomImagePath(progress);
    boyImg.src = currentImagePath;
    
    // Add error handling for missing images
    boyImg.onerror = function() {
      // Fallback to emoji if image doesn't exist
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.id = 'boy-emoji-fallback';
      fallback.style.fontSize = '4rem';
      
      let emoji = '😢';
      if (progress >= 75) emoji = '😄';
      else if (progress >= 50) emoji = '🙂';
      else if (progress >= 25) emoji = '😔';
      fallback.textContent = emoji;
      
      this.parentNode.insertBefore(fallback, this);
    };
    
    boyImg.onload = function() {
      // Remove any fallback emoji if image loads successfully
      const fallback = document.getElementById('boy-emoji-fallback');
      if (fallback) {
        fallback.remove();
      }
      this.style.display = 'block';
    };
  } else {
    // Fallback to emoji system if randomizer not available
    boyImg.style.display = 'none';
    let emoji = '😢';
    if (progress >= 75) emoji = '😄';
    else if (progress >= 50) emoji = '🙂';
    else if (progress >= 25) emoji = '😔';
    
    const fallback = document.createElement('div');
    fallback.id = 'boy-emoji-fallback';
    fallback.style.fontSize = '4rem';
    fallback.textContent = emoji;
    boyImg.parentNode.insertBefore(fallback, boyImg);
  }
}

function shuffleCharlie() {
  // Pick a new random image for the current stage
  if (typeof getRandomImagePath === 'function') {
    const nextImagePath = getRandomImagePath(progress);
    const boyImg = document.getElementById('boy-image');

    // Add a subtle animation during shuffle
    boyImg.style.opacity = '0.5';

    setTimeout(() => {
      boyImg.src = nextImagePath;
      currentImagePath = nextImagePath;
      boyImg.style.opacity = '1';

      // Log the stage info for debugging
      if (typeof getStageInfo === 'function') {
        const stageInfo = getStageInfo(progress);
        console.log(`Shuffled to new ${stageInfo.name} style image: ${nextImagePath}`);
      }
    }, 150);
  }
}

function spawnEmoji(emoji) {
  const span = document.createElement('span');
  span.className = 'emoji';
  span.textContent = emoji;
  span.style.left = Math.random() * (window.innerWidth - 30) + 'px';
  span.style.top = (window.innerHeight - 40) + 'px';
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 3000);
}

const blurbs = {
  exercise: [
    "Pushed through a tough workout and felt stronger afterward.",
    "Sweated it out with a fast run around the block.",
    "Tried a new yoga flow and found some peace.",
    "Hit the gym and left all frustration on the weights."
  ],
  write: [
    "Poured raw feelings into the page, no filter needed.",
    "Crafted another letter I'll probably never send.",
    "Free writing session brought unexpected clarity.",
    "Jotted down memories to get them out of my head."
  ],
  therapy: [
    "Therapist dropped a truth bomb that actually helped.",
    "Shared fears openly and felt lighter walking out.",
    "Made progress unpacking the messy bits.",
    "Another hour of hard but healing conversation."
  ],
  eat: [
    "Cooked a hearty meal that warmed the soul.",
    "Grabbed comfort food and felt cared for.",
    "Treated myself to a fancy dessert—sweet relief.",
    "Healthy snack gave a small burst of energy."
  ],
  friends: [
    "Laughed with friends until my sides hurt.",
    "Got a much-needed hug from a close buddy.",
    "Shared stories over dinner with trusted pals.",
    "Game night with friends kept my mind off things."
  ],
  meet: [
    "Chatted with a stranger and felt a spark of hope.",
    "Made a new acquaintance who shared some wisdom.",
    "Introduced myself at a meetup—small steps forward.",
    "Had a genuine conversation with someone new."
  ],
  family: [
    "Family dinner reminded me I'm not alone.",
    "Opened up about heartache with a sibling.",
    "Watched a movie with family, cozy and safe.",
    "Got some tough love but felt supported."
  ],
  travel: [
    "Daydreamed about future adventures while planning a trip.",
    "Explored a nearby town and found a hidden gem.",
    "Booked tickets for a solo getaway—nervous but excited.",
    "Took a scenic drive and let the wind clear my head."
  ],
  learn: [
    "Watched an inspiring tutorial and learned a new trick.",
    "Signed up for an online course to keep busy.",
    "Read an article that sparked new curiosity.",
    "Practiced a skill and felt myself improve."
  ],
  cry: [
    "Let tears flow freely with my favorite sad playlist.",
    "Had a good cry and felt a bit lighter afterward.",
    "Journaled through the pain and the tears came easily.",
    "Shared a cry with a friend who understood."
  ],
  sleep: [
    "Finally got a full night of deep rest.",
    "Took a quick nap and woke up refreshed.",
    "Dreams were weird but at least I slept.",
    "Early bedtime was exactly what I needed."
  ]
};

// Send a log entry to the backend
async function sendLog(event) {
  try {
    await fetch(`${LOG_SERVER}/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event })
    });
  } catch (err) {
    console.error('Failed to sync log', err);
    const logs = loadLocalLogs();
    logs.push({
      ip: 'local',
      timestamp: new Date().toISOString(),
      event
    });
    saveLocalLogs(logs);
  }
}

// Increment a backend counter and refresh stats
async function incrementStat(type) {
  // Optimistic local update
  const ls = loadLocalStats();
  ls[type] = (ls[type] || 0) + 1;
  saveLocalStats(ls);
  const daily = loadLocalDaily();
  daily.counts[type] = (daily.counts[type] || 0) + 1;
  saveLocalDaily(daily);
  renderStats({ totals: ls, today: daily.counts });

  try {
    await fetch(`${LOG_SERVER}/count`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type })
    });
    await fetchStats();
  } catch (err) {
    console.error('Failed to update count', err);
    // already updated locally
  }
}

// Fetch stats from backend and update page
async function fetchStats() {
  try {
    const res = await fetch(`${LOG_SERVER}/stats`);
    if (!res.ok) throw new Error('bad status');
    const data = await res.json();
    renderStats(data);
    // Also save flat totals fallback
    if (data && data.totals) saveLocalStats(data.totals);
    if (data && data.today) {
      const d = loadLocalDaily();
      d.counts = Object.assign({}, d.counts, data.today);
      saveLocalDaily(d);
    }
  } catch (err) {
    console.error('Failed to load stats', err);
    renderStats({ totals: loadLocalStats(), today: loadLocalDaily().counts });
  }
}

// Pull logs from backend and render to the page
async function syncLogs() {
  try {
    const res = await fetch(`${LOG_SERVER}/logs`);
    if (!res.ok) throw new Error('bad status');
    const entries = await res.json();
    renderLogs(entries);
    saveLocalLogs(entries);
  } catch (err) {
    console.error('Failed to load logs', err);
    renderLogs(loadLocalLogs());
  }
}

async function addEntry(action) {
  const messages = blurbs[action];
  if (!messages) return;
  const message = messages[Math.floor(Math.random() * messages.length)];
  const log = document.getElementById('log');
  const div = document.createElement('div');
  div.className = 'entry';
  const now = new Date().toLocaleTimeString();
  div.textContent = `[${now}] ${message}`;
  log.insertBefore(div, log.firstChild);
  await sendLog(message);
  await syncLogs();
}

function setupButtons() {
  // Setup healing activity buttons
  document.querySelectorAll('#buttons button').forEach(btn => {
    btn.addEventListener('click', async () => {
      spawnEmoji(btn.getAttribute('data-emoji'));
      await addEntry(btn.getAttribute('data-action'));
      changeProgress(1);
      incrementStat('activity');
    });
  });

  // Setup shuffle Charlie button
  const shuffleBtn = document.getElementById('shuffle-charlie');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      shuffleCharlie();
      incrementStat('shuffle_charlie_button_presses');
    });
  }

  const increaseBtn = document.getElementById('increase-progress');
  const decreaseBtn = document.getElementById('decrease-progress');
  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      changeProgress(5);
      incrementStat('progress');
    });
  }
  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      changeProgress(-5);
      incrementStat('progress');
    });
  }

  // Lessons button
  const lessonsBtn = document.getElementById('valuable-lessons');
  if (lessonsBtn) {
    lessonsBtn.addEventListener('click', onValuableLessonClick);
  }
}

function setModeIcon() {
  const btn = document.getElementById('mode-toggle');
  if (btn) {
    btn.textContent = '💡';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('hb-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  setModeIcon();
  incrementStat('darkmode');
}

function initDarkMode() {
  if (localStorage.getItem('hb-theme') === 'dark') {
    document.body.classList.add('dark');
  }
  setModeIcon();
  const btn = document.getElementById('mode-toggle');
  if (btn) {
    btn.addEventListener('click', toggleDarkMode);
  }
}

// -------- Lessons loader and bubble system --------
let lessonsPool = [];
let lessonsIndex = 0;
let lessonsAvailable = false;

async function loadLessons() {
  try {
    const res = await fetch('assets/lessons.txt', { cache: 'no-cache' });
    if (!res.ok) throw new Error('failed');
    const text = await res.text();
    const lines = text.split(/\r?\n/)
      .map(l => l.replace(/\s+/g, ' ').trim())
      .filter(l => l.length > 0);
    // de-duplicate
    const unique = Array.from(new Set(lines));
    if (unique.length === 0) throw new Error('empty');
    // shuffle
    lessonsPool = unique.slice();
    shuffleArray(lessonsPool);
    lessonsIndex = 0;
    lessonsAvailable = true;
    setLessonsButtonEnabled(true);
  } catch (err) {
    lessonsAvailable = false;
    setLessonsButtonEnabled(false);
    showToastOnce('No lessons available.');
  }
}

function setLessonsButtonEnabled(enabled) {
  const btn = document.getElementById('valuable-lessons');
  if (!btn) return;
  btn.disabled = !enabled;
  btn.classList.toggle('disabled', !enabled);
}

function nextLesson() {
  if (!lessonsAvailable || lessonsPool.length === 0) return null;
  if (lessonsIndex >= lessonsPool.length) {
    shuffleArray(lessonsPool);
    lessonsIndex = 0;
  }
  return lessonsPool[lessonsIndex++];
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let activeBubbles = 0;
const bubbleQueue = [];

function onValuableLessonClick() {
  if (!lessonsAvailable) return;
  const lesson = nextLesson();
  if (!lesson) return;
  enqueueBubble(lesson);
  appendLessonToLog(lesson);
  incrementStat('valuable_lessons_button_presses');
}

function enqueueBubble(text) {
  if (activeBubbles < 3) {
    showBubble(text);
  } else {
    bubbleQueue.push(text);
  }
}

function showBubble(text) {
  activeBubbles++;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const wrapper = document.createElement('div');
  wrapper.className = 'lesson-bubble-wrapper';
  wrapper.style.pointerEvents = 'none';
  wrapper.style.position = 'fixed';
  wrapper.style.left = '0';
  wrapper.style.right = '0';
  wrapper.style.bottom = 'calc(56px + env(safe-area-inset-bottom))';
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.zIndex = '9999';

  const bubble = document.createElement('div');
  bubble.className = 'lesson-bubble';
  bubble.textContent = text;
  wrapper.appendChild(bubble);
  document.body.appendChild(wrapper);

  const charCount = text.length;
  const durationSec = Math.max(5, Math.min(10, 3 + 0.025 * charCount));

  if (prefersReduced) {
    bubble.style.transition = 'opacity 1s ease';
    bubble.style.opacity = '0';
    setTimeout(() => finishBubble(wrapper), 1000);
  } else {
    bubble.style.setProperty('--hb-bubble-duration', durationSec + 's');
    bubble.classList.add('animate');
    setTimeout(() => finishBubble(wrapper), durationSec * 1000);
  }
}

function finishBubble(wrapper) {
  if (wrapper && wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
  activeBubbles = Math.max(0, activeBubbles - 1);
  if (bubbleQueue.length > 0) {
    const next = bubbleQueue.shift();
    showBubble(next);
  }
}

function appendLessonToLog(lesson) {
  const localOnly = loadLocalOnlyLogs();
  localOnly.push({
    ip: 'local',
    timestamp: new Date().toISOString(),
    event: `Lesson: ${lesson}`
  });
  saveLocalOnlyLogs(localOnly);
  // Re-render with server logs plus local-only
  renderLogs(loadLocalLogs());
}

let toastShown = false;
function showToastOnce(message) {
  if (toastShown) return;
  toastShown = true;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// -------- PWA registration --------
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW reg failed', err));
  }
}

// -------- Init --------
document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  updateDaysSinceBreakup();
  setupButtons();
  initDarkMode();
  renderLogs(loadLocalLogs());
  renderStats({ totals: loadLocalStats(), today: loadLocalDaily().counts });
  syncLogs();
  setInterval(syncLogs, 5000);
  fetchStats();
  loadLessons();
  registerServiceWorker();
});
