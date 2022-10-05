// Print all subsequence---> A contigous/non-contigous sequence which follows order.

function printSubsequence(i, arr, curr) {
  if (i >= arr.length) {
    console.log(curr);
    return;
  }
  curr.push(arr[i]);
  printSubsequence(i + 1, arr, curr);
  curr.pop();
  printSubsequence(i + 1, arr, curr);
}

printSubsequence(0, [3, 2, 1], []);

// TC - 2 to power n * n
// SC - Stack Space O(n)

// print all subsequence with k sum

function kSumSub(i, arr, curr, k) {
  if (i >= arr.length) {
    if (k === 0) console.log(curr);
    return;
  }
  curr.push(arr[i]);
  kSumSub(i + 1, arr, curr, k - arr[i]);
  curr.pop();
  kSumSub(i + 1, arr, curr, k);
}

kSumSub(0, [1, 2, 3], [], 3);

// Technique to print only one ans
// Return true if condition match, check result of recursion call if true is returned, return true.

function firstKSumSub(i, arr, curr, k) {
  if (i >= arr.length) {
    if (k === 0) {
      console.log(curr);
      return true;
    }
    return false;
  }
  curr.push(arr[i]);
  if (firstKSumSub(i + 1, arr, curr, k - arr[i]) === true) return true;
  curr.pop();
  if (firstKSumSub(i + 1, arr, curr, k) === true) return true;
  return false;
}

firstKSumSub(0, [1, 2, 3], [], 3);

// Count no of subseq with sum k.

function countNoOfSubSeq(i, arr, curr, k) {
  if (i >= arr.length) {
    if (k === 0) return 1;
    return 0;
  }
  curr.push(arr[i]);
  let left = countNoOfSubSeq(i + 1, arr, curr, k - arr[i]);
  curr.pop();
  let right = countNoOfSubSeq(i + 1, arr, curr, k);
  return left + right;
}

console.log(countNoOfSubSeq(0, [1, 2, 3], [], 3));
