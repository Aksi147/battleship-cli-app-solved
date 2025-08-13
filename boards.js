const { boardsConfig, rowLabels, ships } = require("./config");

const emptyCell = () => {
  return { type: "empty", hit: false };
};

const createBoard = (size) => {
  return [...Array(size)].map((row) =>
    [...Array(size)].map((cell) => emptyCell())
  );
};

const createBoardWithLabels = (size, rowLabels, withItems = true) => {
  return [...Array(size)].reduce((acc, row, index) => {
    const label = rowLabels[index];
    const localAcc = { ...acc };
    const labelValue = withItems ? [...Array(size)].map((cell) => "-") : [];
    return {
      ...localAcc,
      [label]: labelValue,
    };
  }, {});
};

module.exports = {
  createBoard,
  createBoardWithLabels,
};

function printBoard(board, debugMode = false) {
  const hitLarge = "🔵";
  const hitSmall = "🟠";
  if (!debugMode) {
    function revealShip() {
      return "-";
    }
  }

  function revealShip(cell) {
    if (cell.type === "large") return hitLarge;
    if (cell.type === "small") return hitSmall;
    else return "-";
  }

  let labeledBoard = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      labeledBoard[rowLabels[row]][col] = revealShip(board[row][col]);
    }
  }
  console.table(labeledBoard);
}

// printBoard(board6);
