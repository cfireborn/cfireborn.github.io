document.addEventListener("DOMContentLoaded", () => {
  const bruleeButton = document.getElementById("brulee-button");
  const bruleeUncooked = document.getElementById("brulee-uncooked");
  const bruleePartial = document.getElementById("brulee-partial");
  const resultMessage = document.getElementById("result-message");

  const perfectTime = 2000 + Math.random() * 3000;
  const perfectWindow = 300;

  let startTime, holdTime, gameEnded, checkInterval;

  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Audio setup
  const sounds = {
    woosh: new Audio("sfx/burning-woosh.mp3"),
    steadyFire: new Audio("sfx/steady-fire.mp3"),
    hiss: new Audio("sfx/hiss.mp3"),
    ovenDing: new Audio("sfx/oven-ding.mp3"),
    flameBurst: new Audio("sfx/flame-burst.mp3")
  };

  // Set up looping for steady fire
  sounds.steadyFire.loop = true;

  // Preload all sounds
  Object.values(sounds).forEach(sound => {
    sound.load();
  });

  const playSound = (soundName) => {
    try {
      if (sounds[soundName]) {
        // For non-looping sounds, reset to start
        if (soundName !== 'steadyFire') {
          sounds[soundName].currentTime = 0;
        }
        sounds[soundName].play().catch(error => {
          console.error('Error playing sound:', error);
        });
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const stopSound = (soundName) => {
    try {
      if (sounds[soundName]) {
        sounds[soundName].pause();
        sounds[soundName].currentTime = 0;
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  };

  const quadraticFade = (elapsed) => {
    const maxOpacity = 0.85;
    const progress = Math.min(elapsed / perfectTime, 1);
    const opacity = (1 - Math.pow(1 - progress, 2)) * maxOpacity;
    bruleePartial.style.opacity = opacity;
  };

  const updateImageWhileHolding = (currentTime) => {
    const timeHeld = currentTime - startTime;

    if (timeHeld < perfectTime) {
      quadraticFade(timeHeld);
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      bruleePartial.src = "art/perfect-sear.png";
      bruleePartial.style.opacity = 1;
    } else if (timeHeld > perfectTime + perfectWindow) {
      bruleePartial.src = "art/burnt.png";
      bruleePartial.style.opacity = 1;
    }
  };

  const playReleaseSound = async (timeHeld) => {
    stopSound('steadyFire');
    stopSound('woosh');

    // Wait a moment before playing the result sound
    await new Promise(resolve => setTimeout(resolve, 100));

    if (timeHeld < perfectTime) {
      playSound('flameBurst');
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      playSound('ovenDing');
    } else {
      playSound('hiss');
    }
  };

  const endGame = (timeHeld) => {
    gameEnded = true;
    bruleeButton.disabled = true;
    clearInterval(checkInterval);

    const timeInSeconds = (timeHeld / 1000).toFixed(3);

    if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      resultMessage.textContent = `Perfect sear! You held for ${timeInSeconds} seconds. Refresh to try again!`;
    } else if (timeHeld < perfectTime) {
      resultMessage.textContent = `Too soon! Held for ${timeInSeconds} seconds. Refresh to try again!`;
    } else {
      resultMessage.textContent = `Burnt! Held for ${timeInSeconds} seconds. Refresh to try again!`;
    }
  };

  const startHolding = () => {
    if (gameEnded) return;
    startTime = performance.now();
    
    playSound('woosh');
    playSound('steadyFire');

    checkInterval = setInterval(() => {
      const currentTime = performance.now();
      updateImageWhileHolding(currentTime);
    }, 50);
  };

  const stopHolding = () => {
    if (gameEnded) return;
    holdTime = performance.now() - startTime;
    
    playReleaseSound(holdTime);
    updateImageWhileHolding(performance.now());
    endGame(holdTime);
  };

  // Add event listeners for both mouse and touch events
  bruleeButton.addEventListener("mousedown", startHolding);
  bruleeButton.addEventListener("mouseup", stopHolding);
  bruleeButton.addEventListener("touchstart", (e) => {
    e.preventDefault();
    startHolding();
  });
  bruleeButton.addEventListener("touchend", (e) => {
    e.preventDefault();
    stopHolding();
  });
});