// Fixed triangle minimum path sum

const triangle = [[1], [2, 3], [7, 1, 6], [9, 8, 9, 10]];

function minPath(row, col, triangle) {
  if (row === triangle.length - 1) {
    return triangle[row][col];
  }
  if (col >= triangle[row].length) return 0;
  let down = minPath(row + 1, col, triangle);
  let right = minPath(row + 1, col + 1, triangle);
  return triangle[row][col] + Math.min(down, right);
}

console.log(minPath(0, 0, triangle));
