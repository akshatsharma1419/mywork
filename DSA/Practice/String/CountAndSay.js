function say(n) {
  const ans = [1, 11];
  for (let i = 1; i < n; i++) {
    let j = 0;
    let curr = new String(ans[i]);
    let prev = curr.charAt(j);
    let count = 0;
    let str = "";
    while (j < curr.length) {
      if (curr.charAt(j) === prev) {
        j++;
        count++;
      } else {
        str += count + prev;
        prev = curr.charAt(j);
        count = 0;
      }
    }
    str += count + prev;
    ans.push(Number.parseInt(str));
  }
  console.log(ans[n - 1]);
}

say(5);
