// Find missing number in an array

//  1. using map
//  2. Total sum(1 to n) - Array sum
//  3.  XOR

// Find Missing and Repeating number
const arr = [1, 3, 5, 2, 1];

// Swap sort
function findMandR(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] != i + 1 && arr[arr[i] - 1] != arr[i]) {
      swap(arr, arr[i] - 1, i);
    } else {
      i++;
    }
  }
  console.log(arr);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

findMandR(arr);
