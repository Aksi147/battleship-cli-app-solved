const readlineSync = require("readline-sync");
const { board4, board5, board6, createBoardWithLabels } = require("./boards");
const { rowLabels } = require("./config");
const { actualBoard } = require("./runBattleship");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

const config = {
  boardSize: {
    4: {
      board: board4,
      rowLabels: rowLabels.slice(0, 4),
      labeledBoard: {
        A: [],
        B: [],
        C: [],
        D: [],
      },
      regex: /[A-D][0-3]/i,
    },
    5: {
      board: board5,
      rowLabels: rowLabels.slice(0, 5),
      labeledBoard: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
      },
      regex: /[A-E][0-4]/i,
    },
    6: {
      board: board6,
      rowLabels,
      labeledBoard: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
      },
      regex: /[A-F][0-5]/i,
    },
  },
};

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

const rowMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };

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

function setHitTrue(board, row, col) {
  board[row][col].hit = true;
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

function guessCoord(size, rowLabels) {
  const labeledBoard = createBoardWithLabels(size, rowLabels, false);
  const { board, regex } = config.boardSize[size];
  while (!allShipsDestroyed(actualBoard)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(regex)) {
      reveal(board, labeledBoard, rowLabels);
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
    reveal(board, labeledBoard, rowLabels);
  }
  ascii();
}

module.exports = { guessCoord };
