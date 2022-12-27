class blob {
  constructor() {
    // setup the blob here
    this.numOfPoints = 500;
    this.time = 0;
  }

  wave(num, amp, freq, speed) {
    return (
      amp * sin((freq * (TWO_PI * num)) / this.numOfPoints + this.time * speed)
    );
  }

  draw() {
    // draw the blob here
    noStroke();
    fill("white");
    beginShape();
    for (let num = 0; num < this.numOfPoints; num++) {
      let angle = (TWO_PI * num) / this.numOfPoints;
      let radius =
        250 +
        this.wave(num, 20, 4, 5) +
        this.wave(num, 10, 5, 2) +
        this.wave(num, -10, 2, 3) +
        this.wave(num, 10, 6, -1);

      let x = windowWidth / 2 + radius * cos(angle);
      let y = windowHeight / 2 + radius * sin(angle);
      vertex(x, y);
    }

    endShape();

    this.time = this.time + 0.02;
  }
}
