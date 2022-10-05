// Distinct subsequence
// Count all distinct subsequnce

const str1 = "babgbag";
const str2 = "bag";

function distinctSubs(i, j, str1, str2) {
  if (j < 0) return 1;
  if (j >= 0 && i < 0) return 0;
  if (str1.charAt(i) === str2.charAt(j)) {
    return (
      distinctSubs(i - 1, j, str1, str2) +
      distinctSubs(i - 1, j - 1, str1, str2)
    );
  } else {
    return distinctSubs(i - 1, j, str1, str2);
  }
}

console.log(distinctSubs(str1.length - 1, str2.length - 1, str1, str2));
