// find largest subarray of sum k

function largest(arr, sum) {
  let max = 0;
  let i = 0,
    j = 0,
    curr_sum = 0;
  while (j < arr.length) {
    curr_sum += arr[j];
    if (curr_sum == sum) {
      max = Math.max(max, j - i + 1);
      j++;
    } else if (curr_sum > sum) {
      curr_sum -= arr[i];
      i++;
      j++;
    } else if (curr_sum < sum) j++;
  }
  console.log(max);
}

largest([2, 2, 1, 1, 3, 4], 4);
