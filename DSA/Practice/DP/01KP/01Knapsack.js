// Find maximum profit

const wt = [2, 5, 1, 7, 3];
const profit = [3, 4, 1, 5, 4];
const W = 10;

function maxProfit(n, profit, wt, W) {
  if (n == 0 || W == 0) return 0;
  if (wt[n - 1] > W) {
    return maxProfit(n - 1, profit, wt, W);
  } else {
    return Math.max(
      profit[n - 1] + maxProfit(n - 1, profit, wt, W - wt[n - 1]),
      maxProfit(n - 1, profit, wt, W)
    );
  }
}

console.log(maxProfit(5, profit, wt, W));

// Memoize

// Create memoize table
const dp = new Array(5);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(W);
}

// Fill with -1;
for (let i = 0; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    if (i == 0 || j == 0) dp[i][j] = 0;
    else dp[i][j] = -1;
  }
}

function maxProfitMemo(n, profit, wt, W, dp) {
  if (n == 0 || W == 0) return 0;
  if (wt[n - 1] > W)
    return (dp[n - 1][W - 1] = maxProfitMemo(n - 1, profit, wt, W, dp));
  else {
    return (dp[n - 1][W - 1] = Math.max(
      profit[n - 1] + maxProfitMemo(n - 1, profit, wt, W - wt[n - 1], dp),
      maxProfitMemo(n - 1, profit, wt, W, dp)
    ));
  }
}

console.log(maxProfitMemo(5, profit, wt, W, dp));
