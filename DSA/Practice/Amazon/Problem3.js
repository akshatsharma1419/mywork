// Robot return to zero

function checkMoves(str) {
  let origin = [0, 0];
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "U":
        origin[1] = origin[1] - 1;
        break;
      case "D":
        origin[1] = origin[1] + 1;
        break;
      case "L":
        origin[0] = origin[0] - 1;
        break;
      case "R":
        origin[0] = origin[0] + 1;
        break;
    }
  }
  console.log(origin);
}

checkMoves("LRLU");
