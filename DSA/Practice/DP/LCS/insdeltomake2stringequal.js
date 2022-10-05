// Find number of insertion/deletion required to make two string equal

const str1 = "heap";
const str2 = "pea";

function LCS(m1, str1, m2, str2) {
  if ((m1 == 0) | (m2 == 0)) {
    return 0;
  }
  if (str1.charAt(m1 - 1) === str2.charAt(m2 - 1))
    return 1 + LCS(m1 - 1, str1, m2 - 1, str2);
  else {
    return Math.max(LCS(m1, str1, m2 - 1, str2), LCS(m1 - 1, str1, m2, str2));
  }
}

function minDelIns(str1, str2) {
  let m1 = str1.length;
  let m2 = str2.length;
  let lcs = LCS(m1, str1, m2, str2);
  return {
    del: m1 - lcs,
    ins: m2 - lcs,
  };
}

console.log(minDelIns(str1, str2));
