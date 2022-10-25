// drawing area setup
const container = document.querySelector("section");
const params = { width: 800, height: 800 };

// Two library setup with drawing area
const two = new Two(params);
two.appendTo(container);

// for being able to access shapes outside this loop
const allSquares = [];

// create multiple squares
const numberOfShapes = 12;
const plotRadius = 250;

for (let i = 0; i < numberOfShapes; i++) {
  // needed to find the angle at which each square will sit
  // const halfRotation = Math.PI;
  const fullRotation = Math.PI * 2;
  const angle = (fullRotation * i) / numberOfShapes;

  // set each square at a different x and y depending on position on circle
  const x = plotRadius * Math.cos(angle);
  const y = plotRadius * Math.sin(angle);
  const size = 90;

  // create a square
  const square = two.makeRectangle(x, y, 80, 200);
  square.fill = "#f9bc31";
  square.noStroke();
  square.rotation = angle;

  // add created squares into allSquares array
  allSquares.push(square);
}

// group all squares together
const groupSquares = two.makeGroup(allSquares);
// set group center
groupSquares.translation.set(400, 400);

// animations
two.bind("update", function () {
  // rotate the whole group
  groupSquares.rotation += 0.005;

  // rotate each square on itself
  allSquares.forEach((square) => {
    square.rotation += 0.025;
  });
});

// render Two
two.play();
