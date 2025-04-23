const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
let nextPlayer = "X";
const progress = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let play = false;

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  statusText.textContent = `${nextPlayer}'s turn`;
  nextPlayer = "X";
  play = true;
}
initializeGame();

function cellClicked() {
  const cellIndex = this.getAttribute("cellId");
  if (play && progress[cellIndex] == "") {
    updateCell(cellIndex, this);
    checkWinner();
  }
}

function updateCell(index, cell) {
  cell.textContent = nextPlayer;
  progress[index] = nextPlayer;
}

function switchPlayer() {
  nextPlayer = nextPlayer == "X" ? "O" : "X";
  statusText.textContent = `${nextPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = progress[condition[0]];
    const cellB = progress[condition[1]];
    const cellC = progress[condition[2]];
    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = `${nextPlayer} wins!`;
    play = false;
  } else {
    switchPlayer();
  }
  if (!progress.includes("")) {
    statusText.textContent = `Draw!`;
    play = false;
  }
}
