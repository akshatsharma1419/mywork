// Single Number- A number just appear once rest are duplicates

function single(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) set.delete(arr[i]);
    else {
      set.add(arr[i]);
    }
  }
  console.log([...set][0]);
}

single([1, 2, 1, 4, 2]);
