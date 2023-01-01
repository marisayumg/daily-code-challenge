let words;

function setup() {
  createCanvas(windowWidth, windowHeight);
  words = [];
}

function draw() {
  background("black");

  words.forEach((word) => {
    word.draw();
  });
}

function mouseDragged() {
  let w = new Word(mouseX, mouseY, 50);
  words.push(w);
}
