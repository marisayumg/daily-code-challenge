class Letter {
  constructor(text, position, rotation) {
    this.text = text;
    this.position = position;
    this.rotation = rotation;
  }

  draw() {
    // text
    noStroke();
    fill("white");
    textSize(64);
    textAlign(CENTER, CENTER);

    // position it then rotate
    push();
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    text(this.text, 0, 0);
    pop();
  }
}
