// Initialize variables
let participants = [];
let assignments = {};
let killWords = [];

// Kill word pool
const killWordPool = [
  "target", "whisper", "sunset", "valley", "anchor",
  "harvest", "summit", "bridge", "pioneer", "union",
  "guardian", "horizon", "voyage", "quest", "pathway"
];

// Shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Assign targets and kill words
function assignTargetsAndKillWords() {
  shuffle(participants);
  shuffle(killWordPool);

  for (let i = 0; i < participants.length; i++) {
    const target = participants[(i + 1) % participants.length];
    const killWord = killWordPool[i % killWordPool.length];
    assignments[participants[i]] = { target, killWord };
  }
}

// Add "Enter" key functionality
// Paste the following logic to handle Enter key events:
document.getElementById("participant-input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    initializeGame(); // Trigger initialization
  }
});

document.getElementById("player-name").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getAssignment(); // Trigger target retrieval
  }
});

// Initialize the game
document.getElementById("initialize-game").addEventListener("click", () => {
  const input = document.getElementById("participant-input").value.trim();
  if (!input) {
    alert("Please enter at least two participants.");
    return;
  }

  participants = input.split(",").map((name) => name.trim()).filter((name) => name);
  if (participants.length < 2) {
    alert("You need at least two participants!");
    return;
  }

  assignTargetsAndKillWords();
  document.getElementById("game-output").innerHTML = "Game Initialized! Participants have been assigned.";
  document.getElementById("player-section").style.display = "block";
});

// Get assignment for a player
document.getElementById("get-assignment").addEventListener("click", () => {
  const name = document.getElementById("player-name").value.trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  const assignment = assignments[name];
  if (!assignment) {
    document.getElementById("assignment-output").textContent = "Name not found. Are you part of the game?";
    return;
  }

  document.getElementById("assignment-output").innerHTML = `
    Your target: <strong>${assignment.target}</strong><br>
    Your kill word: <strong>${assignment.killWord}</strong>
  `;
});