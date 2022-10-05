// Finbonacci number

function normal(n) {
  if (n == 0 || n == 1) return n;
  return normal(n - 1) + normal(n - 2);
}
console.log(normal(5));

function memoize(n, memo) {
  if (n <= 1) return n;
  if (memo[n] != -1) return memo[n];
  return (memo[n] = memoize(n - 1, memo) + memoize(n - 2, memo));
}
const memo = new Array(5 + 1).fill(-1);
console.log(memoize(5, memo));

function dp(n) {
  let d = new Array(n + 1).fill(0);
  d[0] = 0;
  d[1] = 1;
  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  console.log(d[n]);
}
dp(5);
