const arr = [1, 5, 8, 4, 7, 6, 5, 3, 1];

function nextPerm(arr) {
  let nextG = Number.MAX_SAFE_INTEGER;
  let idx = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      nextG = arr[i - 1];
      idx = i - 1;
      break;
    }
  }
  let toSwap = 0;
  for (let i = idx + 2; i < arr.length; i++) {
    if (arr[i] > nextG) toSwap = i;
  }
  let temp = doRest(arr, toSwap, idx);
  arr = arr.slice(0, idx + 1);
  arr = [...arr, ...temp];
  console.log(arr);
}

function doRest(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return (temp = arr.slice(j + 1).sort((a, b) => a - b));
}

nextPerm(arr);
