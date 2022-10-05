// Maximum sum with no adjacent

function maxSum(arr) {
  let dp = new Array(arr.length + 1);
  dp[0] = arr[0];
  dp[1] = Math.max(dp[0], dp[1]);
  for (let i = 2; i < arr.length; i++) {
    dp[i] = arr[i] + Math.max(dp[i - 1], dp[i - 2]);
  }
  console.log(dp);
}

maxSum();
