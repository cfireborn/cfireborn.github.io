const PROGRESS = 15; // percent

const IMAGE_BUCKETS = [
  ['\u{1F64D}\u{FE0F}\u{200D}\u{2642}\u{FE0F}', '\u{1F62D}', '\u{1F494}'], // very depressed 0-20%
  ['\u{1F614}', '\u{1F616}', '\u{1F61E}'], // sad 21-40%
  ['\u{1F610}', '\u{1F642}'], // okay 41-60%
  ['\u{1F60A}', '\u{1F603}', '\u{1F604}'], // happy 61-80%
  ['\u{1F601}', '\u{1F60E}', '\u{1F389}']  // very happy 81-100%
];

function bucketIndex(progress) {
  const idx = Math.min(Math.floor(progress / 20), IMAGE_BUCKETS.length - 1);
  return idx;
}

function randomBoyImage(progress) {
  const bucket = IMAGE_BUCKETS[bucketIndex(progress)];
  return bucket[Math.floor(Math.random() * bucket.length)];
}

function updateProgress() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = PROGRESS + '%';
  const label = document.getElementById('progress-label');
  if (label) {
    label.textContent = `${PROGRESS}/100%`;
  }
  updateBoyImage();
}

function updateBoyImage() {
  const boy = document.getElementById('boy-image');
  const emoji = randomBoyImage(PROGRESS);
  boy.textContent = emoji;
  boy.setAttribute('aria-label', `progress emoji ${PROGRESS} percent`);
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

function setupButtons() {
  document.querySelectorAll('#buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      spawnEmoji(btn.getAttribute('data-emoji'));
    });
  });
}

function setupShuffle() {
  const btn = document.getElementById('shuffle-image');
  if (btn) {
    btn.addEventListener('click', updateBoyImage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  setupButtons();
  setupShuffle();
});
