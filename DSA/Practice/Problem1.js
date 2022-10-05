function subsq(i, arr, curr) {
  if (i >= arr.length) {
    console.log(curr);
    return;
  }
  curr.push(arr[i]);
  subsq(i + 1, arr, curr);
  curr.pop();
  subsq(i + 1, arr, curr);
}

subsq(0, [1, 2, 3], []);

function subsetSum(i, arr, curr, sum) {
  if (i >= arr.length) {
    if (sum == 0) console.log(curr);
    return;
  }
  curr.push(arr[i]);
  subsetSum(i + 1, arr, curr, sum - arr[i]);
  curr.pop();
  subsetSum(i + 1, arr, curr, sum);
}

subsetSum(0, [1, 2, 3], [], 3);

function firstSubsetSum(i, arr, curr, sum) {
  if (i >= arr.length) {
    if (sum == 0) {
      console.log(curr);
      return true;
    }
    return false;
  }
  curr.push(arr[i]);
  if (firstSubsetSum(i + 1, arr, curr, sum - arr[i])) return true;
  curr.pop();
  if (firstSubsetSum(i + 1, arr, curr, sum)) return true;
  return false;
}

firstSubsetSum(0, [1, 2, 3], [], 3);

function countSubsetSum(i, arr, curr, sum) {
  if (i >= arr.length) {
    if (sum == 0) {
      return 1;
    }
    return 0;
  }
  curr.push(arr[i]);
  let left = countSubsetSum(i + 1, arr, curr, sum - arr[i]);
  curr.pop();
  let right = countSubsetSum(i + 1, arr, curr, sum);
  return left + right;
}

console.log(countSubsetSum(0, [1, 2, 3], [], 3));

// Print all subsequence

function subSeq2(ind, arr, curr) {
  console.log(curr);
  for (let i = ind; i < arr.length; i++) {
    curr.push(arr[i]);
    subSeq2(i + 1, arr, curr);
    curr.pop();
  }
}

subSeq2(0, [1, 2, 3], []);

// Rat in a Maze

let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

let visited = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

let direction = "DLRU";
let moveX = [1, 0, 0, -1];
let moveY = [0, -1, 1, 0];

function ratInMaze(row, col, maze, visited, dir) {
  if (row >= maze.length - 1 && col >= maze.length - 1) {
    console.log(dir);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let mX = row + moveX[i];
    let mY = col + moveY[i];

    if (
      mX >= 0 &&
      mX < maze.length &&
      mY >= 0 &&
      mY < maze.length &&
      !visited[mX][mY] &&
      maze[mX][mY] === 1
    ) {
      visited[mX][mY] = true;
      ratInMaze(mX, mY, maze, visited, dir + direction.charAt(i));
      visited[mX][mY] = false;
    }
  }
}

ratInMaze(0, 0, maze, visited, "");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.null == null;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.left.left.left = new Node(70);
root.left.left.right = new Node(80);

function findPath(root) {
  let output = [];
  solve(root, output, 70);
  console.log(output);
}

function solve(root, output, value) {
  if (root == null) return false;

  output.push(root.val);
  if (root.val == value) return true;

  if (solve(root.left, output, value) || solve(root.right, output, value))
    return true;
  output.pop();
  return false;
}

findPath(root);

function maxPathSum(root, max) {
  if (root == null) return 0;
  let left = maxPathSum(root.left, max);
  let right = maxPathSum(root.right, max);
  max[0] = Math.max(max[0], left + right + root.val);
  return root.val + Math.max(left, right);
}

let max = [];
max[0] = Number.MIN_SAFE_INTEGER;
maxPathSum(root, max);
console.log(max);
