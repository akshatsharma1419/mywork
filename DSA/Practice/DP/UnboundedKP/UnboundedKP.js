// Find maximum profit, weights can repeat

let profit = [4, 1, 2, 6];
let wt = [3, 1, 2, 5];
let W = 7;

function maxProfit(n, profit, wt, W) {
  if (n == 0 || W == 0) return 0;
  if (W >= wt[n - 1]) {
    return Math.max(
      profit[n - 1] + maxProfit(n, profit, wt, W - wt[n - 1]),
      maxProfit(n - 1, profit, wt, W)
    );
  } else {
    return maxProfit(n - 1, profit, wt, W);
  }
}

console.log(maxProfit(profit.length, profit, wt, W));
