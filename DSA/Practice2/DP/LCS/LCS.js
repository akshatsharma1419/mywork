let str1 = "abaccbde";
let str2 = "zbocaadfe";

function LCS(m, n, str1, str2) {
  if (m === 0 || n === 0) return 0;
  if (str1.charAt(m - 1) === str2.charAt(n - 1))
    return 1 + LCS(m - 1, n - 1, str1, str2);
  else {
    return Math.max(LCS(m - 1, n, str1, str2), LCS(m, n - 1, str1, str2));
  }
}

console.log(LCS(str1.length, str2.length, str1, str2));
