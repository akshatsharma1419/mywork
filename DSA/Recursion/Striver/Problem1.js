// Combination Sum
// [2,3,4,7] -> target is 7 -> [2,2,3],[3,4],[7]
// Single number can be taken twice
function combinationSum(i, arr, curr, sum, output) {
  if (i >= arr.length) {
    if (sum === 0) {
      output.push([...curr]);
    }
    return;
  }
  if (arr[i] <= sum) {
    curr.push(arr[i]);
    combinationSum(i, arr, curr, sum - arr[i], output);
    curr.pop();
  }
  combinationSum(i + 1, arr, curr, sum, output);
}
let output = [];
combinationSum(0, [2, 3, 4, 7], [], 7, output);
console.log(output);

// Combination sum 2- No duplicates
function combinationsSum2(ind, arr, curr, sum, output) {
  if (sum === 0) {
    output.push([...curr]);
    return;
  }
  for (let i = ind; i < arr.length; i++) {
    if (i > ind && arr[i] === arr[i - 1]) continue;
    if (arr[i] > sum) break;
    curr.push(arr[i]);
    combinationsSum2(i + 1, arr, curr, sum - arr[i], output);
    curr.pop();
  }
}

let arr = [2, 4, 1, 3, 2];
arr.sort((a, b) => a - b);
let output2 = [];
combinationsSum2(0, arr, [], 4, output2);
console.log(output2);
