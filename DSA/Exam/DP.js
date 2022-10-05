// Frog k jump, min energy

const energyRequired = [10, 20, 20, 40, 30, 20, 50, 10];

function minEnergyConsumed(i, arr, k) {
  if (i === 0) return arr[i];
  if (i < 0) return 0;
  let minE = Number.MAX_VALUE;
  for (let j = 1; j <= k; j++) {
    let energy = Number.MAX_VALUE;
    if (i - j >= 0)
      energy = minEnergyConsumed(i - j, arr, k) + Math.abs(arr[i] - arr[i - j]);
    minE = Math.min(energy, minE);
  }
  return minE;
}

console.log(minEnergyConsumed(energyRequired.length - 1, energyRequired, 3));

// Max sum with no adjacent

const arr = [10, 20, 20, 40, 30, 20, 50, 10];

function maxSumNoAdjacent(i, arr) {
  if (i === 0) return arr[i];
  if (i < 0) return 0;
  let take = arr[i] + maxSumNoAdjacent(i - 2, arr);
  let notTake = maxSumNoAdjacent(i - 1, arr);
  return Math.max(take, notTake);
}

console.log(maxSumNoAdjacent(arr.length - 1, arr));

// Ninja Training

const arts = [
  [10, 1, 2],
  [8, 20, 30],
  [10, 5, 100],
  [20, 1, 30],
];

function maxPoints(curr, prev, arts) {
  if (curr === 0) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr[curr].length; i++) {
      if (prev != i) max = Math.max(arr[curr][i], max);
    }
    return max;
  }
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arts[0].length; i++) {
    let points = Number.MIN_VALUE;
    if (prev != curr || prev === -1)
      points = maxPoints(curr - 1, i, arts) + arts[curr][i];
    max = Math.max(points, max);
  }
  return max;
}

console.log(maxPoints(arts.length - 1, -1, arts));

// Unique Paths
function uniquePaths(m, n) {
  if (m === 0 && n === 0) return 1;
  if (m < 0 || n < 0) return 0;
  let up = uniquePaths(m - 1, n);
  let left = uniquePaths(m, n - 1);
  return up + left;
}

console.log(uniquePaths(1, 3));

// Subset sum equal to k
function subset(i, arr, k) {
  if (k === 0) return true;
  if (i < 0) return false;
  let take = false;
  if (k >= arr[i]) take = subset(i - 1, arr, k - arr[i]);
  let notTake = subset(i - 1, arr, k);
  return take || notTake;
}

const arr2 = [2, 1, 1, 2, 4, 1];
console.log(subset(arr2.length - 1, arr2, 9));

// LCS

function LCS(m, n, str1, str2) {
  if (m < 0 || n < 0) return 0;
  if (str1.charAt(m) === str2.charAt(n))
    return 1 + LCS(m - 1, n - 1, str1, str2);
  return Math.max(LCS(m - 1, n, str1, str2), LCS(m, n - 1, str1, str2));
}

const str1 = "abgdefsc";
const str2 = "bejshsfc";
console.log(LCS(str1.length - 1, str2.length - 1, str1, str2));

// Distinct Subsequence
const s1 = "babgbag";
const s2 = "bag";

function distinctSub(m, n, s1, s2) {
  if (n < 0) return 1;
  if (m < 0) return 0;
  if (s1.charAt(m) === s2.charAt(n)) {
    return distinctSub(m - 1, n - 1, s1, s2) + distinctSub(m - 1, n, s1, s2);
  }
  return distinctSub(m - 1, n, s1, s2);
}

console.log(distinctSub(s1.length - 1, s2.length - 1, s1, s2));

// Edit distance
const s11 = "horse";
const s22 = "ros";

function editDistance(m, n, s1, s2) {
  if (m < 0) return n + 1;
  if (n < 0) return m + 1;
  if (s1.charAt(m) === s2.charAt(n)) return editDistance(m - 1, n - 1, s1, s2);
  else {
    let deleteNum = editDistance(m - 1, n, s1, s2);
    let addNum = editDistance(m, n - 1, s1, s2);
    let replaceNum = editDistance(m - 1, n - 1, s1, s2);
    return 1 + Math.min(deleteNum, addNum, replaceNum);
  }
}

console.log(editDistance(s11.length - 1, s22.length - 1, s11, s22));

// LIS

function LIS(curr, prev, arr) {
  if (curr === arr.length) return 0;
  if (prev == -1 || arr[curr] > arr[prev]) return 1 + LIS(curr + 1, curr, arr);
  return LIS(curr + 1, prev, arr);
}

console.log(LIS(0, -1, arr));

// Interleaving string
const istr1 = "adfaa";
const istr2 = "asdgaa";
const str3 = "asadfdaagaa";

function interleaving(str1, str2, str3, m, n, l) {
  if (l === 0) return true;
  if (m < 0 || n < 0) return false;
  let a = false,
    b = false;
  if (m - 1 >= 0 && str1.charAt(m - 1) == str3.charAt(l - 1))
    a = interleaving(str1, str2, str3, m - 1, n, l - 1);
  if (n - 1 >= 0 && str2.charAt(n - 1) == str3.charAt(l - 1))
    b = interleaving(str1, str2, str3, m, n - 1, l - 1);
  return a || b;
}

console.log(
  interleaving(
    istr1,
    istr2,
    str3,
    istr1.length,
    istr2.length,
    istr1.length + istr2.length
  )
);

function wordBreak(i, str, arr) {
  if (i === str.length) return true;
  for (let k = i; k < str.length; k++) {
    if (arr.includes(str.substr(i, k - i + 1)) && wordBreak(k + 1, str, arr))
      return true;
  }
  return false;
}

const strArr = ["i", "have", "a", "love", "USA", "India", "In", "day"];
const wordstr = "iloveIndia";
console.log(wordBreak(0, wordstr, strArr));

// No of sum of pairs with sum divisible by 60

function pairs(i, arr, sum) {}
