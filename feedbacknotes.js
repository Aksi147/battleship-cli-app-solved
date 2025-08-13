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

console.log(createBoardWithLabels(4));
console.log(createConfig(boardsConfig, rowLabels));
