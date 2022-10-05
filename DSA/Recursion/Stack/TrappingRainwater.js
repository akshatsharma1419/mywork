// Trapping rainwater problem

function calMXL(arr, output) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    output[i] = max;
  }
}

function calMXR(arr, output) {
  let max = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
    }
    output[i] = max;
  }
}

function water(arr) {
  let mxl = [],
    mxr = [];
  calMXL(arr, mxl);
  calMXR(arr, mxr);
  console.log(mxl, mxr);
}

water([3, 0, 0, 2, 0, 4]);
