class Flower {
  constructor(x, y, hue, size) {
    // flower setup
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.midSize = size;
  }

  draw() {
    // what do we need to draw a flower
    colorMode(HSB, 100);
    noStroke();
    fill(this.hue, 40, 100);
    circle(this.x, this.y, this.midSize);
  }
}
