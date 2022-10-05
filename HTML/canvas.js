// Inside html
// <canvas id="canvas" width="" height-""></canvas>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// To give color
ctx.fillStyle = "yellow";

// To create rectange
//  x, y, width, height
ctx.fillRect(20, 20, 100, 100);

//
ctx.strokeRect(100, 100, 200, 200);

// To clear
ctx.clearRect();

// fillText()
// Text, x, y
ctx.fillText("Hello", 100, 200);
ctx.font = "30px Arial";

// strokeText()
ctx.strokeText("Hello", 400, 500);

// Paths
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 50); // Horizontal line
ctx.lineTo(100, 200);
ctx.fillStyle = "red";
ctx.fill(); // Has to be a closed path to fill
ctx.closePath();

// arc/circles
ctx.beginPath();
// x, y, radiux, start, endAngle, direction(false/true)
ctx.arc(100, 10, 40, 0, Math.PI * 2);
ctx.stroke();

// Animation
// We can do this using requestAnimationFrame

const circle = {
  x: 0,
  y: 0,
  size: 50,
  dx: 5,
  dy: 5,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle("red");
  ctx.fill();
}

function update() {
  // Clearing canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  // Change position
  circle.x += circle.dx;
  requestAnimationFrame(update);
}

update();
