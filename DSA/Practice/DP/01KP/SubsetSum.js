// Given an array find if there is a subset with given sum

let arr = [8, 10, 7, 2, 3, 5];
const requiredSum = 16;

// Print all subsets

function subsets(n, arr, curr_arr) {
  console.log(curr_arr);
  for (let i = n; i < arr.length; i++) {
    curr_arr.push(arr[i]);
    subsets(i + 1, arr, curr_arr);
    curr_arr.pop();
  }
}

// subsets(0, arr, []);

function subsetWithGivenSum(n, arr, sum) {
  if (sum == 0) return true;
  if (n == 0) return false;
  if (arr[n - 1] > sum) {
    return subsetWithGivenSum(n - 1, arr, sum);
  } else if (arr[n - 1] <= sum) {
    return (
      subsetWithGivenSum(n - 1, arr, sum - arr[n - 1]) ||
      subsetWithGivenSum(n - 1, arr, sum)
    );
  }
}

console.log(subsetWithGivenSum(5, arr, requiredSum));

// No of subsets with given sum

function noOfSubsets(n, arr, sum) {
  if (n == 0) {
    if (sum == 0) return 1;
    return 0;
  }
  if (sum >= arr[n - 1]) {
    let take = noOfSubsets(n - 1, arr, sum - arr[n - 1]);
    let notTake = noOfSubsets(n - 1, arr, sum);
    return take + notTake;
  } else {
    return noOfSubsets(n - 1, arr, sum);
  }
}

console.log(noOfSubsets(arr.length, arr, 10));
