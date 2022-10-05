// Merge Intervals

const arr = [
  [1, 2],
  [2, 4],
  [5, 7],
  [8, 9],
  [9, 11],
];

function merge(arr) {
  let output = [];
  let j = 0;
  output[0] = [...arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (output[j][1] >= arr[i][0]) {
      output[j][1] = arr[i][1];
    } else {
      output = [...output, arr[i]];
      j++;
    }
  }
  console.log(output);
}

merge(arr);
