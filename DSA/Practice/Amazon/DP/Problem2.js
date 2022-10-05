// Frog Jump, find min energy consumed by jumping from 0 to n.
// Allowed to take 1 or 2 jumps

function minEnergy(n, arr) {
  if (n == 0) return 0;
  let left = minEnergy(n - 1, arr) + Math.abs(arr[n] - arr[n - 1]);
  let right = Number.MAX_VALUE;
  if (n > 1) {
    right = minEnergy(n - 2, arr) + Math.abs(arr[n] - arr[n - 2]);
  }
  return Math.min(right, left);
}

const arr = [30, 10, 60, 10, 60, 50];
console.log(minEnergy(arr.length - 1, arr));

// Memo

function minEnergyMemo(n, arr, memo) {
  if (n == 0) return 0;
  if (memo[n] != -1) return memo[n];
  let left = minEnergyMemo(n - 1, arr, memo) + Math.abs(arr[n] - arr[n - 1]);
  let right = Number.MAX_VALUE;
  if (n > 1) {
    right = minEnergyMemo(n - 2, arr, memo) + Math.abs(arr[n] - arr[n - 2]);
  }
  return (memo[n] = Math.min(left, right));
}

const memo = new Array(arr.length).fill(-1);
console.log(minEnergyMemo(arr.length - 1, arr, memo));

// DP

function minEnergyDp(arr) {
  let dp = new Array(arr.length);
  dp[0] = 0;
  for (let i = 1; i < arr.length; i++) {
    let input1 = dp[i - 1] + Math.abs(arr[i] - arr[i - 1]);
    let input2 = Number.MAX_VALUE;
    if (i > 1) {
      input2 = dp[i - 2] + Math.abs(arr[i] - arr[i - 2]);
    }
    dp[i] = Math.min(input1, input2);
  }
  console.log(dp);
}

minEnergyDp(arr);
