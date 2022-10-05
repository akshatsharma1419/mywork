// Count no of pairs with given sum

// 2 sum

const arr = [1, 1, 1, 1];

function noOfPairs(arr, sum) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(sum - arr[i])) count += map.get(sum - arr[i]);
    map.has(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1);
  }
  console.log(count);
}

noOfPairs(arr, 2);

// 3 sum
