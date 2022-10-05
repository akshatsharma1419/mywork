// Rat in Maze

// D L R U

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

function solve(row, col, maze, dir, visited) {
  if (row === maze.length - 1 && col === maze.length - 1) {
    console.log(dir);
    return;
  }
  if (row + 1 < maze.length && !visited[row][col] && maze[row + 1][col] === 1) {
    visited[row][col] = true;
    solve(row + 1, col, maze, dir + "D", JSON.parse(JSON.stringify(visited)));
    visited[row][col] = false;
  }
  if (col > 0 && !visited[row][col] && maze[row][col - 1] === 1) {
    visited[row][col] = true;
    solve(row, col - 1, maze, dir + "L", JSON.parse(JSON.stringify(visited)));
    visited[row][col] = false;
  }
  if (col + 1 < maze.length && !visited[row][col] && maze[row][col + 1] === 1) {
    visited[row][col] = true;
    solve(row, col + 1, maze, dir + "R", JSON.parse(JSON.stringify(visited)));
    visited[row][col] = false;
  }
  if (row > 0 && !visited[row][col] && maze[row - 1][col] === 1) {
    visited[row][col] = true;
    solve(row - 1, col, maze, dir + "U", JSON.parse(JSON.stringify(visited)));
    visited[row][col] = false;
  }
}

// solve(0, 0, maze, "", JSON.parse(JSON.stringify(visited)));

// Approach 2

let directions = "DLRU";
const moveX = [1, 0, 0, -1];
const moveY = [0, -1, 1, 0];

function ratInMaze(row, col, maze, dir, visited) {
  if (row >= maze.length - 1 && col >= maze.length - 1) {
    console.log(dir);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let newRow = row + moveX[i];
    let newCol = col + moveY[i];
    if (
      newRow >= 0 &&
      newCol >= 0 &&
      newCol < maze.length &&
      newRow < maze.length &&
      !visited[newRow][newCol] &&
      maze[newRow][newCol] === 1
    ) {
      visited[newRow][newCol] = true;
      ratInMaze(
        newRow,
        newCol,
        maze,
        dir + directions.charAt(i),
        JSON.parse(JSON.stringify(visited))
      );
      visited[newRow][newCol] = false;
    }
  }
}

ratInMaze(0, 0, maze, "", visited);
