// Longest Common Subsequence

let str1 = "abcde";
let str2 = "abfce";

function LCS(str1, str2, m, n) {
  if (m == 0 || n == 0) return 0;
  else if (str1.charAt(m - 1) == str2.charAt(n - 1)) {
    return 1 + LCS(str1, str2, m - 1, n - 1);
  } else {
    return Math.max(LCS(str1, str2, m - 1, n), LCS(str1, str2, m, n - 1));
  }
}

console.log(LCS(str1, str2, str1.length, str2.length));

function LCS2(str1, str2, m, n) {
  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    let temp = new Array(n + 1).fill(-1);
    dp[i] = temp;
  }
  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (str1.charAt(i - 1) == str2.charAt(j - 1))
        dp[i][j] = 1 + dp[i - 1][j - 1];
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[m][n]);
}

LCS2(str1, str2, str1.length, str2.length);

function LCSubString(str1, str2, m, n) {
  let ans = 0;
  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    let temp = new Array(n + 1).fill(-1);
    dp[i] = temp;
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (str1.charAt(m) == str2.charAt(n)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        ans = Math.max(dp[i][j], ans);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  console.log(ans);
}

LCSubString(str1, str2, str1.length, str2.length);
