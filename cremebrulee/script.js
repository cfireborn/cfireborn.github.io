document.addEventListener("DOMContentLoaded", () => {
  const bruleeButton = document.getElementById("brulee-button");
  const bruleeUncooked = document.getElementById("brulee-uncooked");
  const bruleePartial = document.getElementById("brulee-partial");
  const resultMessage = document.getElementById("result-message");
  const wooshSound = new Audio("burning-woosh.mp3");
  const steadyFireSound = new Audio("steady-fire.mp3");
  const hissSound = new Audio("hiss.mp3");
  const ovenDingSound = new Audio("oven-ding.mp3");
  const flameBurstSound = new Audio("flame-burst.mp3");

  const perfectTime = 2000 + Math.random() * 3000; // Random time between 2000ms and 5000ms
  const perfectWindow = 300; // Perfect sear window in milliseconds

  let startTime, holdTime, gameEnded, checkInterval;

  // Set looping for steady fire sound
  steadyFireSound.loop = true;

  const quadraticFade = (elapsed) => {
    const maxOpacity = 0.85; // 85% opacity
    const progress = Math.min(elapsed / perfectTime, 1); // Normalize progress (0 to 1)
    // Invert the quadratic curve and scale it
    const opacity = (1 - Math.pow(1 - progress, 2)) * maxOpacity;
    bruleePartial.style.opacity = opacity; // Apply opacity to the overlay
  };

  const updateImageWhileHolding = (currentTime) => {
    const timeHeld = currentTime - startTime;

    if (timeHeld < perfectTime) {
      quadraticFade(timeHeld); // Fade in the partial sear
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      bruleePartial.src = "perfect-sear.png"; // Switch to perfect sear
      bruleePartial.style.opacity = 1; // Fully visible
    } else if (timeHeld > perfectTime + perfectWindow) {
      bruleePartial.src = "burnt.png"; // Burnt image after the window
      bruleePartial.style.opacity = 1; // Fully visible
    }
  };

  const playReleaseSound = (timeHeld) => {
    steadyFireSound.pause(); // Stop the steady fire sound
    wooshSound.pause(); // Stop the woosh fire sound
    steadyFireSound.currentTime = 0; // Reset the fire sound

    if (timeHeld < perfectTime) {
      flameBurstSound.play(); // Play flame burst for undercooked
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      ovenDingSound.play(); // Play oven ding for perfect sear
    } else {
      hissSound.play(); // Play hiss for burnt
    }
  };

  const endGame = (timeHeld) => {
    gameEnded = true;
    bruleeButton.disabled = true;

    clearInterval(checkInterval); // Stop checking while the button is held

    const timeInSeconds = (timeHeld / 1000).toFixed(3); // Convert to seconds and format to 3 decimal places

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

    // Play the woosh sound
    wooshSound.play();

    // Start the steady fire sound in a loop
    steadyFireSound.play();

    // Start interval to continuously update the image while the button is held
    checkInterval = setInterval(() => {
      const currentTime = performance.now();
      updateImageWhileHolding(currentTime);
    }, 50); // Check every 50ms for responsiveness
  };

  const stopHolding = () => {
    if (gameEnded) return;
    holdTime = performance.now() - startTime;

    // Play the release sound based on the cooking result
    playReleaseSound(holdTime);

    // Final image update based on total time held
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