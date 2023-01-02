let words;
let position;
let sentences;
let sentencesNum;

function setup() {
  createCanvas(windowWidth, windowHeight);
  words = [];
  sentences = [
    "Marisa",
    "Oosthuizen",
    "is",
    "a",
    "digital",
    "designer",
    "and",
    "coding",
    "enthusiast",
  ];
  sentencesNum = 0;
  position = createVector(100, windowHeight / 2);
}

function draw() {
  background("black");

  words.forEach((word) => {
    word.draw();
  });
}

function mouseClicked() {
  let sentence = sentences[sentencesNum];
  let w = new Word(mouseX, mouseY, sentence);
  words.push(w);
  sentencesNum++;
  if (sentencesNum > sentences.length - 1) {
    sentencesNum = 0;
  }
}

function keyTyped() {
  let o = new Word(position.x, position.y, key);
  words.push(o);
  position.x = position.x + 50;
  if (position.x > windowWidth - 100) {
    position.x = 100;
  }
}
