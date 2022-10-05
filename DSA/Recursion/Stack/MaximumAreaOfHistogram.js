// arr = [6,2,5,4,5,1,6];
// ans = 12

function nSL(arr, output) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) output.push(0);
    else if (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
      output.push(stack[stack.length - 1][1]);
    } else if (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
      while (stack.length > 0) {
        stack.pop();
        if (stack.length == 0) output.push(0);
        else if (stack[stack.length - 1][0] < arr[i]) {
          output.push(stack[stack.length - 1][1]);
          break;
        }
      }
    }
    stack.push([arr[i], i]);
  }
}

function maxArea(arr) {
  let nSLeft = [],
    nSRight = [];
  nSL(arr, nSLeft);
  //nSR(arr, nSRight);
  console.log(nSLeft);
}

maxArea([6, 2, 5, 4, 5, 1, 6]);
