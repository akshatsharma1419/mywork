// Minimum Path sum

const matrix = [
  [5, 9, 6],
  [18, 5, 2],
  [1, 2, 3],
];

function minPathSum(row, col, matrix) {
  if (row == 0 && col == 0) return matrix[row][col];
  if (row < 0 || col < 0) return Number.MAX_VALUE;
  let left = minPathSum(row, col - 1, matrix);
  let up = minPathSum(row - 1, col, matrix);
  return matrix[row][col] + Math.min(left, up);
}

console.log(minPathSum(matrix.length - 1, matrix[0].length - 1, matrix));
