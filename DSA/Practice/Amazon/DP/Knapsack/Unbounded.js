const wt = [2, 4, 6];
const val = [5, 11, 13];
const W = 10;

function maxProfit(i, wt, val, W) {
  if (i < 0 || W === 0) return 0;
  let take = Number.MIN_VALUE;
  if (wt[i] <= W) take = val[i] + maxProfit(i, wt, val, W - wt[i]);
  let notake = maxProfit(i - 1, wt, val, W);
  return Math.max(take, notake);
}

console.log(maxProfit(wt.length - 1, wt, val, W));

// Rod cutting

const price = [2, 5, 7, 8, 10];
const length = [1, 2, 3, 4, 5];
let size = 5;

function maxCost(i, price, length, size) {
  if (i < 0 || size === 0) return 0;
  let take = Number.MIN_VALUE;
  if (length[i] <= size)
    take = price[i] + maxCost(i, price, length, size - length[i]);
  let notTake = maxCost(i - 1, price, length, size);
  return Math.max(take, notTake);
}

console.log(maxCost(price.length - 1, price, length, length.length));
