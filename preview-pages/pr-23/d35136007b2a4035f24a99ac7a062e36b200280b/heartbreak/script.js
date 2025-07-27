let progress = 15; // percent

let currentImagePath = '';
// July 11, 2025 at midnight UTC
const breakupDate = new Date('2025-07-11T00:00:00Z');

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
  // Get the next image in the same stage/style bucket
  if (typeof getNextImageInBucket === 'function') {
    const nextImagePath = getNextImageInBucket(progress);
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
        console.log(`Shuffled to next ${stageInfo.name} stage image: ${nextImagePath}`);
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

function addEntry(action) {
  const messages = blurbs[action];
  if (!messages) return;
  const message = messages[Math.floor(Math.random() * messages.length)];
  const log = document.getElementById('log');
  const div = document.createElement('div');
  div.className = 'entry';
  const now = new Date().toLocaleTimeString();
  div.textContent = `[${now}] ${message}`;
  log.insertBefore(div, log.firstChild);
}

function setupButtons() {
  // Setup healing activity buttons
  document.querySelectorAll('#buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      spawnEmoji(btn.getAttribute('data-emoji'));
      addEntry(btn.getAttribute('data-action'));
      changeProgress(1);
    });
  });

  // Setup shuffle Charlie button
  const shuffleBtn = document.getElementById('shuffle-charlie');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', shuffleCharlie);
  }

  const increaseBtn = document.getElementById('increase-progress');
  const decreaseBtn = document.getElementById('decrease-progress');
  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => changeProgress(5));
  }
  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => changeProgress(-5));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  updateDaysSinceBreakup();
  setupButtons();
});
