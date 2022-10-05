// Longest Increasing subsequence

let arr = [10, 9, 2, 5, 3, 7, 101, 18];

function LIS(i, prev, arr) {
  if (i >= arr.length) return 0;
  let take = Number.MIN_VALUE;
  if (prev === -1 || arr[prev] < arr[i]) {
    take = 1 + LIS(i + 1, i, arr);
  }
  let nottake = LIS(i + 1, prev, arr);
  return Math.max(take, nottake);
}

console.log(LIS(0, -1, arr));
