// Check if partation can be made with equal sum

function partationSum(n, arr, sum) {
  if (n == 0) {
    if (sum == 0) return true;
    return false;
  }
  if (sum >= arr[n - 1]) {
    return (
      partationSum(n - 1, arr, sum - arr[n - 1]) ||
      partationSum(n - 1, arr, sum)
    );
  } else {
    return partationSum(n - 1, arr, sum);
  }
}

function findPart(arr) {
  let sum = arr.reduce((acc, curr) => (acc += curr), 0);
  if (sum % 2 == 0) return partationSum(arr.length, arr, sum / 2);
  return false;
}

console.log(findPart([2, 8, 3, 2, 7]));
