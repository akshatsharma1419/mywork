// Find minimum number of jumps to reach end of array

const arr = [1, 3, 2, 5, 1, 1, 2, 3, 1];

function minJumps(arr) {
  let maxR = arr[0];
  let steps = arr[0];
  let jump = 1;
  for (let i = 1; i < arr.length; i++) {
    if (i == arr.length - 1) return jump;
    maxR = Math.max(maxR, i + arr[i]);
    steps--;
    if (steps == 0) {
      jump++;
      if (i >= maxR) return -1;
      steps = maxR - i;
    }
  }
}

console.log(minJumps(arr));
