// Grid unique Paths

function uniquePaths(i, j, n) {
  if (i == n - 1 && j == n - 1) return 1;
  if (i == n || j == n) return 0;
  let right = uniquePaths(i + 1, j, n);
  let down = uniquePaths(i, j + 1, n);
  return down + right;
}

console.log(uniquePaths(0, 0, 3));

// Unique Paths 2

const grid = [
  [0, 0, 0],
  [0, -1, 0],
  [0, 0, 0],
];

function uniquePath2(i, j, grid) {
  if (i == grid.length - 1 && j == grid[0].length - 1) return 1;
  if (i >= grid.length || j >= grid[0].length || grid[i][j] == -1) return 0;
  let right = uniquePath2(i + 1, j, grid);
  let down = uniquePath2(i, j + 1, grid);
  return right + down;
}

console.log(uniquePath2(0, 0, grid));

// Minimum Path Sum

const grid2 = [
  [5, 9, 6],
  [11, 5, 2],
];

function minPathSum(i, j, grid) {
  if (i == 0 && j == 0) return grid[i][j];
  if (i < 0 || j < 0) return Number.MAX_SAFE_INTEGER;
  let right = grid[i][j] + minPathSum(i - 1, j, grid);
  let down = grid[i][j] + minPathSum(i, j - 1, grid);
  return Math.min(right, down);
}

console.log(minPathSum(grid2.length - 1, grid2[0].length - 1, grid2));
