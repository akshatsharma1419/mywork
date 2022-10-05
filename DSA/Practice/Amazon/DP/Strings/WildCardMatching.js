// WildCard Matching
// ? matches with single character
// * matches with sequence of characters

const str1 = "ab*";
const str2 = "abfffdef";

function wildCard(i, j, str1, str2) {
  if (i < 0 && j < 0) return true;
  if ((i < 0 && j >= 0) || (i >= 0 && j < 0)) return false;
  if (str1.charAt(i) === str2.charAt(j) || str1.charAt(i) === "?")
    return wildCard(i - 1, j - 1, str1, str2);
  else {
    if (str1.charAt(i) === "*")
      return (
        wildCard(i, j - 1, str1, str2) ||
        wildCard(i - 1, j - 1, str1, str2) ||
        wildCard(i - 1, j, str1, str2)
      );
    return false;
  }
}

console.log(wildCard(str1.length - 1, str2.length - 1, str1, str2));
