// P5.js doesn't work locally unless you run with a server.
// Open your project in Terminal Type python -m SimpleHTTPServer 8000 You’ll then be able to access your site at localhost:8000 in your browser.

// let font;

// function preload() {
//   font = loadFont("assets/inter-var.woff2");
// }

let graphic;

function setup() {
  createCanvas(500, 500);
  graphic = createGraphics(500, 500);

  graphic.textSize(400);
  graphic.fill(255);
  graphic.textAlign(CENTER, CENTER);
  graphic.text("P5", width / 2, height / 2);
}

function draw() {
  background(0);

  let value = sin(frameCount * 0.025) * 250;

  // first four values are original place, last four are destination
  copy(graphic, 0, 0, 500, 500, 0, 0, 250 + value, 500);
  copy(graphic, 0, 0, 500, 500, 250 + value, 0, 250 - value, 500);
}
