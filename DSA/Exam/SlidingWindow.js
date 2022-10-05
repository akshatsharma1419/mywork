let str = "abbkdokaiqa";

function maxUique(str) {
  let i = 0,
    j = 0,
    max = 0;
  let set = new Set();
  while (j < str.length) {
    let ch = str.charAt(j);
    if (!set.has(ch)) {
      set.add(ch);
    } else {
      max = Math.max(set.size, max);
      set.delete(str.charAt(i));
      i++;
    }
    j++;
  }
  console.log(max);
}

maxUique(str);
