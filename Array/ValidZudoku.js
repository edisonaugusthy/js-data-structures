/**
 * @param {List[List[int]]} board
 * @return {boolean}
 */
function isValidSudokuBoard(board) {
  const rowLength = board.length;
  const columLength = board[0].length;
  if (rowLength !== columLength) {
    console.log("9");
    return false;
  }
  if (rowLength == 0 || columLength == 0) {
    console.log("13");
    return false;
  }

  if (Math.sqrt(rowLength) % 1 !== 0) {
    console.log("18");
    return false;
  }
  const set = new Set();
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columLength; j++) {
      const cell = board[i][j];
      if (cell > 0) {
        const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        const row = `raw:${i},value:${cell}`;
        const col = `col:${j},value:${cell}`;
        const box = `boxNum:${boxNum},value:${cell}`;
        if (set.has(row)) {
          console.log(row);
          return false;
        }
        if (set.has(col)) {
          console.log(col);
          return false;
        }
        if (set.has(box)) {
          console.log(box);
          return false;
        }
        set.add(row);
        set.add(col);
        set.add(box);
      }
    }
  }
  return true;
}

console.log(
  isValidSudokuBoard([
    [0, 3, 2, 0],
    [4, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 2, 0, 0],
  ])
);
//reference -> https://www.youtube.com/watch?v=wjkKd5yBxRA
// https://skilled.dev/course/valid-sudoku-board
