const arr = [10, 9, 2, 5, 3, 7, 101, 18];

function allSubs(i, arr, curr) {
  if (i === arr.length) {
    console.log([...curr]);
    return;
  }
  curr.push(arr[i]);
  allSubs(i + 1, arr, curr);
  curr.pop();
  allSubs(i + 1, arr, curr);
}
allSubs(0, arr.slice(0, 3), []);

// Longest Increasing subsequence

function lIS(i, prev_i, arr) {
  if (i === arr.length) return 0;
  let notTake = lIS(i + 1, prev_i, arr);
  let take = Number.MIN_VALUE;
  if (prev_i == -1 || arr[i] > arr[prev_i]) {
    take = 1 + lIS(i + 1, i, arr);
  }
  return Math.max(take, notTake);
}

console.log(lIS(0, -1, arr));

// No of longest increasing subsequence
