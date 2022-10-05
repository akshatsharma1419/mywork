const versions = ["G", "G", "G", "G", "B", "B", "B"];

function findFirst(versions) {
  let low = 0;
  let high = versions.length - 1;
  while (low <= high) {
    let mid = (high + low) / 2;
    if (versions[mid] === "G") {
      low = mid + 1;
    } else if (versions[mid] === "B") {
      high = mid - 1;
    }
  }
  console.log(low);
}

findFirst(versions);

// Single element

const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];

function single(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (mid > 0 && (arr[mid - 1] != arr[mid] || arr[mid + 1] != arr[mid])) {
      console.log(mid);
      return;
    } else if (mid % 2 == 0) {
    }
  }
}
