let addBlob;

function setup() {
  createCanvas(windowWidth, windowHeight);
  addBlob = new blob();
}

function draw() {
  background("#7446df");
  addBlob.draw();
}
