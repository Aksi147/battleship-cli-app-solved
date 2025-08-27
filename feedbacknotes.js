const rowLabels = "abcdefghijklmnop".toUpperCase().split("");

// console.log(labels)

const boardsConfig = ["4", "5", "6"];

const emptyCell = () => {
  return { type: "empty", hit: false };
};

const createBoard = (size) => {
  return [...Array(size)].map((row) =>
    [...Array(size)].map((cell) => emptyCell())
  );
};

const createBoardWithLabels = (size, withItems = true) => {
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

const placeShipsRandomly = (board, ships, boardSize) => {
  const newBoard = board.map((row) =>
    row.map((cell) => ({ type: "empty", hit: false }))
  );

  ships.forEach((ship) => {
    let placed = false;
    while (!placed) {
      //randomly chose horizontal (0) or vertical (1)
      const isHorizontal = Math.random() < 0.5;
      //random starting position, ensuring ship fits
      const maxRow = isHorizontal ? boardSize : boardSize - ship.size + 1;
      const maxCol = isHorizontal ? boardSize - ship.size + 1 : boardSize;
      const row = Math.floor(Math.random() * maxRow);
      const col = Math.floor(Math.random() * maxCol);

      let valid = true;
      for (let i = 0; i < ship.size; i++) {
        const r = isHorizontal ? row : row + i;
        const c = isHorizontal ? col + i : col;
        if (
          r >= boardSize ||
          c >= boardSize ||
          newBoard[r][c].type !== "empty"
        ) {
          valid = false;
          break;
        }
      }
      if (valid) {
        for (let i = 0; i < ship.size; i++) {
          const r = isHorizontal ? row : row + i;
          const c = isHorizontal ? col + i : col;
          newBoard[r][c] = { type: ship.type, hit: false };
        }
        placed = true;
      }
    }
  });
  return newBoard;
};

const createConfig = (boardsConfig, rowLabels) => {
  const resObj = {
    boardSize: {},
  };

  boardsConfig.map((item) => {
    resObj.boardSize[item] = {
      board: createBoard(parseInt(item)),
      rowLabels: rowLabels.slice(0, parseInt(item)),
      labeledBoard: createBoardWithLabels(parseInt(item), rowLabels),
      regex: `/[A-${rowLabels[parseInt(item - 1)]}][0-${parseInt(item)}]/i`,
    };
  });
  return resObj;
};

// console.log(createBoardWithLabels(4));
// console.log(createConfig(boardsConfig, rowLabels));

module.exports = {
  createBoard,
  createBoardWithLabels,
  createConfig,
  boardsConfig,
  rowLabels,
};
