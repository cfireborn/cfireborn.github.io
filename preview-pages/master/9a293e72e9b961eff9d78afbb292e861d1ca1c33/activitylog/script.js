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

function addEntry(action) {
  const messages = blurbs[action];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const log = document.getElementById('log');
  const div = document.createElement('div');
  div.className = 'entry';
  const now = new Date().toLocaleTimeString();
  div.textContent = `[${now}] ${action}: ${message}`;
  log.insertBefore(div, log.firstChild);
}

document.getElementById('actions').addEventListener('click', (e) => {
  if (e.target.matches('button[data-action]')) {
    addEntry(e.target.getAttribute('data-action'));
  }
});
