const readlineSync = require("readline-sync");
const { board4, board5, board6 } = require("./boards");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

const config = { boardSize: { 4: board4, 5: board5, 6: board6 } };

const rowMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };
const rowLabels = ["A", "B", "C", "D", "E", "F"];
const rowLabels4 = rowLabels.slice(0, 4);
const rowLabels5 = rowLabels.slice(0, 5);
let labeledBoard4 = {
  A: [],
  B: [],
  C: [],
  D: [],
};
let labeledBoard5 = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
};
let labeledBoard6 = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
};
function reveal(board, labeledBoard, rowLabels) {
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

function ascii() {
  console.log(
    `
  ========
  __   _______ _   _   _    _ _____ _   _
  \\ \\ / /  _  | | | | | |  | |_   _| \\ | |
   \\ V /| | | | | | | | |  | | | | |  \\| |
    \\ / | | | | | | | | |/\\| | | | | . ' |
    | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
    \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/ 
  ========
`
  );
}

function setHitTrue(board, row, col) {
  board[row][col].hit = true;
}

function guessCoord4x4(board) {
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-D][0-3]/i)) {
      reveal(board, labeledBoard4, rowLabels4);
      userInput = readlineSync.question(
        "Make a valid guess eg.. A1, B2, etc..."
      );
      console.clear();
      rowIndex = rowMap[userInput[0].toUpperCase()];
      colIndex = userInput[1];
    }

    if (board[rowIndex][colIndex].type === "large") {
      console.log("Great shot! You hit a large ship!");
    }
    if (board[rowIndex][colIndex].type === "small") {
      console.log("Great shot! You hit a small ship!");
    }
    if (board[rowIndex][colIndex].type === "empty") {
      console.log("Oh no! You missed!");
    }

    setHitTrue(board, rowIndex, colIndex);
    reveal(board, labeledBoard4, rowLabels4);
  }
  ascii();
}

function guessCoord5x5(board) {
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-E][0-4]/i)) {
      reveal(board, labeledBoard5, rowLabels5);
      userInput = readlineSync.question(
        "Make a valid guess eg.. A1, B2, etc..."
      );
      console.clear();
      rowIndex = rowMap[userInput[0].toUpperCase()];
      colIndex = userInput[1];
    }

    if (board[rowIndex][colIndex].type === "large") {
      console.log("Great shot! You hit a large ship!");
    }
    if (board[rowIndex][colIndex].type === "small") {
      console.log("Great shot! You hit a small ship!");
    }
    if (board[rowIndex][colIndex].type === "empty") {
      console.log("Oh no! You missed!");
    }

    setHitTrue(board, rowIndex, colIndex);
    reveal(board, labeledBoard5, rowLabels5);
  }
  ascii();
}

function guessCoord6x6(board) {
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-F][0-5]/i)) {
      reveal(board, labeledBoard6, rowLabels);
      userInput = readlineSync.question(
        "Make a valid guess eg.. A1, B2, etc..."
      );
      console.clear();
      rowIndex = rowMap[userInput[0].toUpperCase()];
      colIndex = userInput[1];
    }

    if (board[rowIndex][colIndex].type === "large") {
      console.log("Great shot! You hit a large ship!");
    }
    if (board[rowIndex][colIndex].type === "small") {
      console.log("Great shot! You hit a small ship!");
    }
    if (board[rowIndex][colIndex].type === "empty") {
      console.log("Oh no! You missed!");
    }

    setHitTrue(board, rowIndex, colIndex);
    reveal(board, labeledBoard6, rowLabels);
  }
  ascii();
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

module.exports = {
  guessCoord4x4,
  guessCoord5x5,
  guessCoord6x6,
};
