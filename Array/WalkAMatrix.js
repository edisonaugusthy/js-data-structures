/**
 * @param {List[List[int]]} matrix
 * @return {List[int]}
 */
const walkMatrix = (matrix) => {
  const result = [];
  const rowCount = matrix.length;
  const columnCount = matrix[0].length;
  let top = 0;
  let down = rowCount - 1;
  let left = 0;
  let right = columnCount - 1;

  while (left <= right && top <= down) {
    //from left to right and top is constant
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // from top to down and right is constant
    for (let i = top; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (left <= right) {
      //from right to left and down is constant
      for (i = right; i >= left; i--) {
        result.push(matrix[down][i]);
      }
    }
    down--;

    if (down <= top) {
      //from down to up and left is constant
      for (i = down; i >= top; i--) {
        result.push(matrix[i][left]);
      }
    }
    left++;
  }
  console.log(result);
};

walkMatrix([
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6],
]);

/*              
       [0, 1, 2, 3],
top -  [11, 12, 13, 4],
down  [10, 15, 14, 5],
      [9, 8, 7, 6],
*/ //left   right
//https://www.youtube.com/watch?v=1ZGJzvkcLsA
