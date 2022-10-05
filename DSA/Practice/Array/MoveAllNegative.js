// Move all negative to one beginning of array

const arr = [2, -1, 3, 4, -4, 1, -5, 2, 1, -8];

function move(arr) {
  let i = -1,
    j = 0;
  while (j < arr.length) {
    if (arr[j] < 0) {
      i++;
      swap(arr, i, j);
      j++;
    } else {
      j++;
    }
  }
  console.log(arr);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

move(arr);
