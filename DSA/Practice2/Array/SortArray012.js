const arr = [1, 2, 1, 0, 2, 1, 0, 0, 2, 1, 1, 0];

function sort012(arr) {
  let zero = 0;
  let one = 0;
  let two = arr.length - 1;
  while (one <= two) {
    if (arr[one] === 0) {
      swap(zero, one, arr);
      one++;
      zero++;
    } else if (arr[one] === 1) {
      one++;
    } else {
      swap(one, two, arr);
      two--;
    }
  }
  console.log(arr);
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

sort012(arr);
