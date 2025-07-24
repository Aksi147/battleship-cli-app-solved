const readlineSync = require("readline-sync");
const {
  board4,
  board5,
  board6,
  board4x4,
  board5x5,
  board6x6,
} = require("./boards");
const { guessCoord4x4, guessCoord5x5, guessCoord6x6 } = require("./functions");

//prompt 1
console.log("Welcome to Battleship 🚢");

let boards = ["4x4", "5x5", "6x6"];
let index = readlineSync.keyInSelect(boards, "Choose a Board Size");
console.clear();

let board;
if (index === 0) {
  board = board4;
  console.table(board4x4);
  guessCoord4x4(board);
}
if (index === 1) {
  board = board5;
  console.table(board5x5);
  guessCoord5x5(board);
}
if (index === 2) {
  board = board6;
  console.table(board6x6);
  guessCoord6x6(board);
}

process.exit(0);
