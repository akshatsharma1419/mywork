const str = "abdcababcadaab";

function maxSubStr(str, k) {
  const map = new Map();
  let j = 0;
  let i = 0;
  while (j < str.length) {
    if (map.size < k) {
      map.has(str.charAt(j))
        ? map.set(str.charAt(j), map.get(str.charAt(j)) + 1)
        : map.set(str.charAt(j), 1);
    } else if (map.size === k && map.has(str.charAt(j))) {
      map.set(str.charAt(j), map.get(str.charAt(j)) + 1);
    } else {
      console.log(map);
      map.set(str.charAt(i), map.get(str.charAt(i)) - 1);
      if (map.get(str.charAt(i)) === 0) map.delete(str.charAt(i));
      i++;
    }
    j++;
  }
}

maxSubStr(str, 3);
