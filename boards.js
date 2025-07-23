// actual board for game
let board4 = [
  [
    { type: "large", hit: false }, // Represents position A0
    { type: "empty", hit: false }, // Represents position A1
    { type: "empty", hit: false }, // Represents position A2
    { type: "empty", hit: false }, // Represents position A3
  ],
  [
    { type: "large", hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
    { type: "empty", hit: false }, // Represents position B3
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
  ],
];

let board5 = [
  [
    { type: "large", hit: false }, // Represents position A0
    { type: "empty", hit: false }, // Represents position A1
    { type: "empty", hit: false }, // Represents position A2
    { type: "empty", hit: false }, // Represents position A3
    { type: "empty", hit: false }, // Represents position A4
  ],
  [
    { type: "large", hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
    { type: "empty", hit: false }, // Represents position B3
    { type: "empty", hit: false }, // Represents position B4
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
  ],
];

let board6 = [
  [
    { type: "large", hit: false }, // Represents position A0
    { type: "empty", hit: false }, // Represents position A1
    { type: "empty", hit: false }, // Represents position A2
    { type: "empty", hit: false }, // Represents position A3
    { type: "empty", hit: false }, // Represents position A4
    { type: "empty", hit: false }, // Represents position A5
  ],
  [
    { type: "large", hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: false }, // Represents position B2
    { type: "empty", hit: false }, // Represents position B3
    { type: "empty", hit: false }, // Represents position B4
    { type: "empty", hit: false }, // Represents position B5
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
    { type: "small", hit: false }, // Represents position C5
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
    { type: "small", hit: false }, // Represents position C5
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
    { type: "small", hit: false }, // Represents position C5
  ],
  [
    { type: "large", hit: false }, // Represents position C0
    { type: "small", hit: false }, // Represents position C1
    { type: "small", hit: false }, // Represents position C2
    { type: "small", hit: false }, // Represents position C3
    { type: "small", hit: false }, // Represents position C4
    { type: "small", hit: false }, // Represents position C5
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
