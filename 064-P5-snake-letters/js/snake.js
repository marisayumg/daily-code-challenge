class Snake {
  constructor(maxLength) {
    this.points = [];
    this.maxLength = maxLength;
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
      vertex(point.x, point.y);
    });
    endShape();
  }
}
