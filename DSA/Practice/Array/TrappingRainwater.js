const buildings = [0, 2, 3, 1, 4, 0, 1, 3];

function trappingRW(arr) {
  let leftMax = getleftMax(arr);
  let rightMax = getRightMax(arr);
  console.log(leftMax, rightMax);
  let water = 0;
  for (let i = 0; i < arr.length; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - arr[i];
  }
  console.log(water);
}

function getleftMax(arr) {
  let output = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    output[i] = max;
  }
  return output;
}
function getRightMax(arr) {
  let output = [];
  let max = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    max = Math.max(max, arr[i]);
    output[i] = max;
  }
  return output;
}

trappingRW([3, 0, 0, 2, 0, 4]);
