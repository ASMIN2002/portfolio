// Define choices
const choices = ["rock", "paper", "scissors"];

// DOM Elements
const userChoiceDisplay = document.querySelector("#user-choice span");
const computerChoiceDisplay = document.querySelector("#computer-choice span");
const resultDisplay = document.querySelector("#result span");
const winCountDisplay = document.getElementById("win-count");
const lossCountDisplay = document.getElementById("loss-count");
const drawCountDisplay = document.getElementById("draw-count");
const choiceButtons = document.querySelectorAll(".choice");
const resetTableButton = document.getElementById("reset-table-btn");

// Score Counters
let winCount = 0;
let lossCount = 0;
let drawCount = 0;

// Function to get computer's random choice
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Function to determine the winner
const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    drawCount++;
    drawCountDisplay.textContent = drawCount;
    return "It's a Draw! 🤝";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winCount++;
    winCountDisplay.textContent = winCount;
    return "You Win! Boom 🎉";
  }
  lossCount++;
  lossCountDisplay.textContent = lossCount;
  return "You Lose! Oops 😢";
};

// Event listener for choice buttons
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    // Update DOM
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
  });
});

// Event listener for reset table button
resetTableButton.addEventListener("click", () => {
  winCount = 0;
  lossCount = 0;
  drawCount = 0;

  winCountDisplay.textContent = winCount;
  lossCountDisplay.textContent = lossCount;
  drawCountDisplay.textContent = drawCount;

  userChoiceDisplay.textContent = "-";
  computerChoiceDisplay.textContent = "-";
  resultDisplay.textContent = "-";
});
