const arr = [4, 3, 2, 7, 8, 2, 3, 1];

function allDuplicates(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = Math.abs(arr[i]) - 1;
    if (arr[curr] < 0) ans.push(curr + 1);
    else {
      arr[curr] = -1 * arr[curr];
    }
  }
  console.log(ans);
}
allDuplicates(arr);
