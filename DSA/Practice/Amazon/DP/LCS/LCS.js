const str1 = "abcabba";
const str2 = "acxabyhqa";

function lCS(m1, m2, str1, str2) {
  if (m1 < 0 || m2 < 0) return 0;
  if (str1.charAt(m1) === str2.charAt(m2)) {
    return 1 + lCS(m1 - 1, m2 - 1, str1, str2);
  }
  return Math.max(lCS(m1 - 1, m2, str1, str2), lCS(m1, m2 - 1, str1, str2));
}

console.log(lCS(str1.length - 1, str2.length - 1, str1, str2));

function lCSDP(str1, str2) {
  let dp = new Array(str1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    let temp = [];
    for (let j = 0; j < str2.length; j++) {
      temp[j] = 0;
    }
    dp[i] = temp;
  }
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1))
        dp[i][j] = 1 + dp[i - 1][j - 1];
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp);
}

lCSDP(str1, str2);
