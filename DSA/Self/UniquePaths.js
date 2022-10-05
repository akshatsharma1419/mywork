//
let m = 2;
let n = 3;

function uniquePaths(m, n) {
  if (m === 0 || n === 0) return 1;
  let top = uniquePaths(m - 1, n);
  let left = uniquePaths(m, n - 1);
  return top + left;
}

console.log(uniquePaths(m - 1, n - 1));

function uniquePathsDp(m, n) {
  let dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    let temp = [];
    for (let j = 0; j <= n; j++) temp[j] = 0;
    dp[i] = temp;
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) dp[i][j] = 1;
      else dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp);
}

uniquePathsDp(m - 1, n - 1);

// Minimum Path sum

function minPathSum(i, j, arr) {
  if (i === 0 && j === 0) return arr[i][j];
  if ((i < 0 && j >= 0) || (i >= 0 && j < 0)) return Number.MAX_VALUE;
  let top = minPathSum(i - 1, j, arr);
  let left = minPathSum(i, j - 1, arr);
  return arr[i][j] + Math.min(top, left);
}

const matrix = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum(matrix.length - 1, matrix.length - 1, matrix));
