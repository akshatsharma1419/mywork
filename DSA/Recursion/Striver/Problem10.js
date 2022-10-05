// Check if a robot can reach end

const dir = [
  ["D", "D", "U"],
  ["D", "U", "D"],
  ["R", "U", "D"],
];

let visited = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

const moves = {
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
};

function solve(row, col, dir, visited) {
  if (row === dir.length - 1 && col === dir.length - 1) {
    return true;
  }
  const move = moves[dir[row][col]];
  const rowC = row + move[0];
  const colC = col + move[1];
  if (
    rowC < 0 ||
    rowC >= dir.length ||
    colC < 0 ||
    colC >= dir.length ||
    visited[rowC][colC]
  )
    return false;
  visited[rowC][colC] = true;
  return solve(rowC, colC, dir, JSON.parse(JSON.stringify(visited)));
}

console.log(solve(0, 0, dir, visited));
