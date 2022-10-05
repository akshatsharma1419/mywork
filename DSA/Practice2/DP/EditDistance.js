let str1 = "horse";
let str2 = "ros";

function editDistance(i, j, str1, str2) {
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;
  if (str1.charAt(i) === str2.charAt(j)) {
    return editDistance(i - 1, j - 1, str1, str2);
  } else {
    let deleteCh = editDistance(i - 1, j, str1, str2);
    let insertCh = editDistance(i, j - 1, str1, str2);
    let replaceCh = editDistance(i - 1, j - 1, str1, str2);
    return 1 + Math.min(deleteCh, insertCh, replaceCh);
  }
}

console.log(editDistance(str1.length - 1, str2.length - 1, str1, str2));
