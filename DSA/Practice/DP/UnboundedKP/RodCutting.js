// Here we are given rod of length 8, each length has associated profit
// Find maximum profit

let input = [1, 2, 3, 4, 5, 6, 7, 8];
let price = [1, 5, 8, 9, 10, 17, 17, 20];
let length = 8;

function maxProfit(n, input, price, length) {
  if (n == 0 || length == 0) return 0;
  if (length >= input[n - 1]) {
    return Math.max(
      price[n - 1] + maxProfit(n, input, price, length - input[n - 1]),
      maxProfit(n - 1, input, price, length)
    );
  } else {
    return maxProfit(n - 1, input, price, length);
  }
}

console.log(maxProfit(input.length, input, price, length));
