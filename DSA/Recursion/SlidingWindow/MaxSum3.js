// You are given an array, you need to find max window sum of size k

function maxSum(arr, k) {
  let max = 0;
  let i = 0,
    j = 0,
    sum = 0;
  while (j < arr.length) {
    if (j - i + 1 < k) {
      sum += arr[j];
      j++;
    } else {
      sum += arr[j];
      max = Math.max(sum, max);
      sum -= arr[i];
      i++;
      j++;
    }
  }
  console.log(max);
}

maxSum([10, 5, 5, 3, 9, 2, 8], 3);
