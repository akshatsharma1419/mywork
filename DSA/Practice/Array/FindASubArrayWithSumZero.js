// Find if there is a sub array with sum 0

const arr = [4, 2, -3, 2, 3, -1];

function subArraySumZero(arr) {
  let set = new Set();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0 || set.has(sum)) return true;
    set.add(sum);
  }
  return false;
}

console.log(subArraySumZero(arr));

// Find no of subset with sum k

function noOfSubsetSumK(arr, k) {
  let set = new Set();
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] == k) count++;
    else if (set.has(sum - k)) count++;
    set.add(sum);
  }
  console.log(count);
}
const arr2 = [7, 3, 4, 5, 1, 1, 6];
noOfSubsetSumK(arr2, 7);
