const readlineSync = require("readline-sync");
const { guessCoord } = require("./coordinateFunctions");
const { createConfig, boardsConfig, rowLabels } = require("./boardConfig");

const askForBoardSize = (boards) => {
  console.log("Welcome to Battleship 🚢");
  let index = readlineSync.keyInSelect(boards, "Choose a Board Size");
  console.clear();
  return index;
};

const runBattleship = (boardsConfig, rowLabels) => {
  const boards = boardsConfig.map((size) => `${size}x${size}`);
  const index = askForBoardSize(boards);

  if (index < 0) {
    console.log("Game exited.");
    process.exit(0);
  }

  const size = parseInt(boardsConfig[index]);
  const config = createConfig(boardsConfig, rowLabels);
  const { board, labeledBoard, regex } = config.boardSize[size];

  guessCoord(board, labeledBoard, rowLabels.slice(0, size), size, regex);
};

runBattleship(boardsConfig, rowLabels);

module.exports = { askForBoardSize, runBattleship };
