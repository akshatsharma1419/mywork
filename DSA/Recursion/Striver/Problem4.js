// N Queen Problem

function nQueen(n) {
  const board = createBoard(n);
  const output = [];
  solve(0, board, output);
  console.log(output);
}

function solve(col, arr, output) {
  if (col >= arr.length) {
    console.log(arr);
    return;
  }
  for (let row = 0; row < arr.length; row++) {
    if (canPlace(row, col, arr)) {
      arr[row][col] = "Q";
      solve(col + 1, arr, output);
      arr[row][col] = ".";
    }
  }
}

function canPlace(row, col, arr) {
  let rowC = row;
  let colC = col;
  while (colC >= 0 && rowC >= 0) {
    if (arr[rowC][colC] === "Q") return false;
    rowC--;
    colC--;
  }
  rowC = row;
  colC = col;
  while (colC >= 0) {
    if (arr[rowC][colC] === "Q") return false;
    colC--;
  }
  colC = col;
  while (colC >= 0 && rowC < arr.length) {
    if (arr[rowC][colC] === "Q") return false;
    rowC++;
    colC--;
  }
  return true;
}

function createBoard(n) {
  let board = new Array(n);
  let k = [];
  for (let i = 0; i < n; i++) {
    k.push(".");
  }
  for (let i = 0; i < n; i++) {
    board[i] = [...k];
  }
  return board;
}

function compress(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i].join(""));
  }
  return output;
}

nQueen(4);
