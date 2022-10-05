const matrix = [
  ["A", "B", "C", "D"],
  ["R", "U", "N", "F"],
  ["G", "U", "F", "G"],
  ["A", "Q", "B", "W"],
];

function wordSearch(matrix, str) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === str.charAt(0) && dfs(i, j, str, 0, matrix))
        return true;
    }
  }
  return false;
}

function dfs(i, j, str, len, matrix) {
  if (len === str.length) return true;
  if (
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[0].length ||
    matrix[i][j] != str.charAt(len)
  )
    return false;

  let temp = matrix[i][j];
  matrix[i][j] = "";
  let found =
    dfs(i - 1, j, str, len + 1, matrix) ||
    dfs(i + 1, j, str, len + 1, matrix) ||
    dfs(i, j - 1, str, len + 1, matrix) ||
    dfs(i, j + 1, str, len + 1, matrix);

  matrix[i][j] = temp;
  return found;
}

console.log(wordSearch(matrix, "UUFNABDC"));
