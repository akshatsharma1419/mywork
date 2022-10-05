// Fibonacci Number

function fibo(n, dp) {
  if (n <= 1) return n;
  if (dp[n] > 0) return dp[n];
  return (dp[n] = fibo(n - 1, dp) + fibo(n - 2, dp));
}

const dp = new Array(5 + 1);
dp.fill(-1);
console.log(fibo(5, dp));

// 0 1 1 2 3

// Climbing Stairs
