// Maximum sum of non adjacent array

const arr = [2, 1, 4, 9];

function maxSumRec(n, arr) {
  if (n == 0) return arr[n];
  let pick = Number.MIN_VALUE;
  if (n - 2 >= 0) pick = arr[n] + maxSumRec(n - 2, arr);
  let nonpick = maxSumRec(n - 1, arr);
  return Math.max(pick, nonpick);
}

console.log(maxSumRec(arr.length - 1, arr));

// ---------------------------------------------------------

function maxSumMemo(n, arr, memo) {
  if (n == 0) return arr[n];
  if (memo[n] != -1) return memo[n];
  let pick = Number.MIN_VALUE;
  if (n - 2 >= 0) pick = arr[n] + maxSumMemo(n - 2, arr, memo);
  let nonpick = maxSumMemo(n - 1, arr, memo);
  return (memo[n] = Math.max(pick, nonpick));
}

let memo = new Array(arr.length).fill(-1);

console.log(maxSumMemo(arr.length - 1, arr, memo));

// ---------------------------------------------------------

function maxSum(n, arr, sum, ans) {
  ans[0] = Math.max(sum, ans[0]);
  for (let i = n; i < arr.length; i++) {
    sum += arr[i];
    maxSum(i + 2, arr, sum, ans);
    sum -= arr[i];
  }
}

// ---------------------------------------------------------

const ans = [];
ans[0] = 0;
maxSum(0, arr, 0, ans);
console.log(ans);
