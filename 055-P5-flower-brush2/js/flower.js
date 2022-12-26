class Flower {
  constructor(x, y, hue, size) {
    // flower setup
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.midSize = size;
    this.petalDist = size / 2 + random(0, 5);
    this.numOfPetals = random(10, 40);
    this.rotation = 0;
    this.rotationSpeed = random(-0.01, 0.01);
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
      let angle = (TWO_PI * num) / this.numOfPetals + this.rotation;
      // let positionX = 50 * cos(angle);
      // let positionY = 50 * sin(angle);
      let branch = createVector(this.petalDist, 0);
      branch.rotate(angle);

      circle(this.x + branch.x, this.y + branch.y, 10);
    }

    this.rotation = this.rotation + this.rotationSpeed;
  }
}
