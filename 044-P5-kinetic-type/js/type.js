let font;
let graphic;

const waveInput = document.querySelector("input#wave");
const dxInput = document.querySelector("input#dx");
const dyInput = document.querySelector("input#dy");

function preload() {
  font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup() {
  createCanvas(1200, 800);

  graphic = createGraphics(1200, 800);

  graphic.textFont(font);
  graphic.textAlign(CENTER, CENTER);
  graphic.textSize(320);
  graphic.textLeading(280);
  graphic.fill(255);
  graphic.text("Hey\nthere", 600, 350);
}

function draw() {
  background("#0f0fb9");
  const tileSize = 10;
  // tiles
  for (let x = 0; x < 120; x++) {
    for (let y = 0; y < 80; y++) {
      const wave = waveInput.value;

      const distortionX =
        sin(frameCount * wave + x * 0.5 + y * 0.3) * dxInput.value;
      const distortionY =
        sin(frameCount * wave + x * 0.5 + y * 1) * dyInput.value;
      // start position
      const sx = x * tileSize + distortionX;
      const sy = y * tileSize + distortionY;
      const sw = tileSize;
      const sh = tileSize;

      // destination
      const dx = tileSize * x;
      const dy = tileSize * y;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
