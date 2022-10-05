const maze = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];

const dirX = [1, 0, 0, -1];
const dirY = [0, -1, 1, 0];
const dir = "DLRU";

function ratInMaze(row, col, currentDir, output) {
  if (row == maze.length - 1 && col == maze[0].length - 1) {
    output.push(currentDir);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let dX = row + dirX[i];
    let dY = col + dirY[i];
    if (
      dX >= 0 &&
      dX < maze.length &&
      dY >= 0 &&
      dY < maze[0].length &&
      maze[dX][dY] !== 0
    ) {
      maze[dirX - 1][dirY - 1] = 0;
      ratInMaze(dirX - 1, dirY - 1, currentDir + dir[i], output);
      maze[dirX - 1][dirY - 1] = 1;
    }
  }
}

const output = [];
const rat = ratInMaze(0, 0, 4, output);
console.log(ratInMaze);
