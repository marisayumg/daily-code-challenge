let easeInCubic = function (t) {
  return t * t * t * t;
};
class Word {
  constructor(x, y, text) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI);

    this.position = createVector(x, y);
    this.speed = createVector(0, -10);
    this.speed = this.speed.rotate(randomAngle);
    this.text = text;
    this.acc = createVector(0, 0.5);
    this.friction = 0.99;
    this.elastic = 0.8;
    this.time = 0;
  }

  move() {
    this.speed = this.speed.add(this.acc);
    this.speed = this.speed.mult(this.friction);
    this.position = this.position.add(this.speed);

    if (this.position.y > windowHeight) {
      this.speed.y = this.speed.y * -1 * this.elastic;
    }

    this.position.y = constrain(this.position.y, -1000, windowHeight);
    this.time = this.time + 0.01;
  }

  draw() {
    this.move();
    let alpha = 255 - 255 * easeInCubic(this.time);
    // circle(this.position.x, this.position.y, this.size);
    textSize(128);
    textAlign(CENTER, BASELINE);
    fill(255, 255, 255, alpha);
    noStroke();
    text(this.text, this.position.x, this.position.y);
  }
}
