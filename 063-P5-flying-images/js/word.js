let easeInCubic = function (t) {
  return t * t * t * t;
};
class Word {
  constructor(x, y, image) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI);

    this.position = createVector(x, y);
    this.speed = createVector(0, -10);
    this.speed = this.speed.rotate(randomAngle);
    this.image = image;
    this.acc = createVector(0, 0.5);
    this.friction = 0.99;
    this.elastic = 0.5;
  }

  move() {
    this.speed = this.speed.add(this.acc);
    this.speed = this.speed.mult(this.friction);
    this.position = this.position.add(this.speed);

    if (this.position.y > windowHeight) {
      this.speed.y = this.speed.y * -1 * this.elastic;
    }

    this.position.y = constrain(this.position.y, -1000, windowHeight);
  }

  draw() {
    this.move();
    let alpha = 255 - 255 * easeInCubic(this.time);
    // circle(this.position.x, this.position.y, this.size);
    image(this.image, this.position.x, this.position.y - this.image.height);
  }
}
