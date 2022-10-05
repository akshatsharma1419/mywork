const arr = [1, 2, 2, 4, 2, 1, 6, 3, 2, 3, 3, 1, 5];

function thirdMax(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => a - b);
  console.log(unique[unique.length - 3]);
}

thirdMax(arr);
