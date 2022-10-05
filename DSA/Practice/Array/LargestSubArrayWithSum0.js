const arr = [1, 0, 2, -1, 3, -5, -2, 1, 1, 0, 5];

function largestSubArray(arr) {
  let map = new Map();
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == 0) {
      ans = i + 1;
    } else {
      if (map.has(sum)) {
        ans = Math.max(ans, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }
  console.log(ans);
}

largestSubArray(arr);
