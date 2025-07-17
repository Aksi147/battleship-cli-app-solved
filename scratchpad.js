const testBoard1 = {
  A: [
    { type: "large", id: 1, hit: false }, // Represents position A0
    { type: "small", id: 2, hit: true }, // Represents position A1
    { type: "small", id: 2, hit: false }, // Represents position A2
  ],
  B: [
    { type: "large", id: 1, hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: true }, // Represents position B2
  ],
  C: [
    { type: "large", id: 1, hit: false }, // Represents position C0
    { type: "empty", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
  ],
};

const hitLarge = "🔵";
const hitSmall = "🟠";
const miss = "❗";

function printBoard(board) {
  function revealShip(cell) {
    if (cell.type === "large") return hitLarge;
    if (cell.type === "small") return hitSmall;
    else return "-";
  }
  for (let [row] of Object.entries(board)) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = revealShip(board[row][col]);
    }
  }
  console.table(board);
}

printBoard(testBoard1);
