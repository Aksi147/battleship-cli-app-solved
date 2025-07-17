const readlineSync = require("readline-sync");

let myBoard = {
  A: ["-", "-", "-"],
  B: ["-", "-", "-"],
  C: ["-", "-", "-"],
};

//prompt 1
console.log("Welcome to Battleship!");
console.table(myBoard);
//const wantToPlay = readlineSync.keyInYN("Would you like to play?");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

// actual board for game
let board = [
  [
    { type: "large", id: 1, hit: false }, // Represents position A0
    { type: "small", hit: false }, // Represents position A1
    { type: "small", hit: false }, // Represents position A2
  ],
  [
    { type: "large", id: 1, hit: true }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position C0
    { type: "empty", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
  ],
];

// test board for debugging purposes
const testBoard1 = [
  [
    { type: "large", id: 1, hit: false }, // Represents position A0
    { type: "small", id: 2, hit: true }, // Represents position A1
    { type: "small", id: 2, hit: false }, // Represents position A2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: true }, // Represents position B2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position C0
    { type: "empty", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
  ],
];

// assigns symbol to cell
function getSymbol(cell) {
  if (cell.type === "large" && cell.hit) return hitLarge;
  if (cell.type === "small" && cell.hit) return hitSmall;
  if (cell.hit) return miss;
  else return "-";
}

// reveals ship type, and if it was hit or miss
function reveal() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = getSymbol(board[row][col]);
    }
  }
}

// reveals all ships
function printBoard(board) {
  function revealShip(cell) {
    if (cell.type === "large") return hitLarge;
    if (cell.type === "small") return hitSmall;
    else return "-";
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = revealShip(board[row][col]);
    }
  }
  console.table(board);
}

printBoard(testBoard1);

reveal();
console.table(board);
