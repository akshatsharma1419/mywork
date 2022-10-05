// Parameterised
//Find sum 1 to n

// Printing the value
function findSum(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  findSum(i - 1, sum + i);
}

findSum(5, 0);

// Returning the value using parameter
function findSum2(i, sum) {
  if (i < 1) return sum;
  return findSum2(i - 1, sum + i);
}

console.log(findSum2(5, 0));

// Functional- Returning computed value

function findSum3(i) {
  if (i === 0) return 0;
  return i + findSum3(i - 1);
}

console.log(findSum3(5, 0));

// Factorial of n

function factorial(i) {
  if (i === 0 || i === 1) return i;
  return i * factorial(i - 1);
}

console.log(factorial(5));
