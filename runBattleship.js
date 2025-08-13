const readlineSync = require("readline-sync");
const { createBoard, createBoardWithLabels } = require("./boards");
const { boardsConfig, rowLabels } = require("./config");
const { guessCoord } = require("./functions");

const askForBoardSize = (boards) => {
  console.log("Welcome to Battleship 🚢");
  let index = readlineSync.keyInSelect(boards, "Choose a Board Size");
  console.clear();
  return index;
};

const runBattleship = (boardsConfig, rowLabels) => {
  const boards = boardsConfig.map((size) => `${size}x${size}`);
  const index = askForBoardSize(boards);

  const actualBoard = createBoardWithLabels(index + 4, rowLabels);

  if (index < boards.length - 1 && index >= 0) {
    console.table(actualBoard);
    // guessCoord(index + 4, rowLabels);
  }
  console.log(runBattleship(boardsConfig, rowLabels));
  process.exit(0);
};

module.exports = { actualBoard };
