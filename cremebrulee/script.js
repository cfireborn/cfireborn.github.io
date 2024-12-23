document.addEventListener("DOMContentLoaded", () => {
  const bruleeButton = document.getElementById("brulee-button");
  const bruleeImage = document.getElementById("brulee-image");
  const resultMessage = document.getElementById("result-message");
  const wooshSound = document.getElementById("woosh-sound");

  const perfectTime = 2000 + Math.random() * 3000; // Random time between 2000ms and 5000ms
  const perfectWindow = 270; // Perfect sear window in milliseconds

  let startTime, holdTime, gameEnded;

  const updateImage = (timeHeld) => {
    if (timeHeld < perfectTime) {
      bruleeImage.src = "partial-sear.png";
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      bruleeImage.src = "perfect-sear.png";
    } else {
      bruleeImage.src = "burnt.png";
    }
  };

  const endGame = (timeHeld) => {
    gameEnded = true;
    bruleeButton.disabled = true;

    if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      resultMessage.textContent = `Perfect sear! You held for ${timeHeld.toFixed(
        2
      )} ms. Refresh to try again!`;
    } else if (timeHeld < perfectTime) {
      resultMessage.textContent = `Too soon! Held for ${timeHeld.toFixed(
        2
      )} ms. Refresh to try again!`;
    } else {
      resultMessage.textContent = `Burnt! Held for ${timeHeld.toFixed(
        2
      )} ms. Refresh to try again!`;
    }
  };

  bruleeButton.addEventListener("mousedown", () => {
    if (gameEnded) return;
    startTime = performance.now();
    bruleeImage.src = "partial-sear.png";
  });

  bruleeButton.addEventListener("mouseup", () => {
    if (gameEnded) return;
    holdTime = performance.now() - startTime;
    updateImage(holdTime);

    // Play the woosh sound
    wooshSound.currentTime = 0; // Reset the sound to the beginning
    wooshSound.play();

    endGame(holdTime);
  });
});