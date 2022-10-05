// Print out first negative number in every window of size k

function firstNegative(arr, k) {
  let output = [];
  let i = 0,
    j = 0,
    neg = [];
  while (j < arr.length) {
    if (arr[j] < 0) neg.push(arr[j]);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      if (neg.length > 0) output.push(neg[0]);
      else output.push(0);
      if (arr[i] == neg[0]) neg.shift();
      j++;
      i++;
    }
  }
  console.log(output);
}

firstNegative([1, 2, -1, 2, -3, 2, 2, 1, -1], 3);


