// Reverse an array

// Recursion using 2 pointers
function reverse(l, r, arr) {
  if (l >= r) return arr;
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  return reverse(l + 1, r - 1, arr);
}

let arr = [1, 2, 3, 4, 5];
console.log(reverse(0, 4, [...arr]));

// Recursion using 1 pointer
function reverse2(i, arr) {
  if (i >= arr.length - i - 1) return arr;
  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
  return reverse2(i + 1, arr);
}
console.log(reverse2(0, [...arr]));

// Check if a given string is Palindrome

function palindrome(start, end, s) {
  if (start >= end) return true;
  if (s.charAt(start) !== s.charAt(end)) return false;
  return palindrome(start + 1, end - 1, s);
}

const str = "ABABBA";
console.log(palindrome(0, str.length - 1, str));

function reverseString(i, s) {
  if (i >= s.length) return "";
  return reverseString(i + 1, s) + s.charAt(i);
}

const s = "abcde";
console.log(reverseString(0, s));
