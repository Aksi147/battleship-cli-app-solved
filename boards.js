// actual board for game
let board4 = [
  [
    { type: "large", hit: false }, // Represents position A0
    { type: "large", hit: false }, // Represents position A1
    { type: "large", hit: false }, // Represents position A2
    { type: "empty", hit: false }, // Represents position A3
  ],
  [
    { type: "empty", hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
    { type: "empty", hit: false }, // Represents position B3
  ],
  [
    { type: "empty", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
    { type: "empty", hit: false }, // Represents position C3
  ],
  [
    { type: "empty", hit: false }, // Represents position D0
    { type: "small", hit: false }, // Represents position D1
    { type: "empty", hit: false }, // Represents position D2
    { type: "empty", hit: false }, // Represents position D3
  ],
];

let board5 = [
  [
    { type: "empty", hit: false }, // Represents position A0
    { type: "empty", hit: false }, // Represents position A1
    { type: "empty", hit: false }, // Represents position A2
    { type: "large", hit: false }, // Represents position A3
    { type: "empty", hit: false }, // Represents position A4
  ],
  [
    { type: "small", hit: false }, // Represents position B0
    { type: "small", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
    { type: "large", hit: false }, // Represents position B3
    { type: "empty", hit: false }, // Represents position B4
  ],
  [
    { type: "empty", hit: false }, // Represents position C0
    { type: "empty", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
    { type: "large", hit: false }, // Represents position C3
    { type: "empty", hit: false }, // Represents position C4
  ],
  [
    { type: "empty", hit: false }, // Represents position D0
    { type: "empty", hit: false }, // Represents position D1
    { type: "empty", hit: false }, // Represents position D2
    { type: "empty", hit: false }, // Represents position D3
    { type: "empty", hit: false }, // Represents position D4
  ],
  [
    { type: "empty", hit: false }, // Represents position E0
    { type: "small", hit: false }, // Represents position E1
    { type: "small", hit: false }, // Represents position E2
    { type: "empty", hit: false }, // Represents position E3
    { type: "empty", hit: false }, // Represents position E4
  ],
];

let board6 = [
  [
    { type: "empty", hit: false }, // Represents position A0
    { type: "empty", hit: false }, // Represents position A1
    { type: "empty", hit: false }, // Represents position A2
    { type: "empty", hit: false }, // Represents position A3
    { type: "empty", hit: false }, // Represents position A4
    { type: "large", hit: false }, // Represents position A5
  ],
  [
    { type: "empty", hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
    { type: "empty", hit: false }, // Represents position B3
    { type: "empty", hit: false }, // Represents position B4
    { type: "large", hit: false }, // Represents position B5
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "large", hit: false }, // Represents position C1
    { type: "large", hit: false }, // Represents position C2
    { type: "empty", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
    { type: "large", hit: false }, // Represents position C5
  ],
  [
    { type: "empty", hit: false }, // Represents position D0
    { type: "empty", hit: false }, // Represents position D1
    { type: "empty", hit: false }, // Represents position D2
    { type: "empty", hit: false }, // Represents position D3
    { type: "small", hit: false }, // Represents position D4
    { type: "empty", hit: false }, // Represents position D5
  ],
  [
    { type: "empty", hit: false }, // Represents position E0
    { type: "small", hit: false }, // Represents position E1
    { type: "empty", hit: false }, // Represents position E2
    { type: "empty", hit: false }, // Represents position E3
    { type: "empty", hit: false }, // Represents position E4
    { type: "empty", hit: false }, // Represents position E5
  ],
  [
    { type: "empty", hit: false }, // Represents position F0
    { type: "small", hit: false }, // Represents position F1
    { type: "empty", hit: false }, // Represents position F2
    { type: "empty", hit: false }, // Represents position F3
    { type: "empty", hit: false }, // Represents position F4
    { type: "empty", hit: false }, // Represents position F5
  ],
];

let board4x4 = {
  A: ["-", "-", "-", "-"],
  B: ["-", "-", "-", "-"],
  C: ["-", "-", "-", "-"],
  D: ["-", "-", "-", "-"],
};
let board5x5 = {
  A: ["-", "-", "-", "-", "-"],
  B: ["-", "-", "-", "-", "-"],
  C: ["-", "-", "-", "-", "-"],
  D: ["-", "-", "-", "-", "-"],
  E: ["-", "-", "-", "-", "-"],
};
let board6x6 = {
  A: ["-", "-", "-", "-", "-", "-"],
  B: ["-", "-", "-", "-", "-", "-"],
  C: ["-", "-", "-", "-", "-", "-"],
  D: ["-", "-", "-", "-", "-", "-"],
  E: ["-", "-", "-", "-", "-", "-"],
  F: ["-", "-", "-", "-", "-", "-"],
};

module.exports = { board4, board5, board6, board4x4, board5x5, board6x6 };

// debugger // debugger // debugger // debugger // debugger // debugger // debugger

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

  const rowLabels = ["A", "B", "C", "D", "E", "F"];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      labeledBoard[rowLabels[row]][col] = revealShip(board[row][col]);
    }
  }
  console.table(labeledBoard);
}

printBoard(board6);
