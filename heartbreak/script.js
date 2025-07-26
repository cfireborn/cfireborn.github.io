const PROGRESS = 15; // percent

let currentImagePath = '';

function updateProgress() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = PROGRESS + '%';

  const label = document.getElementById('progress-label');
  label.textContent = PROGRESS + '/100%';

  // Update Charlie's image based on healing progress
  updateCharlieImage();
}

function updateCharlieImage() {
  const boyImg = document.getElementById('boy-image');
  
  // Use the image randomizer to get appropriate image
  if (typeof getRandomImagePath === 'function') {
    currentImagePath = getRandomImagePath(PROGRESS);
    boyImg.src = currentImagePath;
    
    // Add error handling for missing images
    boyImg.onerror = function() {
      // Fallback to emoji if image doesn't exist
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.id = 'boy-emoji-fallback';
      fallback.style.fontSize = '4rem';
      
      let emoji = '😢';
      if (PROGRESS >= 75) emoji = '😄';
      else if (PROGRESS >= 50) emoji = '🙂';
      else if (PROGRESS >= 25) emoji = '😔';
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
    if (PROGRESS >= 75) emoji = '😄';
    else if (PROGRESS >= 50) emoji = '🙂';
    else if (PROGRESS >= 25) emoji = '😔';
    
    const fallback = document.createElement('div');
    fallback.id = 'boy-emoji-fallback';
    fallback.style.fontSize = '4rem';
    fallback.textContent = emoji;
    boyImg.parentNode.insertBefore(fallback, boyImg);
  }
}

function shuffleCharlie() {
  // Get a new random image for the current healing stage
  if (typeof getRandomImagePath === 'function') {
    const newImagePath = getRandomImagePath(PROGRESS);
    const boyImg = document.getElementById('boy-image');
    
    // Add a subtle animation during shuffle
    boyImg.style.opacity = '0.5';
    
    setTimeout(() => {
      boyImg.src = newImagePath;
      currentImagePath = newImagePath;
      boyImg.style.opacity = '1';
      
      // Log the stage info for debugging
      if (typeof getStageInfo === 'function') {
        const stageInfo = getStageInfo(PROGRESS);
        console.log(`Shuffled to new ${stageInfo.name} stage image: ${newImagePath}`);
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

function setupButtons() {
  // Setup healing activity buttons
  document.querySelectorAll('#buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      spawnEmoji(btn.getAttribute('data-emoji'));
    });
  });
  
  // Setup shuffle Charlie button
  const shuffleBtn = document.getElementById('shuffle-charlie');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', shuffleCharlie);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  setupButtons();
});
