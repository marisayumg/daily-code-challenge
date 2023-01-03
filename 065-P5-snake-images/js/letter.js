class Letter {
  constructor(image, position, rotation) {
    this.image = image;
    this.position = position;
    this.rotation = rotation;
  }

  draw() {
    // text
    stroke("white");
    strokeWeight(2);
    fill("white");
    textSize(64);
    textAlign(CENTER, CENTER);

    // position it then rotate
    push();
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    imageMode(CENTER);
    image(this.image, 0, 0, this.image.width / 2, this.image.height / 2);
    pop();
  }
}
