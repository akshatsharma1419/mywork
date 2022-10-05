// Leetcode- 62 Unique Paths

let n = 3,
  m = 4;
function uniquePaths(n, m) {
  if (n == 0 && m == 0) return 1;
  if (n < 0 || m < 0) return 0;
  let up = uniquePaths(n, m - 1);
  let left = uniquePaths(n - 1, m);
  return up + left;
}

console.log(uniquePaths(n - 1, m - 1));
