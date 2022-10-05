// Min/Max falling path sum

const matrix = [
  [1, 2, 10, 4],
  [100, 3, 2, 1],
  [1, 1, 20, 2],
  [1, 2, 2, 1],
];

function maxPath(row, col, matrix) {
  if (col < 0 || col >= matrix.length) return Number.MIN_VALUE;
  if (row === 0) return matrix[row][col];

  let left = maxPath(row - 1, col - 1, matrix);
  let right = maxPath(row - 1, col + 1, matrix);
  let straight = maxPath(row - 1, col, matrix);
  return matrix[row][col] + Math.max(left, right, straight);
}

function findMax(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    max = Math.max(max, maxPath(matrix.length - 1, i, matrix));
  }
  console.log(max);
}

findMax(matrix);
