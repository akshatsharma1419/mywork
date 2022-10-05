// Frog jump

let arr = [30, 10, 60, 10, 60, 50];

function minEnergyConsumed(ind, arr) {
  if (ind == 0) return 0;
  let oneStep =
    minEnergyConsumed(ind - 1, arr) + Math.abs(arr[ind] - arr[ind - 1]);
  let twoStep = 0;
  if (ind > 1)
    twoStep =
      minEnergyConsumed(ind - 2, arr) + Math.abs(arr[ind] - arr[ind - 2]);
  return Math.min(oneStep, twoStep);
}

console.log(minEnergyConsumed(5, arr));

let arr2 = [30, 10, 60, 10, 60, 50];

function frogJump(ind, arr, k) {
  if (ind === 0) return 0;
  let min = Number.MAX_VALUE;
  for (let i = k; i >= 0; i--) {
    let eng = Number.MAX_VALUE;
    if (ind - i >= 0) eng = arr[ind - i] + frogJump(ind - 1, arr, k);
    min = Math.min(eng, min);
  }
  return min;
}

console.log(frogJump(arr2.length - 1, arr2, 3));

// Max sum with no adjacent

function maxSum(i, arr) {
  if (i === 0) return arr[i];
  if (i < 0) return 0;
  let left = Number.MIN_VALUE;
  if (i - 2 >= 0) left = arr[i] + maxSum(i - 2, arr);
  let right = maxSum(i - 1, arr);
  return Math.max(left, right);
}

console.log(maxSum(arr.length - 1, arr));

// Ninja Training

const arts = [
  [10, 1, 2],
  [8, 20, 30],
  [10, 5, 100],
  [20, 1, 30],
];

function maxPoints(curr, prev, arr) {
  if (curr === 0) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr[curr].length; i++) {
      if (prev != i) max = Math.max(arr[curr][i], max);
    }
    return max;
  }
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr[curr].length; i++) {
    let points = Number.MIN_VALUE;
    if (prev != i) points = arr[curr][i] + maxPoints(curr - 1, i, arr);
    max = Math.max(max, points);
  }
  return max;
}

console.log(maxPoints(arts.length - 1, -1, arts));

// Unique Paths

function uniquePaths(m, n) {
  if (m == 1 || n == 1) return 1;
  return uniquePaths(m, n - 1) + uniquePaths(m - 1, n);
}

console.log(uniquePaths(3, 2));

const maze = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function mazeObs(row, col, maze) {
  if (row == 0 || col == 0) return 1;
  if (maze[row][col] == 0) return 0;
  let left = mazeObs(row, col - 1, maze);
  let up = mazeObs(row - 1, col, maze);
  return left + up;
}

console.log(mazeObs(maze.length - 1, maze.length - 1, maze));

function mazeObs2(maze) {
  let m = maze.length;
  let n = maze.length;
  const dp = new Array(m);
  for (let i = 0; i < dp.length; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) temp[j] = 0;
    dp[i] = temp;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) dp[i][j] = 1;
      else if (maze[i][j] === 0) dp[i][j] = 0;
      else {
        let down = dp[i - 1][j];
        let right = dp[i][j - 1];
        dp[i][j] = down + right;
      }
    }
  }
  return dp[m - 1][n - 1];
}

console.log(mazeObs2(maze));

// Subset sum equal k
const sub = [1, 2, 5, 7, 5];

function checkSum(n, arr, k) {
  if (k === 0) return true;
  if (n < 0) return false;
  let take = false;
  if (arr[n] <= k) {
    take = checkSum(n - 1, arr, k) || checkSum(n - 1, arr, k - arr[n]);
  }
  let notTake = checkSum(n - 1, arr, k);
  return take || notTake;
}

console.log("Check-Sum", checkSum(sub.length - 1, sub, 4));

// Knapsack
const price = [5, 4, 7, 1];
const wt = [3, 2, 5, 1];
const W = 7;
function knapsack(i, price, wt, W) {
  if (W == 0 || i == 0) return 0;
  let take = Number.MIN_VALUE;
  if (W >= wt[i]) take = price[i] + knapsack(i - 1, price, wt, W - wt[i]);
  let notTake = knapsack(i - 1, price, wt, W);
  return Math.max(take, notTake);
}

console.log(knapsack(price.length - 1, price, wt, W));

// LCS

const str1 = "abcabde";
const str2 = "aggcbqyfer";

function lCS(m, n, str1, str2) {
  if (m < 0 || n < 0) return 0;
  if (str1.charAt(m) === str2.charAt(n))
    return 1 + lCS(m - 1, n - 1, str1, str2);
  return Math.max(lCS(m - 1, n, str1, str2), lCS(m, n - 1, str1, str2));
}

console.log(lCS(str1.length - 1, str2.length - 1, str1, str2));

let max = Number.MIN_VALUE;
function lCSubstring(m, n, str1, str2) {
  if (m < 0 || n < 0) return 0;
  if (str1.charAt(m) === str2.charAt(n)) {
    let left = 1 + lCSubstring(m - 1, n - 1, str1, str2);
    max = Math.max(left, max);
    return left;
  }
  return 0;
}

lCSubstring(str1.length - 1, str2.length - 1, str1, str2);
console.log(max);

// Distinct Subsequence
const s1 = "babgbag";
const s2 = "bag";

function distinctSub(m, n, s1, s2) {
  if (n < 0) return 1;
  if (m < 0) return 0;

  if (s1.charAt(m) === s2.charAt(n)) {
    return distinctSub(m - 1, n - 1, s1, s2) + distinctSub(m - 1, n, s1, s2);
  } else {
    return distinctSub(m - 1, n, s1, s2);
  }
}

console.log(distinctSub(s1.length - 1, s2.length - 1, s1, s2));

// Edit distance

const s11 = "horse";
const s22 = "ros";

function editDistance(m, n, s1, s2) {
  if (m < 0) return n + 1;
  if (n < 0) return m + 1;
  if (s1.charAt(m) === s2.charAt(n)) return editDistance(m - 1, n - 1, s1, s2);
  else {
    let deleteEd = editDistance(m - 1, n, s1, s2);
    let insertEd = editDistance(m, n - 1, s1, s2);
    let replaceEd = editDistance(m - 1, n - 1, s1, s2);
    return 1 + Math.min(deleteEd, insertEd, replaceEd);
  }
}

console.log(editDistance(s11.length, s22.length, s11, s22));

// Wildcard matching

const w1 = "aqc*de";
const w2 = "abcskjkjksde";

function wildCard(m, n, str1, str2) {
  if (m === 0 && n === 0) return str1.charAt(m) === str2.charAt(n);
  if (m < 0 || n < 0) return false;
  if (str1.charAt(m) === str2.charAt(n) || str1.charAt(m) === "?")
    return wildCard(m - 1, n - 1, str1, str2);
  else {
    if (str1.charAt(m) === "*") {
      return (
        wildCard(m, n - 1, str1, str2) ||
        wildCard(m - 1, n - 1, str1, str2) ||
        wildCard(m - 1, n, str1, str2)
      );
    } else return false;
  }
}

console.log(wildCard(w1.length - 1, w2.length - 1, w1, w2));

// LIS

function longestIncreasing(curr, prev, arr) {
  if (curr === arr.length) return 0;
  if (prev === -1 || arr[curr] > arr[prev]) {
    return 1 + longestIncreasing(curr + 1, curr, arr);
  } else {
    return longestIncreasing(curr + 1, prev, arr);
  }
}

console.log(longestIncreasing(0, -1, arr));
