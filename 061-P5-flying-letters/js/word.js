class Word {
  constructor(x, y, size) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI);

    this.position = createVector(x, y);
    this.speed = createVector(0, -5);
    this.speed = this.speed.rotate(randomAngle);
    this.size = size;
  }

  move() {
    this.position = this.position.add(this.speed);
    this.size = constrain(this.size - 1, 0, 50);
    this.speed = this.speed.rotate(PI * 0.01);
  }

  draw() {
    this.move();
    circle(this.position.x, this.position.y, this.size);
  }
}
