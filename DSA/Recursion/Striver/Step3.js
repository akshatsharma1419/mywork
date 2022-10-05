//Backtracking is used here

function printNTo1(i, n) {
  if (i > n) return;
  printNTo1(i + 1, n);
  console.log(i);
}

printNTo1(1, 10);
