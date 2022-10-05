// Larget Divisible subset

const arr = [1, 5, 4, 8, 10, 2, 9, 16];

function largetDSubset(i, prev_i, arr) {
  if (i === arr.length) return 0;
  let take = Number.MIN_VALUE;
  if (prev_i == -1 || arr[i] % arr[prev_i] === 0 || arr[prev_i] % arr[i] === 0)
    take = 1 + largetDSubset(i + 1, i, arr);
  let notTake = largetDSubset(i + 1, prev_i, arr);
  return Math.max(take, notTake);
}

console.log(largetDSubset(0, -1, arr));
