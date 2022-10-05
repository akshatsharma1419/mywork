// ** VVVIMP

// make string1 to string2 using 3 operations- insert, replace, delete

const str1 = "horse";
const str2 = "ros";

function edit(i, j, str1, str2) {
  if (i < 0) return j + 1; // When str1 gets exhausted we need to insert j+1 no of characters
  if (j < 0) return i + 1; // When str2 gets exhausted we need to deleted i+1 no of characters
  if (str1.charAt(i) === str2.charAt(j)) {
    return edit(i - 1, j - 1, str1, str2);
  } else {
    let insert = edit(i, j - 1, str1, str2);
    let deleteStr = edit(i - 1, j, str1, str2);
    let replace = edit(i - 1, j - 1, str1, str2);
    return 1 + Math.min(insert, deleteStr, replace);
  }
}

console.log(edit(str1.length - 1, str2.length - 1, str1, str2));
