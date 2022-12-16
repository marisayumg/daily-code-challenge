let font;
let points;

function preload() {
  font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup() {
  createCanvas(1200, 600);
  points = font.textToPoints("Hey there", 150, 330, 200, {
    sampleFactor: 0.1,
    simplifyThreshold: 0,
  });
}

function draw() {
  const noiseLevel = 0.01;
  background("#0f0fb9");
  fill("white");
  noStroke();

  points.forEach((point) => {
    const distance = createVector(point.x - mouseX, point.y - mouseY);
    const distortion = distance.mult(60 / distance.mag());

    circle(point.x + distortion.x, point.y + distortion.y, 2);
  });

  noFill();
  stroke("white");
  strokeWeight(0.3);

  beginShape();
  points.forEach((point) => {
    const distance = createVector(point.x - mouseX, point.y - mouseY);
    const distortion = distance.mult(60 / distance.mag());

    const noiseX =
      40 *
        noise(
          noiseLevel * point.x,
          noiseLevel * point.y,
          noiseLevel * frameCount
        ) -
      20;
    const noiseY =
      40 *
        noise(
          noiseLevel * point.x,
          noiseLevel * point.y,
          noiseLevel * frameCount
        ) -
      20;

    vertex(point.x + distortion.x + noiseX, point.y + distortion.y + noiseY);
  });
  endShape();
}
