let arr = [1, 2, 4, 2, 3];

function count(n, arr, sum) {
  if (sum === 0) return 1;
  if (n === 0) {
    if (arr[n] === sum) return 1;
    return 0;
  }
  let nottake = count(n - 1, arr, sum);
  let take = 0;
  if (sum >= arr[n]) take = count(n - 1, arr, sum - arr[n]);
  return take + nottake;
}

console.log(count(arr.length - 1, arr, 4));
