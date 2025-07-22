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
//   console.log("Fine! I didnt want to play either 🥲");
//   process.exit(0);
// }

let userInput = readlineSync.question("Type in your coordinate!");

let rowIndex = rowMap[userInput[0].toUpperCase()];
let colIndex = userInput[1];

function guessCoord(board) {
  while (!userInput.match(/[A-C][0-2]/i)) {
    userInput = readlineSync.question("Please type in a valid coordinate!");
    rowIndex = rowMap[userInput[0].toUpperCase()];
    colIndex = userInput[1];
  }
  if (userInput.match(/[A-C][0-2]/i)) {
    console.log("the coordinate works");

    function setHitTrue(board) {
      for (userInput of board) {
        board[rowIndex][colIndex].hit = true;
      }
    }
    setHitTrue(board);
  }
}

guessCoord(board3);
