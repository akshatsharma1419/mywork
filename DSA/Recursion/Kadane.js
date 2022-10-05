// Find maxiumum sum in a contigeous array

function maxSum(arr) {
  let meh = 0,
    msf = 0;
  for (let i = 0; i < arr.length; i++) {
    meh += arr[i];
    if (meh < arr[i]) meh = arr[i];
    if (msf < meh) msf = meh;
  }
  console.log(msf);
}

maxSum([-2, -3, 4, -1, -2, 1, 5, -3]);

// Maximum product subarray

function maxProduct(arr) {
  let max = arr[0];
  let min = arr[0];
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let temp = max;
    max = Math.max(arr[i], Math.max(max * arr[i], min * arr[i]));
    min = Math.min(arr[i], Math.min(min * arr[i], temp * arr[i]));
    ans = Math.max(ans, max);
  }
  console.log(ans);
}

maxProduct([2, 6, -3, 1, 20]);
