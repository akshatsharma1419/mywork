// Print all permutations

// Approach 1  -- Freq array

function printPerm(arr, curr, output, freq) {
  if (curr.length === arr.length) {
    output.push([...curr]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!freq[i]) {
      freq[i] = true;
      curr.push(arr[i]);
      printPerm(arr, curr, output, freq);
      curr.pop();
      freq[i] = false;
    }
  }
}

const output = [];
const arr = [1, 2, 3];

// Approach 2 --> Swapping

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function permutations(ind, arr, output) {
  if (ind === arr.length) {
    output.push([...arr]);
    return;
  }
  for (let i = ind; i < arr.length; i++) {
    swap(i, ind, arr);
    permutations(ind + 1, arr, output);
    swap(i, ind, arr);
  }
}

const output2 = [];
permutations(0, [1, 2, 3], output2);
console.log(output2);

// Practice
function permutaionM1(arr, curr, output, freq) {
  if (curr.length === arr.length) {
    output.push([...curr]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!freq[i]) {
      freq[i] = true;
      curr.push(arr[i]);
      permutaionM1(arr, curr, output, freq);
      curr.pop();
      freq[i] = false;
    }
  }
}

/**
[1,2,3],[1],[],[true,false,false]
[1,2,3],[1,2],[],[true,true,false]
[1,2,3],[1,2,3],[],[true,true,true]
[1,2,3],[1,2],[[1,2,3]],[true,true,false]


 */
const freq = new Array(arr.length);
freq.fill(false);
permutaionM1([1, 2, 3], [], output, freq);
console.log(output);

function permutaionM2(ind, arr, output) {
  if (ind >= arr.length) {
    output.push([...arr]);
    return;
  }
  for (let i = ind; i < arr.length; i++) {
    swap(i, ind, arr);
    permutaionM2(ind + 1, arr, output);
    swap(i, ind, arr);
  }
}
