let arr = [3, 1, 2];

function permutations(ind, arr, output) {
  if (ind == arr.length) {
    output.push([...arr]);
    return;
  }
  for (let i = ind; i < arr.length; i++) {
    swap(arr, i, ind);
    permutations(ind + 1, arr, output);
    swap(arr, i, ind);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let output = [];
permutations(0, arr, output);
console.log(output);
