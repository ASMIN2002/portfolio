// Game Variables
const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');
const cardValues = ['😶‍🌫️', '🐳', '🦊', '🐻', '🐼', '🐸', '🐰', '🦁'];
let cards = [];
let flippedCards = [];
let matchedCards = 0;

// Initialize Game
function initializeGame() {
  gameBoard.innerHTML = '';
  flippedCards = [];
  matchedCards = 0;

  // Duplicate and shuffle cards
  const allValues = [...cardValues, ...cardValues];
  const shuffledValues = allValues.sort(() => Math.random() - 0.5);

  // Create cards
  shuffledValues.forEach((value) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="front"></div>
      <div class="back">${value}</div>
    `;
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

// Flip Card
function flipCard(card) {
  if (flippedCards.length === 2 || card.classList.contains('flip')) return;

  card.classList.add('flip');
  flippedCards.push(card);

  // Check for a match
  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    const value1 = card1.querySelector('.back').textContent;
    const value2 = card2.querySelector('.back').textContent;

    if (value1 === value2) {
      matchedCards += 2;
      flippedCards = [];

      // Check for win
      if (matchedCards === cards.length) {
        setTimeout(() => alert('Congratulations! You matched all pairs!'), 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        flippedCards = [];
      }, 1000);
    }
  }
}

// Restart Game
restartBtn.addEventListener('click', initializeGame);

// Start Game
initializeGame();
