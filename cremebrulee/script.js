document.addEventListener("DOMContentLoaded", () => {
  const bruleeButton = document.getElementById("brulee-button");
  const bruleeImage = document.getElementById("brulee-image");
  const resultMessage = document.getElementById("result-message");
  const wooshSound = document.getElementById("woosh-sound");

  const perfectTime = 2000 + Math.random() * 3000; // Random time between 2000ms and 5000ms
  const perfectWindow = 270; // Perfect sear window in milliseconds

  let startTime, holdTime, gameEnded, checkInterval;

  const updateImageWhileHolding = (currentTime) => {
    const timeHeld = currentTime - startTime;

    if (timeHeld < perfectTime) {
      bruleeImage.src = "partial-sear.png";
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      bruleeImage.src = "perfect-sear.png";
    } else if (timeHeld > perfectTime + perfectWindow) {
      bruleeImage.src = "burnt.png";
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

  bruleeButton.addEventListener("mousedown", () => {
    if (gameEnded) return;
    startTime = performance.now();
    bruleeImage.src = "partial-sear.png";

    // Start interval to continuously update the image while the button is held
    checkInterval = setInterval(() => {
      const currentTime = performance.now();
      updateImageWhileHolding(currentTime);
    }, 50); // Check every 50ms for responsiveness
  });

  bruleeButton.addEventListener("mouseup", () => {
    if (gameEnded) return;
    holdTime = performance.now() - startTime;

    // Play the woosh sound
    wooshSound.currentTime = 0; // Reset the sound to the beginning
    wooshSound.play();

    // Final image update based on total time held
    updateImageWhileHolding(performance.now());

    endGame(holdTime);
  });
});