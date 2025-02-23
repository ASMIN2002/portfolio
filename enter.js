// Elements
const quoteBox = document.getElementById('quote-box');
const inputBox = document.getElementById('input-box');
const startBtn = document.getElementById('start-btn');
const resultDiv = document.getElementById('result');

// Quotes
const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Life becomes more beautiful when you focus on yourself.",
  "Java is a High Level programming language.",
  "Asmin Kuldeep is my best friend.",
  "Love is the universal language that touches every soul.",
  "When love is present, every moment feels like a miracle.",
  "A computer will do what you tell it to do.",
  "Technology is best when it brings people together.",
  "A simple sorry can save a relationship stronger than pride ever could."
];

// Variables
let startTime, endTime;
let currentQuote = "";

// Start Typing Test
startBtn.addEventListener('click', () => {
  // Reset
  inputBox.value = "";
  resultDiv.textContent = "";
  startBtn.disabled = true;

  // Select a random quote
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = currentQuote;

  // Start timer
  startTime = new Date().getTime();


  inputBox.disabled = false;
  inputBox.focus();
});

inputBox.addEventListener('input', () => {
  const typedText = inputBox.value;


  if (typedText === currentQuote) {
    endTime = new Date().getTime();
    calculateSpeed();
  }
});

function calculateSpeed() {
  const totalTime = (endTime - startTime) / 1000; 
  const wordCount = currentQuote.split(" ").length;
  const speed = Math.round((wordCount / totalTime) * 60); 

  resultDiv.textContent = `Your typing speed is ${speed} words per minute.`;


  startBtn.disabled = false;
  inputBox.disabled = true;
}
