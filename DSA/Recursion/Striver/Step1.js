function printFiveTimes(name, count) {
  if (count === 5) return;
  console.log(count, name);
  count++;
  printFiveTimes(name, count);
}

printFiveTimes("Akshat", 0);
