let radius = 80;
let position;
let speed;
let sound;
let circleColour;
let backgroundColour;

function preload() {
  sound = loadSound("../assets/drop.mp3");
  sound.setVolume(0.3);
}

// runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(100, 50);
  speed = createVector(10, 10);
  circleColour = "white";
  backgroundColour = "#00000066";
}

// runs every frame
function draw() {
  // last two numbers are the alpha channel that creates the drag effect
  background(backgroundColour);
  fill(circleColour);
  noStroke();
  circle(position.x, position.y, radius * 2);

  // position.x = position.x + speed.x;
  // position.y = position.y + speed.y;
  // the above is refactored like this:
  position.add(speed);
  // increase speed over time
  // speed.mult(1.001);

  if (position.x < radius || position.x > windowWidth - radius) {
    // reverse the speed
    speed.x = speed.x * -1;
    sound.play();
  }

  if (position.y < radius || position.y > windowHeight - radius) {
    // reverse the speed
    speed.y = speed.y * -1;
    sound.play();
  }

  // constrain the ball to the viewport on window resize
  position.x = constrain(position.x, radius, windowWidth - radius);
  position.y = constrain(position.y, radius, windowHeight - radius);
}

// the canvas is drawn once even if you resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  let angle = random(TWO_PI);
  speed.rotate(angle);

  // alternate black and white colours
  if (backgroundColour === "#ffffff66") {
    backgroundColour = "#00000066";
  } else {
    backgroundColour = "#ffffff66";
  }

  if (circleColour === "white") {
    circleColour = "black";
  } else {
    circleColour = "white";
  }
}
