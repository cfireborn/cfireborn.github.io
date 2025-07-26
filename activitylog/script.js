// Random messages for each action
const blurbs = {
  exercise: [
    "Feels good, nice rock climb with new climbing partners.",
    "Sweaty session at the gym, but the endorphins pay off.",
    "A quick yoga flow to stretch out the morning."
  ],
  eat: [
    "Tasty ramen, good self-date.",
    "Polished off a colorful salad bursting with flavor.",
    "Indulged in decadent chocolate cake - no regrets."
  ],
  work: [
    "Knocked out tasks like a productivity ninja.",
    "Another meeting survived, coffee in hand.",
    "Turned ideas into progress with a flurry of keystrokes."
  ],
  play: [
    "Beat that tricky boss at last!",
    "Caught up with friends for a board game night.",
    "Lost track of time exploring a pixelated world."
  ],
  read: [
    "Got lost in a fantasy realm for a chapter or two.",
    "Devoured some non-fiction knowledge nuggets.",
    "Comic book binge for the win!"
  ],
  meditate: [
    "Silence and breathing brought surprising clarity.",
    "Took a mindful pause and felt tension melt.",
    "Zen mode achieved; the world slowed down."
  ],
  shop: [
    "Found a bargain that sparked pure joy.",
    "Window-shopped with no regrets.",
    "Scored the last item on the shelf—victory!"
  ],
  cook: [
    "Experimented with spices and nailed it.",
    "Whipped up comfort food that warmed the soul.",
    "Burned the first batch, aced the second."
  ],
  travel: [
    "Imaginary road trip turned daydream into wanderlust.",
    "Took the scenic route and found new inspiration.",
    "Photos snapped, memories made."
  ],
  sleep: [
    "Power nap gave a burst of renewed energy.",
    "Dreamland was a wild adventure all its own.",
    "Early bedtime? Best decision of the day."
  ]
};

let db;
let userLocation = null;
const useServer = typeof logServerUrl !== 'undefined' && logServerUrl;

// Initialize Firebase if config is provided
if (typeof firebaseConfig !== 'undefined') {
  const app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
}

// Attempt to get user location
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    userLocation = `${latitude.toFixed(2)},${longitude.toFixed(2)}`;
  });
}

function renderEntry(data) {
  const log = document.getElementById('log');
  const div = document.createElement('div');
  div.className = 'entry';
  const time = new Date(data.timestamp).toLocaleTimeString();
  const location = data.location ? ` (${data.location})` : '';
  div.textContent = `[${time}] ${data.action}: ${data.message}${location}`;
  log.insertBefore(div, log.firstChild);
}

function addEntry(action) {
  const messages = blurbs[action];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const entry = {
    action,
    message,
    timestamp: Date.now(),
    location: userLocation
  };

  // Immediately show locally
  renderEntry(entry);

  // Store remotely
  if (useServer) {
    fetch(logServerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    }).catch(console.error);
  } else if (db) {
    db.collection('activitylog').add(entry).catch(console.error);
  }
}

// Listen for changes from firestore
if (db) {
  db.collection('activitylog')
    .orderBy('timestamp', 'desc')
    .limit(50)
    .onSnapshot(snapshot => {
      const log = document.getElementById('log');
      log.innerHTML = '';
      snapshot.forEach(doc => renderEntry(doc.data()));
    });
}

document.getElementById('actions').addEventListener('click', (e) => {
  if (e.target.matches('button[data-action]')) {
    addEntry(e.target.getAttribute('data-action'));
  }
});
