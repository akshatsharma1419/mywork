// Ninja Training

function ninjaTraining(day, prev, matrix) {
  if (day === 0) {
    let max = 0;
    for (let i = 0; i < matrix[0].length; i++) {
      if (i != prev) {
        max = Math.max(max, matrix[0][i]);
      }
    }
    return max;
  }
  let max = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    if (i != prev) {
      let points = matrix[day][i] + ninjaTraining(day - 1, i, matrix);
      max = Math.max(points, max);
    }
  }
  return max;
}

const matrix = [
  [2, 1, 3],
  [3, 4, 6],
  [10, 1, 6],
  [8, 3, 7],
];
console.log(ninjaTraining(matrix.length - 1, -1, matrix));
