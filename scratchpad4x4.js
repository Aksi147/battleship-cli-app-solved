const readlineSync = require("readline-sync");
const { board4, board4x4 } = require("./boards");

const rowMap = { A: 0, B: 1, C: 2, D: 3 };

//prompt 1
console.log("Welcome to Battleship!");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

let boards = ["4x4", "5x5", "6x6"];
let index = readlineSync.keyInSelect(
  boards,
  "Select which board you want to play"
);

let board;
if (index === 0) {
  board = board4;
  console.table(board4x4);
  guessCoord4x4(board);
}
if (index === 1) {
  board = board5;
  console.table(board5x5);
}
if (index === 2) {
  board = board6;
  console.table(board6x6);
}

function guessCoord4x4(board) {
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Type in your coordinate!");

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-D][0-3]/i)) {
      userInput = readlineSync.question("Please type in a valid coordinate!");
      rowIndex = rowMap[userInput[0].toUpperCase()];
      colIndex = userInput[1];
    }
    function setHitTrue(board) {
      board[rowIndex][colIndex].hit = true;
    }

    setHitTrue(board);

    if (board[rowIndex][colIndex].type === "large") {
      console.log("Great shot! You hit a large ship!");
    }
    if (board[rowIndex][colIndex].type === "small") {
      console.log("Great shot! You hit a small ship!");
    }
    if (board[rowIndex][colIndex].type === "empty") {
      console.log("Oh no! You missed!");
    }

    function reveal(board) {
      let labeledBoard = {
        A: [],
        B: [],
        C: [],
        D: [],
      };

      const rowLabels = ["A", "B", "C", "D"];

      // assigns symbol to cell
      function getHitSymbol(board, row, col) {
        if (board[row][col].type === "large" && board[row][col].hit) {
          return hitLarge;
        }
        if (board[row][col].type === "small" && board[row][col].hit)
          return hitSmall;
        if (board[row][col].hit) return miss;
        else return "-";
      }

      for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
          labeledBoard[rowLabels[row]][col] = getHitSymbol(board, row, col);
        }
      }
      console.table(labeledBoard);
    }
    reveal(board);
  }
  console.log("Congrats! You WIN!!!");
}

function allShipsDestroyed(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let cell = board[row][col];
      if (cell.type === "large" || cell.type === "small") {
        if (!cell.hit) return false;
      }
    }
  }
  return true;
}

process.exit(0);
