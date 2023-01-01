class Word {
  constructor(x, y, size) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI);

    this.position = createVector(x, y);
    this.speed = createVector(0, -10);
    this.speed = this.speed.rotate(randomAngle);
    this.size = size;
    this.acc = createVector(0, 0.5);
    this.friction = 0.99;
    this.elastic = 0.8;
  }

  move() {
    this.speed = this.speed.add(this.acc);
    this.speed = this.speed.mult(this.friction);
    this.position = this.position.add(this.speed);

    if (this.position.y > windowHeight - 25) {
      this.speed.y = this.speed.y * -1 * this.elastic;
    }

    this.position.y = constrain(this.position.y, -1000, windowHeight - 25);
  }

  draw() {
    this.move();
    circle(this.position.x, this.position.y, this.size);
  }
}
