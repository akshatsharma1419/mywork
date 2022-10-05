// Dutch National Flag Algorithm

const arr = [1, 2, 1, 0, 1, 2, 0, 0];

function sort012(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      swap(arr, mid, high);
      high--;
    }
  }
  console.log(arr);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

sort012(arr);
