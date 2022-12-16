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
  background("#0f0fb9");
  fill("white");
  noStroke();

  points.forEach((point) => {
    const distortion = createVector(5, 5);

    circle(point.x + distortion.x, point.y + distortion.y, 2);
  });

  noFill();
  stroke("white");
  strokeWeight(0.3);

  beginShape();
  points.forEach((point) => {
    vertex(point.x, point.y);
  });
  endShape();
}
