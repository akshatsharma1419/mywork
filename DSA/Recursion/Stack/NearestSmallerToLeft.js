// Nearest Smaller element to Right

function nSEL(arr) {
  let stack = [];
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length == 0) output.push(-1);
    else if (stack.length > 0 && stack[stack.length] < arr[i]) {
      output.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      while (stack.length > 0) {
        stack.pop();
        if (stack.length == 0) output.push(-1);
        else if (stack[stack.length - 1] < arr[i]) {
          output.push(stack[stack.length - 1]);
        }
      }
    }
    stack.push(arr[i]);
  }
  console.log(output);
}

nSEL([4, 5, 2, 10, 8]);
