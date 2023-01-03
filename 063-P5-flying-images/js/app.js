let words;
let position;
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
  words = [];
  imagesNum = 0;
  position = createVector(100, windowHeight / 2);
}

function draw() {
  background("black");

  words.forEach((word) => {
    word.draw();
  });
}

function mouseClicked() {
  let image = images[imagesNum];
  let w = new Word(mouseX, mouseY, image);
  words.push(w);
  imagesNum++;
  if (imagesNum > images.length - 1) {
    imagesNum = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
