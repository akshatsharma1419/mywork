// House Robber 2

function maxProfit(start, end, arr) {
  if (start === end) return arr[start];
  let pick = Number.MIN_VALUE;
  if (end - 2 >= start) pick = arr[end] + maxProfit(start, end - 2, arr);
  let nonpick = maxProfit(start, end - 1, arr);
  return Math.max(pick, nonpick);
}

const arr = [2, 1, 3, 5, 8];
const first = maxProfit(0, arr.length - 2, arr);
const last = maxProfit(1, arr.length - 1, arr);
console.log(first, last);
