let line;
let lastPoint;
let letters;
let images;
let imagesNum;

function preload() {
  images = [
    loadImage("assets/image-1.jpg"),
    loadImage("assets/image-2.jpg"),
    loadImage("assets/image-3.jpg"),
    loadImage("assets/image-4.jpg"),
    loadImage("assets/image-5.jpg"),
    loadImage("assets/image-6.jpg"),
    loadImage("assets/image-7.jpg"),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  letters = [];
  // .split("") splits each letter. Could use "i" instead to split at every "i" character e.g
  imagesNum = 0;
  line = new Snake(images.length);
}

function draw() {
  background("black");

  letters.forEach((letter) => {
    letter.draw();
  });

  line.draw();
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

  if (distance > 100) {
    line.push(currentPoint);

    letters.push(new Letter(images[imagesNum], currentPoint, rotation));
    letters = letters.slice(-1 * images.length);

    lastPoint = currentPoint;
    imagesNum++;
    if (imagesNum > images.length - 1) {
      imagesNum = 0;
    }
  }
}
