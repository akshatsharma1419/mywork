// First Non Repeating character

const str = "leetlcotde";

function firstNonRepeating(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str.charAt(i))) {
      map.set(str.charAt(i), 1);
    } else {
      map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (map.get(str.charAt(i)) === 1) return i;
  }
  return -1;
}

console.log(firstNonRepeating(str));
