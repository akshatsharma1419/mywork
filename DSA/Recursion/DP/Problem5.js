// 0 1 knapsack

let wt = [1, 3, 4, 5];
let val = [1, 4, 5, 7];

// Find max profit, for W=7

function maxProfit(i, val, wt, W) {
  if (i == 0 || W == 0) return 0;
  if (W >= wt[i - 1]) {
    return Math.max(
      val[i - 1] + maxProfit(i - 1, val, wt, W - wt[i - 1]),
      maxProfit(i - 1, val, wt, W)
    );
  }
  if (W < wt[i - 1]) return maxProfit(i - 1, val, wt, W);
}

console.log(maxProfit(wt.length, val, wt, 7));

function maxProfit2(val, wt, W) {
  let dp = new Array(val.length);
  for (let i = 0; i < wt.length; i++) {
    let row = new Array(W).fill(-1);
    dp[i] = row;
  }
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (i || j == 0) dp[i][j] = 0;
      else if (wt[i] > j) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = Math.max(val[i] + dp[i - 1][j - wt[i - 1]], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[val.length - 1][W - 1]);
}
maxProfit2(val, wt, 7);

// Subset sum

function subsetSum(i, sum, arr) {
  if (sum == 0) return true;
  if (i <= 0) return false;
  if (arr[i - 1] > sum) return subsetSum(i - 1, sum, arr);
  if (arr[i - 1] <= sum) {
    return (
      subsetSum(i - 1, sum - arr[i - 1], arr) || subsetSum(i - 1, sum, arr)
    );
  }
}

let arr = [2, 3, 7, 8, 10];
console.log(subsetSum(arr.length, 24, arr));

function noOfSubsetSum(i, sum, arr) {
  if (sum == 0) return 1;
  if (i <= 0) return 0;
  if (arr[i - 1] > sum) return noOfSubsetSum(i - 1, sum, arr);
  if (arr[i - 1] <= sum) {
    return (
      noOfSubsetSum(i - 1, sum - arr[i - 1], arr) +
      noOfSubsetSum(i - 1, sum, arr)
    );
  }
}

let arr2 = [2, 3, 7, 8, 10];
console.log(noOfSubsetSum(arr.length, 10, arr));
