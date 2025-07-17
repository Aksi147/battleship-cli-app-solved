const readlineSync = require("readline-sync");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

// actual board for game
let board3 = [
  [
    { type: "large", id: 1, hit: false }, // Represents position A0
    { type: "small", hit: false }, // Represents position A1
    { type: "small", hit: false }, // Represents position A2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position C0
    { type: "empty", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
  ],
];

// inputs
function inputs(board) {
  const result = [];
  for (let row = 0; row < board.length; row++) {
    result.push(...board[row]);
  }
  return result;
}

// reveals ship type, and if it was hit or miss
function reveal(board) {
  let labeledBoard = {
    A: [],
    B: [],
    C: [],
  };

  const rowLabels = ["A", "B", "C"];

  // assigns symbol to cell
  function getHitSymbol(cell) {
    if (cell.type === "large" && cell.hit) return hitLarge;
    if (cell.type === "small" && cell.hit) return hitSmall;
    if (cell.hit) return miss;
    else return "-";
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      labeledBoard[rowLabels[row]][col] = getHitSymbol(board[row][col]);
    }
  }
  console.table(labeledBoard);
}

// reveals all ships
function printBoard(board) {
  function revealShip(cell) {
    if (cell.type === "large") return hitLarge;
    if (cell.type === "small") return hitSmall;
    else return "-";
  }

  let labeledBoard = {
    A: [],
    B: [],
    C: [],
  };

  const rowLabels = ["A", "B", "C"];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      labeledBoard[rowLabels[row]][col] = revealShip(board[row][col]);
    }
  }
  console.table(labeledBoard);
}

// GAME STARTS HERE // GAME STARTS HERE // GAME STARTS HERE // GAME STARTS HERE // GAME STARTS HERE //

//prompt 1
console.log("Welcome to Battleship!");
reveal(board3);
/* const wantToPlay = readlineSync.keyInYN("Would you like to play?");
if (!wantToPlay) {
  console.log("Fine! I didnt want to play either 🥲");
  process.exit(0);
} */

let userInput = readlineSync.question("Type in your coordinate!");

if (userInput.match(/[A-C][0-2]/i)) {
  console.log("the coordinate works");
}
while (!userInput.match(/^[A-C][0-2]$/i)) {
  userInput = readlineSync.question("Type in your coordinate!");
}

const [] = [];
