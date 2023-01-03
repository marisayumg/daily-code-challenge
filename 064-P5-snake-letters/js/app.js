let line;
let lastPoint;
let letters;
let words;

function setup() {
  createCanvas(windowWidth, windowHeight);
  letters = [];
  // .split("") splits each letter. Could use "i" instead to split at every "i" character e.g
  words =
    "Marisa Oosthuizen is a digital designer and a coding enthusiast — ".split(
      ""
    );
  wordsNum = 0;
  line = new Snake(words.length);
}

function draw() {
  background("black");
  line.draw();

  letters.forEach((letter) => {
    letter.draw();
  });
}

function mouseMoved() {
  let currentPoint = createVector(mouseX, mouseY);
  let distance = 1000;
  if (lastPoint) {
    distance = p5.Vector.dist(lastPoint, currentPoint);
  }

  let rotation = 0;
  if (lastPoint) {
    let diffVector = currentPoint.copy().sub(lastPoint);
    rotation = diffVector.heading();
  }

  if (distance > 40) {
    line.push(currentPoint);

    letters.push(new Letter(words[wordsNum], currentPoint, rotation));
    letters = letters.slice(-1 * words.length);

    lastPoint = currentPoint;
    wordsNum++;
    if (wordsNum > words.length) {
      wordsNum = 0;
    }
  }
}
