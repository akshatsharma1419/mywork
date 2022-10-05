// Stock span problem
// arr = [100,80,60,70,60,75,85]
// output=[1,1,1,2,1,4,6]
// No of days stock is less price than current, consecutive days
//Next largest element to right

function nGEL(arr, output) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) output.push(1);
    else if (stack.length > 0 && stack[stack.length - 1][0] > arr[i]) {
      output.push(i - stack[stack.length - 1][1]);
    } else if (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
      while (stack.length > 0) {
        stack.pop();
        if (stack.length == 0) output.push(-1);
        else if (stack[stack.length - 1][0] > arr[i]) {
          output.push(i - stack[stack.length - 1][1]);
          break;
        }
      }
    }
    stack.push([arr[i], i]);
  }
}

function stockSpan(arr) {
  let ng = [];
  nGEL(arr, ng);
  console.log(ng);
}

stockSpan([100, 80, 60, 70, 60, 75, 85]);
