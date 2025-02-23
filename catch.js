const puzzleContainer = document.getElementById("puzzle-container");
const shuffleBtn = document.getElementById("shuffle-btn");
const restartBtn = document.getElementById("restart-btn");
const resultDisplay = document.getElementById("result");

let tiles = [];
let emptyTileIndex;

// Initialize the puzzle
function initPuzzle() {
  tiles = Array.from({ length: 9 }, (_, i) => (i === 8 ? "" : i + 1));
  emptyTileIndex = 8;
  renderTiles();
  resultDisplay.textContent = "Good Luck!";
}

// Render the tiles on the grid
function renderTiles() {
  puzzleContainer.innerHTML = "";
  tiles.forEach((tile, index) => {
    const tileElement = document.createElement("div");
    tileElement.className = "tile";
    if (tile === "") {
      tileElement.classList.add("empty");
    } else {
      tileElement.textContent = tile;
      tileElement.addEventListener("click", () => moveTile(index));
    }
    puzzleContainer.appendChild(tileElement);
  });
}

// Move a tile if it is adjacent to the empty space
function moveTile(index) {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const emptyRow = Math.floor(emptyTileIndex / 3);
  const emptyCol = emptyTileIndex % 3;

  const isAdjacent =
    (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
    (Math.abs(col - emptyCol) === 1 && row === emptyRow);

  if (isAdjacent) {
    tiles[emptyTileIndex] = tiles[index];
    tiles[index] = "";
    emptyTileIndex = index;
    renderTiles();
    checkWin();
  }
}

// Shuffle the puzzle tiles
function shuffleTiles() {
  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * 9);
    moveTile(randomIndex);
  }
  resultDisplay.textContent = "Game Shuffled! Start Playing!";
}

// Check if the puzzle is solved
function checkWin() {
  const isSolved =
    tiles.slice(0, 8).every((tile, i) => tile === i + 1) && tiles[8] === "";
  if (isSolved) {
    resultDisplay.textContent = "Congratulations! You Solved the Puzzle!";
  }
}

// Event Listeners
shuffleBtn.addEventListener("click", shuffleTiles);
restartBtn.addEventListener("click", initPuzzle);

// Start the game
initPuzzle();
