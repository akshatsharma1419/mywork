// You will be given two strings, you have to calculate no of occ of anagram in string2

function freq(str, ob) {
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (ob[c] != undefined) {
      ob[c]++;
    } else ob[c] = 1;
  }
}

function countOcc(str1, str2) {
  let count = 0;
  let occ1 = {};
  freq(str2, occ1);
  let i = 0,
    j = 0,
    occ2 = {};
  while (j < str1.length) {
    if (occ2[str1.charAt(j)] != undefined) {
      occ2[str1.charAt(j)]++;
    } else occ2[str1.charAt(j)] = 1;
    if (j - i + 1 < str2.length) j++;
    else if (j - i + 1 == str2.length) {
      if (JSON.stringify(occ1) == JSON.stringify(occ2)) count++;
      occ2[str1.charAt(i)]--;
      i++;
      j++;
    }
  }
  console.log(count);
}

countOcc("acbbcaa", "abc");
