const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) {
    return [-1, -1];
  }
  let columnIndex = 0;
  let rowIndex = matrix.length - 1;

  while (rowIndex >= 0 && columnIndex < matrix[0].length) {
    const currentItem = matrix[rowIndex][columnIndex];
    if (currentItem == target) {
      return [rowIndex, columnIndex];
    }

    if (currentItem > target) {
      rowIndex--;
    }
    if (currentItem < target) {
      columnIndex++;
    }
  }
  return [-1, -1];
};

const matrix = [
  [0, 2, 5, 8, 10],
  [1, 4, 9, 15, 20],
  [3, 7, 14, 19, 21],
  [17, 22, 23, 24, 25],
];

const target = 19;

console.log(searchMatrix(matrix, target)); //  [2, 3]
