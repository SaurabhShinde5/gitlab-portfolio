const tiles = Array.from(document.querySelectorAll(".tile"));
const turn = document.querySelector(".turn-indicator");
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
const playerX_Won = "playerX_Won";
const playerO_Won = "playerO_Won";
const draw = "draw";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function handleResult() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      turn.classList.add("hide");
      break;
    }
  }
  if (roundWon) {
    announce(currentPlayer === "X" ? playerX_Won : playerO_Won);
    isGameActive = false;
    return;
  }
  if (!board.includes("")) announce(draw);
}
const announce = (type) => {
  switch (type) {
    case playerO_Won:
      announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
      break;
    case playerX_Won:
      announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
      break;
    case draw:
      announcer.innerText = "Draw";
  }
  announcer.classList.remove("hide");
};
const isValidAction = (tile) => {
  if (tile.innerText === "X" || tile.innerText === "O") {
    return false;
  }
  return true;
};
const updateBoard = (index) => {
  board[index] = currentPlayer;
};
const changePlayer = () => {
  playerDisplay.classList.remove(`player${currentPlayer}`);
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playerDisplay.innerText = currentPlayer;
  playerDisplay.classList.add(`player${currentPlayer}`);
};
const userAction = (tile, index) => {
  if (isValidAction(tile) && isGameActive) {
    tile.innerText = currentPlayer;
    tile.classList.add(`player${currentPlayer}`);
    updateBoard(index);
    handleResult();
    changePlayer();
  }
};
const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  announcer.classList.add("hide");
  turn.classList.remove("hide");
  if (currentPlayer === "O") {
    changePlayer();
  }
  tiles.forEach((tile) => {
    tile.innerText = "";
    tile.classList.remove("playerX");
    tile.classList.remove("playerO");
  });
};
tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => userAction(tile, index));
});
resetButton.addEventListener("click", resetBoard);
