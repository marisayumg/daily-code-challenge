const container = document.querySelector("section");

const params = {
  width: 500,
  height: 500,
};

const two = new Two(params);
two.appendTo(container);

// config for our animation
const numberOfShapes = 40;
const shapeIncrement = 20;
const shapes = [];
// 60fps over 4 seconds
const loopDuration = 60 * 4;
const aniDelay = 1 / 120;

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const size = (numberOfShapes - i) * shapeIncrement;
  const shape = two.makeRectangle(250, 250, size, size);

  if (i % 2 === 0) {
    shape.fill = "#f9d2cd";
  } else {
    shape.fill = "#f55745";
  }

  shape.noStroke();

  shapes.push(shape);
}

two.bind("update", function (frameCount) {
  const currentFrame = frameCount % loopDuration;
  const t = currentFrame / loopDuration;

  shapes.forEach((shape, i) => {
    const aniStart = aniDelay * (numberOfShapes - i);
    const aniEnd = aniDelay * i;
    const u = mapAndClamp(t, aniStart, 1 - aniEnd, 0, 1);
    // if (i % 2 === 0) {
    shape.rotation = easeInOutCubic(u) * halfRotation;
    //}
  });
});

two.play();
