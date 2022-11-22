const container = document.querySelector("section");

const params = {
  width: 800,
  height: 800,
};

const two = new Two(params);
two.appendTo(container);

// config for our animation
const numberOfShapes = 40;
const shapes = [];
const loopDuration = 60 * 6;
const aniDelay = 0.0025;

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const size = 20;
  const x = size * i;
  const y = 400;
  const sr = 0;
  const ex = randomNumber(200, 600);
  const ey = randomNumber(200, 600);
  const er = randomNumber(-2 * fullRotation, 2 * fullRotation);

  const shape = two.makeRectangle(x, y, size, size);
  shape.fill = "#004F73";
  shape.noStroke();
  shape.data = {
    sx: x,
    sy: y,
    ex: ex,
    ey: ey,
    sr: sr,
    er: er,
  };

  shapes.push(shape);
}

two.bind("update", function (frameCount) {
  const currentFrame = frameCount % loopDuration;
  const t = currentFrame / loopDuration;

  shapes.forEach((shape, i) => {
    if (currentFrame === 0) {
      shape.data.ex = randomNumber(200, 600);
      shape.data.ey = randomNumber(200, 600);
      shape.data.er = randomNumber(-2 * fullRotation, 2 * fullRotation);
    }

    const aniStart = aniDelay * (numberOfShapes - i);
    const aniEnd = aniDelay * i;

    // unique timeline
    let u = 0;

    if (t < 0.5) {
      u = mapAndClamp(t, aniStart, 0.5 - aniEnd, 0, 1);
    } else {
      u = mapAndClamp(t, 0.5 + aniStart, 1 - aniEnd, 1, 0);
    }

    const cu = easeInOutCubic(u);

    const x = mapAndClamp(cu, 0, 1, shape.data.sx, shape.data.ex);
    const y = mapAndClamp(cu, 0, 1, shape.data.sy, shape.data.ey);
    const r = mapAndClamp(cu, 0, 1, shape.data.sr, shape.data.er);
    shape.translation.x = x;
    shape.translation.y = y;
    shape.rotation = r;
  });
});

let currentColor = 0;
const bgColors = ["#45d3c5", "#ffe8b4", "#f9d2cd", "#bcdffd"];
const shapeColors = ["#004F73", "#f8bc30", "#f45745", "#5745d3"];

document.addEventListener("click", function () {
  currentColor += 1;
  currentColor = currentColor % bgColors.length;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = bgColors[currentColor];
  shapes.forEach((shape) => {
    shape.fill = shapeColors[currentColor];
  });
});

two.play();
