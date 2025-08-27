const readlineSync = require("readline-sync");
const { board4, board5, board6, createBoardWithLabels } = require("./boards");
const { rowLabels } = require("./config");
const { actualBoard } = require("./runBattleship");

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

function reveal(board, labeledBoard, rowLabels, boardSize) {
  const updatedBoard = { ...labeledBoard };
  for (let row = 0; row < boardSize; row++) {
    const label = rowLabels[row];
    updatedBoard[label] = board[row].map((cell) => {
      if (cell.hit) {
        if (cell.type === "empty") {
          return "❗";
        } else if (cell.type === "large") {
          return "🔵";
        } else return "🟠";
      }
      return "-";
    });
  }
  console.table(updatedBoard);
}

function guessCoord(board, labeledBoard, rowLabels, boardSize, regex) {
  while (!allShipsDestroyed(board)) {
    reveal(board, labeledBoard, rowLabels, boardSize);
    let userInput = readlineSync
      .question("Make a guess eg.. A1, B2, etc...")
      .trim();
    console.clear();

    //validate input
    if (!userInput.match(regex)) {
      console.log(
        `Invalid input! Please enter a valid coordinate (e.g. A1, B2, up to ${
          rowLabels[boardSize - 1]
        }${boardSize - 1}).`
      );
      continue;
    }

    const rowLetter = userInput[0].toUpperCase();
    const colInput = userInput.slice(1);

    const rowIndex = rowLabels.indexOf(rowLetter);
    if (rowIndex < 0 || rowIndex >= boardSize) {
      console.log(
        `Invalid row! Please enter a valid coordinate (e.g. A1, B2, up to ${
          rowLabels[boardSize - 1]
        }${boardSize - 1}).`
      );
      continue;
    }

    const colIndex = parseInt(colInput);
    if (
      isNaN(colIndex) ||
      colInput !== colIndex.toString() ||
      colIndex < 0 ||
      colIndex >= boardSize
    ) {
      console.log(
        `Invalid column! Please enter a valid coordinate (e.g. A1, B2, up to ${
          rowLabels[boardSize - 1]
        }${boardSize - 1}).`
      );
      continue;
    }

    if (board[rowIndex][colIndex].hit) {
      console.log("You already guessed this coordinate!");
      continue;
    }

    setHitTrue(board, rowIndex, colIndex);

    if (board[rowIndex][colIndex].type === "large") {
      console.log("Great shot! You hit a large ship!");
    } else if (board[rowIndex][colIndex].type === "small") {
      console.log("Great shot! You hit a small ship!");
    } else {
      console.log("Oh no! You missed!");
    }

    // reveal(board, labeledBoard, rowLabels, boardSize);
  }
  ascii();
}

module.exports = { guessCoord, reveal, setHitTrue, allShipsDestroyed };
