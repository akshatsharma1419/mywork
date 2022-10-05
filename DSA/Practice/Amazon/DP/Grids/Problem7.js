// Unique Paths

const m = 3,
  n = 4;

function unique(m, n) {
  if (m == 0 || n == 0) return 1;
  if (m < 0 || n < 0) return 0;
  let up = unique(m - 1, n);
  let down = unique(m, n - 1);
  return up + down;
}

console.log(unique(m - 1, n - 1));

function uniqueMemo(m, n, memo) {
  if (m == 0 || n == 0) return 1;
  if (m < 0 || n < 0) return 0;
  if (memo[m][n] != -1) return memo[m][n];
  let up = unique(m - 1, n);
  let down = unique(m, n - 1);
  return (memo[m][n] = up + down);
}

const memo = new Array(m);
for (let i = 0; i < memo.length; i++) {
  const temp = new Array(n).fill(-1);
  memo[i] = temp;
}

console.log(uniqueMemo(m - 1, n - 1, memo));

const maze = [
  [0, 0, 0],
  [0, -1, 0],
  [0, 0, 0],
];

function maxUniquePath(m, n, maze) {
  if (m == 0 && n == 0) return 1;
  if (m < 0 || n < 0 || maze[m][n] === -1) return 0;
  let up = maxUniquePath(m - 1, n, maze);
  let left = maxUniquePath(m, n - 1, maze);
  return up + left;
}

console.log(maxUniquePath(2, 2, maze));

function maxNoPathsDp(maze) {
  let dp = new Array(maze.length + 1);
  for (let i = 0; i < dp.length; i++) {
    let row = [];
    for (let i = 0; i < maze[0].length + 1; i++) {
      row[i] = 0;
    }
    dp[i] = row;
  }

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (i === 0 || j === 0) dp[i][j] = 1;
      else {
        let up = dp[i - 1][j];
        let left = dp[i][j - 1];
        dp[i][j] = up + left;
      }
      if (maze[i][j] == -1) dp[i][j] = 0;
    }
  }
  console.log(dp);
}

maxNoPathsDp(maze);
