// runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// runs every frame
function draw() {
  // last two numbers are the alpha channel that creates the drag effect
  background("#00000011");
  fill("white");
  noStroke();
  circle(mouseX, mouseY, 300);
}
