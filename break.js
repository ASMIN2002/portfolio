const words = ["horse", "elephant", "school", "father", "mother","sister","hostel","basketball"];
let chosenWord = "";
let scrambledWord = "";

// Shuffle the letters in a word
const shuffleWord = (word) => {
  const letters = word.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join("");
};

// Start a new game
const startGame = () => {
  const wordIndex = Math.floor(Math.random() * words.length);
  chosenWord = words[wordIndex];
  scrambledWord = shuffleWord(chosenWord);

  // Ensure scrambled word is different from the original
  while (scrambledWord === chosenWord) {
    scrambledWord = shuffleWord(chosenWord);
  }

  document.getElementById("scrambled-word").textContent = scrambledWord;
  document.getElementById("feedback").textContent = "";
  document.getElementById("user-input").value = "";
};

// Check the user's guess
const checkGuess = () => {
  const userGuess = document.getElementById("user-input").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userGuess === chosenWord) {
    feedback.textContent = "Correct! 🎉";
    feedback.style.color = "lightgreen";
  } else {
    feedback.textContent = "Try again! ❌";
    feedback.style.color = "red";
  }
};

// Event listeners
document.getElementById("submit-btn").addEventListener("click", checkGuess);
document.getElementById("reset-btn").addEventListener("click", startGame);

// Initialize the game
startGame();
