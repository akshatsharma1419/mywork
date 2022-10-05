// Longest Substring without repeating characters

let str = "abcdasbsvahwiva";

function longestSubstring(str) {
  let i = 0;
  let j = 0;
  let set = new Set();
  let ans = 0;
  while (j < str.length) {
    if (!set.has(str.charAt(j))) {
      set.add(str.charAt(j));
      ans = Math.max(ans, set.size);
    } else {
      set.delete(str.charAt(j));
      i++;
    }
    j++;
  }
  console.log(ans);
}

longestSubstring(str);

// Longest Substring with k repeating characters

function longestSSWithKUnique(str) {
  let j = 0;
  let i = 0;
  let ans = 0;
  let map = new Map();
  while (j < str.length) {
    if (map.size <= 2 || map.has(str.charAt(j))) {
      map.has(str.charAt(j))
        ? map.set(str.charAt(j), 1 + map.get(str.charAt(j)))
        : map.set(str.charAt(j), 1);
      j++;
    } else {
      console.log(map);
      map.get(str.charAt(i)) > 1
        ? map.set(str.charAt(i), map.get(str.charAt(i)) - 1)
        : map.delete(str.charAt(i));
      i++;
    }
  }
}

longestSSWithKUnique(str);
