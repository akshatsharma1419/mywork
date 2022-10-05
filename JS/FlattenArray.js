const arr = [1, [2, 3], 4, [5, [6, 7], 8], 9, [10]];

function flattenArray(arr) {
  let output = [];
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) flatten(arr[i]);
      else {
        output.push(arr[i]);
      }
    }
  }
  flatten(arr);
  console.log(output);
}

flattenArray(arr);
