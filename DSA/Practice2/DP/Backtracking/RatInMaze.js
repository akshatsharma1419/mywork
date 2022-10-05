const matrix = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const dir = "DLRU";
const dirX = [1, 0, 0, -1];
const dirY = [0, -1, 1, 0];

function solve(row, col, matrix, output, currDir, visited) {
  if (row === matrix.length - 1 && col === matrix[0].length - 1) {
    output.push(currDir);
    return;
  }
  for (let i = 0; i < dir.length; i++) {
    let dX = row + dirX[i];
    let dY = col + dirY[i];
    if (
      dX >= 0 &&
      dY >= 0 &&
      dX < matrix.length &&
      dY < matrix[0].length &&
      visited[dX][dY] === 0 &&
      matrix[dX][dY] === 1
    ) {
      visited[dX][dY] = 1;
      solve(dX, dY, matrix, output, currDir + dir.charAt(i), visited);
      visited[dX][dY] = 0;
    }
  }
}

const visited = new Array(matrix.length);
for (let i = 0; i < matrix.length; i++) {
  let temp = [];
  for (let j = 0; j < matrix[0].length; j++) temp[j] = 0;
  visited[i] = temp;
}
visited[0][0] = 1;
const output = [];
solve(0, 0, matrix, output, "", visited);
console.log(output);
