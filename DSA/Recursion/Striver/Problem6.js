// 9 matrix. Fill 1-9

const matrix = [
  [7, "", 9],
  ["", 1, 8],
  [3, 5, ""],
];

function fillMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "") {
        for (let k = 1; k < 10; k++) {
          if (isSafe(k, i, j, matrix)) {
            matrix[i][j] = k;
            if (fillMatrix(matrix) === true) return true;
            else matrix[i][j] = "";
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isSafe(i, j, k, matrix) {
  let jCopy = j;
  let kCopy = k;
  while (jCopy - 1 >= 0) {
    if (matrix[jCopy - 1][kCopy] === i) return false;
    jCopy--;
  }
  jCopy = j;
  while (jCopy + 1 < matrix.length) {
    if (matrix[jCopy + 1][kCopy] === i) return false;
    jCopy++;
  }
  jCopy = j;
  while (kCopy - 1 >= 0) {
    if (matrix[jCopy][kCopy - 1] === i) return false;
    kCopy--;
  }
  kCopy = k;
  while (kCopy + 1 < matrix.length) {
    if (matrix[jCopy][kCopy + 1] === i) return false;
    kCopy++;
  }
  return true;
}

fillMatrix(matrix);
console.log(matrix);
