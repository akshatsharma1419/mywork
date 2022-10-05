// Find larget sum in contigeous subarray
// Kadane Algorithm

const arr = [2, -3, -2, 1, 4, -3, 5];
function maxSum(arr) {
  let maxEndingHere = 0,
    maxSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    if (maxEndingHere < arr[i]) maxEndingHere = arr[i];
    if (maxEndingHere > maxSoFar) maxSoFar = maxEndingHere;
  }
  console.log(maxSoFar);
}

maxSum(arr);

// Max product array

function maxProduct(arr) {
  let max = arr[0];
  let min = arr[0];
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    let temp = max;
    max = Math.max(max * arr[i], min * arr[i]);
    min = Math.min(min * arr[i], temp * arr[i]);
    ans = Math.max(ans, max);
  }
  console.log(ans);
}

maxProduct(arr);
