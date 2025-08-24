// Initialize variables
let participants = [];
let assignments = {};
let killWords = [];

// Default kill word pool
let killWordPool = [
    "ford", "honeywell", "whirlpool", "guardian",
    "quest", "pioneer", "caterpillar", "oracle", "nike",
    "fleet", "rider", "summit", "harvest", "banner",
    "union", "nation", "anchor", "peak", "valley",
    "horizon", "beacon", "bridge", "voyage", "pathway"
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

// Initialize the game
function initializeGame() {
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
  document.getElementById("admin-panel").style.display = "block";
}

// Get assignment for a player
function getAssignment() {
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
}

// View assignments (Admin Panel)
function viewAssignments() {
  if (participants.length === 0) {
    document.getElementById("assignments-output").innerHTML = "No assignments to display.";
    return;
  }

  let output = "<table border='1' style='width: 100%; text-align: center;'>";
  output += "<tr><th>Player</th><th>Target</th><th>Kill Word</th></tr>";
  participants.forEach((participant) => {
    const { target, killWord } = assignments[participant];
    output += `<tr><td>${participant}</td><td>${target}</td><td>${killWord}</td></tr>`;
  });
  output += "</table>";
  document.getElementById("assignments-output").innerHTML = output;
}

// Update kill word pool
function updateKillWordPool() {
  const newKillWords = document.getElementById("killword-pool").value.trim();
  if (!newKillWords) {
    alert("Kill word pool cannot be empty!");
    return;
  }

  killWordPool = newKillWords.split("\n").map((word) => word.trim()).filter((word) => word);
  alert("Kill word pool updated successfully!");
}

// Fill the kill word pool textarea with the current pool
function populateKillWordPool() {
  const killWordPoolTextArea = document.getElementById("killword-pool");
  killWordPoolTextArea.value = "\n" + "\n" + "\n" + "\n" + "\n" + killWordPool.join("\n");
}

// Add event listeners for buttons
document.getElementById("initialize-game").addEventListener("click", initializeGame);
document.getElementById("get-assignment").addEventListener("click", getAssignment);
document.getElementById("view-assignments").addEventListener("click", viewAssignments);
document.getElementById("update-killword-pool").addEventListener("click", updateKillWordPool);

// Add "Enter" key functionality
document.getElementById("participant-input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission behavior
    initializeGame();
  }
});

document.getElementById("player-name").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission behavior
    getAssignment();
  }
});

// Populate kill word pool on page load
document.addEventListener("DOMContentLoaded", populateKillWordPool);