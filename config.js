const boardsConfig = ["4", "5", "6", "7", "8", "9", "10"];
const rowLabels = "abcdefghijklmnop".toUpperCase().split("");

const ships = {
  4: {
    large: 1,
    small: 1,
  },
  5: {
    large: 1,
    small: 2,
  },
  6: {
    large: 2,
    small: 2,
  },
};

module.exports = { boardsConfig, rowLabels };
