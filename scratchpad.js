const readlineSync = require("readline-sync");

// symbols for shot effect
const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

// actual board for game
let board3 = [
  [
    { type: "large", id: 1, hit: false }, // Represents position A0
    { type: "empty", hit: false }, // Represents position A1
    { type: "empty", hit: false }, // Represents position A2
  ],
  [
    { type: "large", hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", id: 1, hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
  ],
];

const rowMap = { A: 0, B: 1, C: 2 };

// GAME STARTS HERE // GAME STARTS HERE // GAME STARTS HERE // GAME STARTS HERE // GAME STARTS HERE //

gameOver = false;

//prompt 1
console.log("Welcome to Battleship!");

// const wantToPlay = readlineSync.keyInYN("Would you like to play?");
// if (!wantToPlay) {
//   console.log("Thats alright! Maybe next time! Bye!");
//   process.exit(0);
// }

console.table({
  A: ["-", "-", "-"],
  B: ["-", "-", "-"],
  C: ["-", "-", "-"],
});

function guessCoord(board) {
  while (!allShipsDestroyed(board)) {
    let userInput = readlineSync.question("Type in your coordinate!");

    let rowIndex = rowMap[userInput[0].toUpperCase()];
    let colIndex = parseInt(userInput[1]);
    while (!userInput.match(/[A-C][0-2]/i)) {
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
      };

      const rowLabels = ["A", "B", "C"];

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
    reveal(board3);
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

// reveals all ships
function printBoard(board, ToF) {
  if (!ToF) {
    function revealShip(cell) {
      return "-";
    }
  }

  if (ToF) {
    function revealShip(cell) {
      if (cell.type === "large") return hitLarge;
      if (cell.type === "small") return hitSmall;
      else return "-";
    }
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
// printBoard(board3, true);

guessCoord(board3);
process.exit(0);
