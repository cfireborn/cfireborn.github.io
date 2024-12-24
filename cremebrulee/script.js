document.addEventListener("DOMContentLoaded", () => {
  const bruleeButton = document.getElementById("brulee-button");
  const bruleeUncooked = document.getElementById("brulee-uncooked");
  const bruleePartial = document.getElementById("brulee-partial");
  const resultMessage = document.getElementById("result-message");

  const perfectTime = 2000 + Math.random() * 3000; // Random time between 2000ms and 5000ms
  const perfectWindow = 300; // Perfect sear window in milliseconds

  let startTime, holdTime, gameEnded, checkInterval;
  
  // Audio context setup
  let audioContext;
  let sounds = {};
  let steadyFireSource = null;
  
  // Initialize audio on first user interaction
  const initAudio = async () => {
    if (audioContext) return; // Already initialized
    
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Load all sounds
      const soundFiles = {
        woosh: 'burning-woosh.mp3',
        steadyFire: 'steady-fire.mp3',
        hiss: 'hiss.mp3',
        ovenDing: 'oven-ding.mp3',
        flameBurst: 'flame-burst.mp3'
      };

      for (const [name, file] of Object.entries(soundFiles)) {
        const response = await fetch(file);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        sounds[name] = audioBuffer;
      }
    } catch (error) {
      console.error('Audio initialization failed:', error);
    }
  };

  // Function to play a one-shot sound
  const playSound = (soundName) => {
    if (!audioContext || !sounds[soundName]) return;
    
    try {
      const source = audioContext.createBufferSource();
      source.buffer = sounds[soundName];
      source.connect(audioContext.destination);
      source.start(0);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  // Function to play looping steady fire sound
  const startSteadyFire = () => {
    if (!audioContext || !sounds.steadyFire) return;
    
    try {
      steadyFireSource = audioContext.createBufferSource();
      steadyFireSource.buffer = sounds.steadyFire;
      steadyFireSource.loop = true;
      steadyFireSource.connect(audioContext.destination);
      steadyFireSource.start(0);
    } catch (error) {
      console.error('Error starting steady fire:', error);
    }
  };

  // Function to stop steady fire sound
  const stopSteadyFire = () => {
    if (steadyFireSource) {
      try {
        steadyFireSource.stop();
        steadyFireSource = null;
      } catch (error) {
        console.error('Error stopping steady fire:', error);
      }
    }
  };

  // Initialize audio on first touch/click
  const initializeOnFirstInteraction = () => {
    initAudio();
    document.removeEventListener('touchstart', initializeOnFirstInteraction);
    document.removeEventListener('click', initializeOnFirstInteraction);
  };

  document.addEventListener('touchstart', initializeOnFirstInteraction);
  document.addEventListener('click', initializeOnFirstInteraction);

  const quadraticFade = (elapsed) => {
    const maxOpacity = 0.85; // 85% opacity
    const progress = Math.min(elapsed / perfectTime, 1);
    const opacity = (1 - Math.pow(1 - progress, 2)) * maxOpacity;
    bruleePartial.style.opacity = opacity;
  };

  const updateImageWhileHolding = (currentTime) => {
    const timeHeld = currentTime - startTime;

    if (timeHeld < perfectTime) {
      quadraticFade(timeHeld);
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      bruleePartial.src = "perfect-sear.png";
      bruleePartial.style.opacity = 1;
    } else if (timeHeld > perfectTime + perfectWindow) {
      bruleePartial.src = "burnt.png";
      bruleePartial.style.opacity = 1;
    }
  };

  const playReleaseSound = (timeHeld) => {
    stopSteadyFire();

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
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    startTime = performance.now();
    playSound('woosh');
    startSteadyFire();

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