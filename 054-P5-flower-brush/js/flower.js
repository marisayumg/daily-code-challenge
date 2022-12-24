class Flower {
  constructor(x, y, hue, size) {
    // flower setup
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.midSize = size;
    this.numOfPetals = 20;
  }

  draw() {
    // what do we need to draw a flower
    colorMode(HSB, 100);
    noStroke();
    fill(this.hue, 40, 100);
    circle(this.x, this.y, this.midSize);

    for (let num = 0; num < this.numOfPetals; num++) {
      // equation to get the position within a circle
      // 2Pi times the position it's in divided by the total number
      let angle = (TWO_PI * num) / this.numOfPetals;
      let positionX = 50 * cos(angle);
      let positionY = 50 * sin(angle);

      circle(this.x + positionX, this.y + positionY, 10);
    }
  }
}
