// Minimum insertions to make string palindrome

let str1 = "adfba";
//         "abfda"  3

function minInsertions(str1) {
  let str2 = [...str1].reverse().join("");
  const lcs = LCS(str1, str2);
  return str1.length - lcs;
}

function LCS(str1, str2) {
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
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[str1.length][str2.length];
}

console.log(minInsertions(str1));
