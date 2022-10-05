const arr = [3, 1, 2, 4];

function printAllSubs(n, arr, curr) {
  console.log([...curr]);
  for (let i = n; i < arr.length; i++) {
    curr.push(arr[i]);
    printAllSubs(i + 1, arr, curr);
    curr.pop();
  }
}

//printAllSubs(0, arr, []);
console.log("----");
// Pick and Non pick
function printSub(n, arr, curr) {
  if (n === arr.length) {
    console.log([...curr]);
    return;
  }
  curr.push(arr[n]);
  printSub(n + 1, arr, curr);
  curr.pop();
  printSub(n + 1, arr, curr);
}

// printSub(0, arr, []);

//----------------------

function subset(n, arr, sum) {
  if (sum == 0) return true;
  if (n == 0) return arr[n] === sum;
  let nottake = subset(n - 1, arr, sum);
  let take = false;
  if (arr[n] <= sum) {
    take = subset(n - 1, arr, sum - arr[n]);
  }
  return take || nottake;
}

console.log(subset(arr.length - 1, arr, 12));

// Divide subsets such that both have same sum

function checkIfSumExists(n, arr, sum) {
  if (sum == 0) return true;
  if (n === 0) return sum === arr[n];
  let take = false;
  if (sum >= arr[n]) take = checkIfSumExists(n - 1, arr, sum - arr[n]);
  let nontake = checkIfSumExists(n - 1, arr, sum);
  return take || nontake;
}

console.log(checkIfSumExists(arr.length - 1, arr, 5));
