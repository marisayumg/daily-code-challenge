const container = document.querySelector("section");

const params = {
  width: 500,
  height: 500,
};

const two = new Two(params);
two.appendTo(container);

// config for our animation
const numberOfShapes = 25;
const shapes = [];

const shapeMin = 0;
const shapeMax = 500;
const shapeDiff = shapeMax - shapeMin;
const loopDuration = 4 * 60;

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const x = 250;
  const y = 20 * i + 5;

  const shape = two.makeRectangle(x, y, shapeMax, 10);
  shape.fill = "#5645d3";
  shape.noStroke();

  shapes.push(shape);
}

let timeline = 0.25;

two.bind("update", function (frameCount) {
  // const currentFrame = frameCount % loopDuration;
  // const timeline = currentFrame / loopDuration;

  shapes.forEach((shape, i) => {
    const aniStart = 0.01 * (numberOfShapes - i);
    const aniEnd = 0.01 * i;
    // const u = mapAndClamp(timeline, aniStart, 1 - aniEnd, 0, 1);

    let u = 0;

    if (timeline < 0.5) {
      u = mapAndClamp(timeline, aniStart, 0.5 - aniEnd, 0, 1);
    } else {
      u = mapAndClamp(timeline, 0.5 + aniStart, 1 - aniEnd, 1, 0);
    }

    shape.width = shapeMin + shapeDiff * easeInOutCubic(u);
  });
});

document.addEventListener("mousemove", function (event) {
  timeline = mapAndClamp(event.pageX, 0, window.innerWidth, 0, 1);
});

two.play();
