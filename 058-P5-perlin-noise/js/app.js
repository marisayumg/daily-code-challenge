let time;
let noiseLevel;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  time = 0;
  noiseLevel = 0.01;
}

function draw() {}

function mouseDragged() {
  // let number = random();
  // let number = noise(time * noiseLevel);
  let number = noise(mouseX * noiseLevel, mouseY * noiseLevel);
  let size = number * 50;
  let colour1 = color("white");
  let colour2 = color("#2727e6");
  let colourMix = lerpColor(colour1, colour2, number);

  noStroke();
  fill(colourMix);
  circle(mouseX, mouseY, size);

  time = time + 1;
}
