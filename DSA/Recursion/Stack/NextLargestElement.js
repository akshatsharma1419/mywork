// Nearest greater to right

/**
 Eg
 arr = [1,3,2,4]
 output= [3,4,4,-1]
 */

function nGER(arr) {
  let stack = [];
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length == 0) output.push(-1);
    else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      output.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
        if (stack.length == 0) output.push(-1);
        else if (stack[stack.length - 1] > arr[i]) {
          output.push(stack[stack.length - 1]);
          break;
        }
      }
    }
    stack.push(arr[i]);
  }
  console.log(output.reverse());
}

nGER([1, 3, 5, 0, 0, 2, 4]);
