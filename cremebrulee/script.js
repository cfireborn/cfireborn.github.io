document.addEventListener("DOMContentLoaded", async () => {
  const bruleeButton = document.getElementById("brulee-button");
  const bruleeUncooked = document.getElementById("brulee-uncooked");
  const bruleePartial = document.getElementById("brulee-partial");
  const resultMessage = document.getElementById("result-message");
  const nameEntry = document.getElementById("name-entry");
  const playerNameInput = document.getElementById("player-name");
  const submitScoreButton = document.getElementById("submit-score");
  const leaderboard = document.getElementById("leaderboard");
  const leaderboardEntries = document.getElementById("leaderboard-entries");
  const dailyCount = document.getElementById("daily-count");
  const totalCount = document.getElementById("total-count");

  const perfectTime = 2000 + Math.random() * 3000;
  const perfectWindow = 300;

  let startTime, holdTime, gameEnded, checkInterval;
  let authClient, leaderboardClient;
  let userToken = null;
  let currentScore = null;

  // Initialize API clients
  const initializeClients = () => {
    authClient = new AuthServiceApi();
    leaderboardClient = new LeaderboardsServiceApi();
  };

  // Update count displays
  const updateCounts = async () => {
    try {
      const dailyResponse = await leaderboardClient.getScores(
        "DailyBruleeCount", 
        "top", 
        1, 
        userToken
      );
      const totalResponse = await leaderboardClient.getScores(
        "LifetimeBruleeCount", 
        "top", 
        1, 
        userToken
      );
      
      dailyCount.textContent = dailyResponse.user_scores[0]?.score || "0";
      totalCount.textContent = totalResponse.user_scores[0]?.score || "0";
    } catch (error) {
      console.error("Error updating counts:", error);
    }
  };

  // Increment attempt counters
  const incrementCounts = async () => {
    try {
      await leaderboardClient.incrementScore(
        "DailyBruleeCount",
        "global",
        userToken,
        { delta: 1 }
      );
      await leaderboardClient.incrementScore(
        "LifetimeBruleeCount",
        "global",
        userToken,
        { delta: 1 }
      );
      updateCounts();
    } catch (error) {
      console.error("Error incrementing counts:", error);
    }
  };

  // Update leaderboard display
  const updateLeaderboard = async () => {
    try {
      const response = await leaderboardClient.getScores(
        "DailyBruleeScores",
        "top",
        10,
        userToken
      );
      
      leaderboardEntries.innerHTML = "";
      response.user_scores.forEach((score, index) => {
        const entry = document.createElement("div");
        entry.className = "leaderboard-entry";
        entry.innerHTML = `
          <span>#${index + 1} ${score.user_metadata?.displayName || 'Anonymous'}</span>
          <span>${(score.score / 1000).toFixed(3)}s</span>
        `;
        leaderboardEntries.appendChild(entry);
      });
    } catch (error) {
      console.error("Error updating leaderboard:", error);
    }
  };

  // Handle score submission
  const submitScore = async () => {
    if (!currentScore || !playerNameInput.value) return;
    
    try {
      const displayName = playerNameInput.value;
      const anonymousResponse = await authClient.anonLogin({
        username: `player_${Date.now()}`,
        create_user: true
      });
      
      userToken = anonymousResponse.user.session_token;
      
      await leaderboardClient.setScore(
        "DailyBruleeScores",
        anonymousResponse.user.id,
        userToken,
        {
          score: currentScore,
          user_metadata: { displayName }
        }
      );
      
      nameEntry.style.display = "none";
      leaderboard.style.display = "block";
      updateLeaderboard();
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  // Initialize anonymous session for counting
  const initializeSession = async () => {
    try {
      const response = await authClient.anonLogin({
        username: `counter_${Date.now()}`,
        create_user: true
      });
      userToken = response.user.session_token;
      updateCounts();
    } catch (error) {
      console.error("Error initializing session:", error);
    }
  };

  // Audio setup
  const sounds = {
    woosh: new Audio("sfx/burning-woosh.mp3"),
    steadyFire: new Audio("sfx/steady-fire.mp3"),
    hiss: new Audio("sfx/hiss.mp3"),
    ovenDing: new Audio("sfx/oven-ding.mp3"),
    flameBurst: new Audio("sfx/flame-burst.mp3")
  };

  sounds.steadyFire.loop = true;

  Object.values(sounds).forEach(sound => {
    sound.load();
  });

  const playSound = (soundName) => {
    try {
      if (sounds[soundName]) {
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

    await new Promise(resolve => setTimeout(resolve, 100));

    if (timeHeld < perfectTime) {
      playSound('flameBurst');
    } else if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      playSound('ovenDing');
    } else {
      playSound('hiss');
    }
  };

  submitScoreButton.addEventListener("click", submitScore);

  const endGame = (timeHeld) => {
    gameEnded = true;
    bruleeButton.disabled = true;
    clearInterval(checkInterval);

    const timeInSeconds = (timeHeld / 1000).toFixed(3);
    incrementCounts();

    if (timeHeld >= perfectTime && timeHeld <= perfectTime + perfectWindow) {
      currentScore = timeHeld;
      resultMessage.textContent = `Perfect sear! You held for ${timeInSeconds} seconds.`;
      nameEntry.style.display = "block";
    } else if (timeHeld < perfectTime) {
      currentScore = timeHeld;
      resultMessage.textContent = `Too soon! Held for ${timeInSeconds} seconds.`;
      nameEntry.style.display = "block";
    } else {
      resultMessage.textContent = `Burnt! Held for ${timeInSeconds} seconds.`;
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

  // Initialize everything
  initializeClients();
  await initializeSession();
});