// Min energy consumed to reach end with K distance

function minJumps(n, arr, k) {
  if (n == 0) return 0;
  let min = Number.MAX_VALUE;
  for (let i = 1; i <= k; i++) {
    if (n - i >= 0) {
      let value = minJumps(n - i, arr, k) + Math.abs(arr[n] - arr[n - i]);
      min = Math.min(min, value);
    } else break;
  }
  return min;
}

const arr = [30, 10, 60, 10, 60, 50];
console.log(minJumps(arr.length - 1, arr, 2));
