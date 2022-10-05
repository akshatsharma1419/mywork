const arr = [7, 1, 5, 3, 6, 4];

function maxProfit(arr) {
  let min = arr[0];
  let output = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    else {
      output = Math.max(output, arr[i] - min);
    }
  }
  console.log(output);
}

maxProfit(arr);
