const encoded = "2A2[AB2[C]2D]";

function decode(str) {
  let countStack = [];
  let strStack = [];
  let output = "";
  let currWord = "";
  let currCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(str.charAt(i))) {
      count = Number.parseInt(str.charAt(i));
    } else if (str.charAt(i) === "[") {
    }
  }
}
