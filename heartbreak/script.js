const PROGRESS = 15; // percent

function updateProgress() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = PROGRESS + '%';

  const boy = document.getElementById('boy-image');
  let emoji = '😢';
  if (PROGRESS >= 75) emoji = '😄';
  else if (PROGRESS >= 50) emoji = '🙂';
  else if (PROGRESS >= 25) emoji = '😔';
  boy.textContent = emoji;
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

document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  setupButtons();
});
