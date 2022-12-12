let graphic;

function setup() {
  // canvas specs
  createCanvas(600, 600);

  // create a new graphic to then stamp
  graphic = createGraphics(600, 600);

  // text specs
  graphic.fill(255);
  graphic.textSize(600);
  graphic.textAlign(CENTER, CENTER);
  // text creation
  graphic.text("o", 300, 300);
}

function draw() {
  background("#0f0fb9");
  const tileSize = 50;

  // loop to create 12 graphics
  // first loop is the x direction
  for (let x = 0; x < 12; x++) {
    // second loop is the y direction
    for (let y = 0; y < 12; y++) {
      // frameCount * 0.05 - slowing down the sin, which goes between 0 and 1, by 20 to make it slower
      // + x * 0.5 - adding a different sin start depending on the x position and times it by 0.5 to make it smoother
      // + y * 0.5 - adding a different sin start depending on the y position and times it by 0.5 to make it smoother
      const distortion = sin(frameCount * 0.05 + x * 0.3 + y * 0.3) * 50;
      // source
      const sx = x * tileSize + distortion;
      const sy = y * tileSize + distortion;
      const sw = tileSize;
      const sh = tileSize;

      // destination
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      // prettier-ignore
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
