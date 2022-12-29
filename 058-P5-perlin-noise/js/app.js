let noiseLevel;
let totalX;
let totalY;
let density;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  noiseLevel = 0.001;
  totalX = windowWidth;
  totalY = windowHeight;
  density = 10;

  // colorMode(HSL, 100);
  let color1 = color("#2727e6");
  let color2 = color("#fff");

  for (let x = 0; x < totalX; x++) {
    for (let y = 0; y < totalY; y++) {
      // let number = random();
      // let number = noise(time * noiseLevel);
      let number = noise(x * noiseLevel, y * noiseLevel);
      let reducedNoise = number * density - Math.floor(number * density);

      let d = map(reducedNoise, 0, 0.5, 0, 1);
      if (reducedNoise > 0.5) {
        d = map(reducedNoise, 0.5, 1, 1, 0);
      }

      let finalColor = lerpColor(color2, color1, d);
      set(x, y, finalColor);
    }
  }

  updatePixels();
}
