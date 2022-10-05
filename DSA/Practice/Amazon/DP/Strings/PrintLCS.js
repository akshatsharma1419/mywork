const str1 = "abcdefh";
const str2 = "achaaehw";

function LCS(str1, str2, m1, m2) {
  if (m1 < 0 || m2 < 0) return 0;
  if (str1.charAt(m1) === str2.charAt(m2)) {
    return 1 + LCS(str1, str2, m1 - 1, m2 - 1);
  } else {
    return Math.max(LCS(str1, str2, m1 - 1, m2), LCS(str1, str2, m1, m2 - 1));
  }
}

console.log(LCS(str1, str2, str1.length - 1, str2.length - 1));

function lcsDP(str1, str2) {
  let dp = new Array(str1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    let temp = [];
    for (let j = 0; j <= str2.length; j++) temp[j] = 0;
    dp[i] = temp;
  }
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1))
        dp[i][j] = 1 + dp[i - 1][j - 1];
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  let i = str1.length,
    j = str2.length,
    output = "";
  while (i > 0 && j > 0) {
    if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
      output += str1.charAt(i - 1);
      i--;
      j--;
    } else {
      if (dp[i - 1][j] > dp[i][j - 1]) i--;
      else j--;
    }
  }
  console.log([...output].reverse().join(""));
}

lcsDP(str1, str2);
