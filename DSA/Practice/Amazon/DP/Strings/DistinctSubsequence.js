// Find out no of times a string occurs in string1

const str1 = "babgbag";
const str2 = "bag";

function findTimes(i, j, str1, str2) {
  if (j < 0) return 1;
  if (i < 0) return 0;
  if (str1.charAt(i) === str2.charAt(j)) {
    return (
      findTimes(i - 1, j - 1, str1, str2) + findTimes(i - 1, j, str1, str2)
    );
  } else {
    return findTimes(i - 1, j, str1, str2);
  }
}

console.log(findTimes(str1.length - 1, str2.length - 1, str1, str2));
