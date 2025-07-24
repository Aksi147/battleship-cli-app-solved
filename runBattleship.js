const readlineSync = require("readline-sync");
const { board4x4, board5x5, board6x6 } = require("./boards");
const { guessCoord } = require("./functions");

//prompt 1
console.log("Welcome to Battleship 🚢");

let boards = ["4x4", "5x5", "6x6"];
let index = readlineSync.keyInSelect(boards, "Choose a Board Size");
console.clear();

if (index === 0) {
  console.table(board4x4);
  guessCoord(4);
}
if (index === 1) {
  console.table(board5x5);
  guessCoord(5);
}
if (index === 2) {
  console.table(board6x6);
  guessCoord(6);
}

process.exit(0);
