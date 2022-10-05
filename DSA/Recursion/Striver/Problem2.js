// Print sum of all subsets

function subsetSum(i, arr, curr, sum, output) {
  if (i >= arr.length) {
    output.push(sum);
    return;
  }
  curr.push(arr[i]);
  subsetSum(i + 1, arr, curr, sum + arr[i], output);
  curr.pop();
  subsetSum(i + 1, arr, curr, sum, output);
}

const output = [];
subsetSum(0, [3, 2, 1], [], 0, output);
console.log(output);

// Subset sum 2 with duplicates--> [1,1,2,2,3] output should not contain any duplicates

function subsetDup(ind, arr, curr, output) {
  output.push([...curr]);
  for (let i = ind; i < arr.length; i++) {
    if (i > ind && arr[i] === arr[i - 1]) continue;
    curr.push(arr[i]);
    subsetDup(i + 1, arr, curr, output);
    curr.pop();
  }
}

let output2 = [];
subsetDup(0, [1, 2, 2, 3, 3], [], output2);
console.log(output2);

function printAllSub(ind, arr, curr, output) {
  output.push(curr);
  for (let i = ind; i < arr.length; i++) {
    curr.push(arr[i]);
    printAllSub(i + 1, arr, curr, output);
    curr.pop();
  }
}

let output3 = [];
subsetDup(0, [1, 2, 3], [], output3);
console.log(output3);
