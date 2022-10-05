const arr = [1, 2, 1, 0, -2, 3, -1, 0, 3];
const k = 0;

function maxSubArrayWithSumk(arr, k) {
  let sum = 0;
  let ans = -1;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) ans = Math.max(ans, i + 1);
    else if (map.has(sum - k)) ans = Math.max(ans, i - map.get(sum - k));
    else {
      map.set(sum, i);
    }
  }
  console.log(ans);
}

maxSubArrayWithSumk(arr, k);
