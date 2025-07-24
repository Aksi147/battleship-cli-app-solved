const config = {
  boardSize: {
    4: {
      board: board4,
      rowLabels: rowLabels.slice(0, 4),
      labeledBoard: {
        A: [],
        B: [],
        C: [],
        D: [],
      },
      regex: /[A-D][0-3]/i,
    },
    5: {
      board: board5,
      rowLabels5: rowLabels.slice(0, 5),
      labeledBoard: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
      },
      regex: /[A-E][0-4]/i,
    },
    6: {
      board: board6,
      rowLabels,
      labeledBoard6: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
      },
      regex: /[A-F][0-5]/i,
    },
  },
};
