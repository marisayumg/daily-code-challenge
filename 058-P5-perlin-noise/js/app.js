let time;
let noiseLevel;
let totalX;
let totalY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  time = 0;
  noiseLevel = 0.005;
  totalX = windowWidth;
  totalY = windowHeight;

  colorMode(HSL, 100);

  for (let x = 0; x < totalX; x++) {
    for (let y = 0; y < totalY; y++) {
      // let number = random();
      // let number = noise(time * noiseLevel);
      let number = noise(x * noiseLevel, y * noiseLevel);

      let finalColor = color(number * 100, 100, 50);

      set(x, y, finalColor);
    }
  }

  updatePixels();
}

function draw() {}

function mouseDragged() {
  let size = number * 50;

  noStroke();
  fill(finalColor);
  circle(mouseX, mouseY, size);

  time = time + 1;
}
