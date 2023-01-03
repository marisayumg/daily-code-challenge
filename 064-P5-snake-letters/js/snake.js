class Snake {
  constructor(maxLength) {
    this.points = [];
    this.maxLength = maxLength;
    this.time = 0;
  }

  push(point) {
    this.points.push(point);
    // return the last 50 points using slice() method with a negative number
    this.points = this.points.slice(-1 * this.maxLength);
  }

  draw() {
    noFill();
    stroke("blue");
    strokeWeight(4);
    beginShape();
    this.points.forEach((point) => {
      let n = noise(point.x, point.y, this.time) * 50 - 25;
      curveVertex(point.x + n, point.y + n);
    });
    endShape();

    this.time = this.time + 0.01;
  }
}
