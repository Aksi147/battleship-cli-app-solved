const readlineSync = require("readline-sync");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

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

function guessCoord4x4(board) {
  const rowMap = { A: 0, B: 1, C: 2, D: 3 };
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-D][0-3]/i)) {
      reveal(board);
      userInput = readlineSync.question(
        "Make a valid guess eg.. A1, B2, etc..."
      );
      console.clear();
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
  ascii();
}

function guessCoord5x5(board) {
  const rowMap = { A: 0, B: 1, C: 2, D: 3, E: 4 };
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-E][0-4]/i)) {
      reveal(board);
      userInput = readlineSync.question(
        "Make a valid guess eg.. A1, B2, etc..."
      );
      console.clear();
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
        E: [],
      };

      const rowLabels = ["A", "B", "C", "D", "E"];

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
  ascii();
}

function guessCoord6x6(board) {
  const rowMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Make a guess eg.. A1, B2, etc...");
    console.clear();

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-F][0-5]/i)) {
      reveal(board);
      userInput = readlineSync.question(
        "Make a valid guess eg.. A1, B2, etc..."
      );
      console.clear();
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
        E: [],
        F: [],
      };

      const rowLabels = ["A", "B", "C", "D", "E", "F"];

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

module.exports = { guessCoord4x4, guessCoord5x5, guessCoord6x6 };
