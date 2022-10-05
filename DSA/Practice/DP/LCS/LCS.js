const str1 = "ABACDE";
const str2 = "AAGFCYE";

function LCS(m1, str1, m2, str2) {
  if (m1 == 0 || m2 == 0) return 0;
  if (str1.charAt(m1 - 1) === str2.charAt(m2 - 1)) {
    return 1 + LCS(m1 - 1, str1, m2 - 1, str2);
  } else {
    return Math.max(LCS(m1, str1, m2 - 1, str2), LCS(m1 - 1, str1, m2, str2));
  }
}

console.log(LCS(str1.length, str1, str2.length, str2));
