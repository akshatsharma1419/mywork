const islands = [
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
];

function markIslands(i, j, islands) {
  if (
    i < 0 ||
    j < 0 ||
    i >= islands.length ||
    j >= islands[0].length ||
    islands[i][j] === 0
  )
    return;
  islands[i][j] = 0;
  markIslands(i - 1, j, islands); // UP
  markIslands(i + 1, j, islands); // DOWN
  markIslands(i, j - 1, islands); // LEFT
  markIslands(i, j + 1, islands); // RIGHT
}

function noOfIslands(islands) {
  let count = 0;
  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[0].length; j++) {
      if (islands[i][j] === 1) {
        markIslands(i, j, islands);
        count++;
      }
    }
  }
  console.log(count);
}

// noOfIslands(islands);

// Mark Distinct Islands

function markAndGetDirections(i, j, arr, direction) {
  if (
    i < 0 ||
    j < 0 ||
    i >= arr.length ||
    j >= arr[0].length ||
    arr[i][j] === 0
  )
    return "O";
  arr[i][j] = 0;
  let left = markAndGetDirections(i, j - 1, arr, "L");
  let right = markAndGetDirections(i, j + 1, arr, "R");
  let up = markAndGetDirections(i - 1, j, arr, "U");
  let down = markAndGetDirections(i + 1, j, arr, "D");
  return direction + left + right + up + down;
}

function noOfDistIslands(islands) {
  let count = new Set();
  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[0].length; j++) {
      if (islands[i][j] === 1) {
        count.add(markAndGetDirections(i, j, islands, ""));
      }
    }
  }
  console.log(count.size);
}

// noOfDistIslands(islands);

// Maximum area of Island

function markAll(i, j, islands) {
  if (
    i < 0 ||
    j < 0 ||
    i >= islands.length ||
    j >= islands[0].length ||
    islands[i][j] === 0
  )
    return 0;
  islands[i][j] = 0;
  let left = markAll(i, j - 1, islands);
  let right = markAll(i, j + 1, islands);
  let up = markAll(i - 1, j, islands);
  let down = markAll(i + 1, j, islands);
  return 1 + left + right + up + down;
}

function maxAreaIsland(islands) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[0].length; j++) {
      if (islands[i][j] === 1) {
        let val = markAll(i, j, islands);
        max = Math.max(max, val);
      }
    }
  }
  console.log(max);
}

maxAreaIsland(islands);
