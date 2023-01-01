let words;
let position;

function setup() {
  createCanvas(windowWidth, windowHeight);
  words = [];
  position = createVector(100, windowHeight / 2);
}

function draw() {
  background("black");

  words.forEach((word) => {
    word.draw();
  });
}

function mouseDragged() {
  let w = new Word(mouseX, mouseY, "marisa");
  words.push(w);
}

function keyTyped() {
  let o = new Word(position.x, position.y, key);
  words.push(o);
  position.x = position.x + 50;
  if (position.x > windowWidth - 100) {
    position.x = 100;
  }
}
