const container = document.querySelector("section");

const params = {
  width: 500,
  height: 500,
};

const two = new Two(params);
two.appendTo(container);

// config for our animation
const numberOfShapes = 50;
const shapes = [];
const startWidth = 50;
const endWidth = 500;
const diffWidth = endWidth - startWidth;
const startRotation = 0;
// to get 6 degrees
const endRotation = (fullRotation * 6) / 360;
const loopDuration = 12 * 60;
const aniDelay = 0.001;

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const x = 250;
  let y = i * 20 + 5;

  if (i >= 25) {
    y -= 490;
  }

  const shape = two.makeRectangle(x, y, startWidth, 10);
  shape.noStroke();
  shape.fill = "#5645d3";

  if (i >= 25) {
    shape.fill = "#99e6e0";
  }

  shapes.push(shape);
}

two.bind("update", function (frameCount) {
  const currentFrame = frameCount % loopDuration;
  const t = currentFrame / loopDuration;

  shapes.forEach((shape, i) => {
    let r = startRotation;
    let w = startWidth;
    let aniStart = aniDelay * i;
    let aniEnd = aniDelay * (numberOfShapes - i);

    if (i >= 25) {
      aniStart = aniDelay * (numberOfShapes - i);
      aniEnd = aniDelay * i;
    }

    if (t < 0.25) {
      // sequence number 1; width grows
      const u = mapAndClamp(t, 0 + aniStart, 0.25 - aniEnd, 0, 1);
      const cu = easeInOutCubic(u);
      w = mapAndClamp(cu, 0, 1, startWidth, endWidth);
      r = startRotation;
    } else if (t < 0.5) {
      // sequence number 2: rotate rectangles
      const u = mapAndClamp(t, 0.25 + aniStart, 0.5 - aniEnd, 0, 1);
      const cu = easeInOutCubic(u);
      w = endWidth;
      r = mapAndClamp(cu, 0, 1, startRotation, endRotation);
    } else if (t < 0.75) {
      // sequence number 3: width shrinks
      const u = mapAndClamp(t, 0.5 + aniStart, 0.75 - aniEnd, 0, 1);
      const cu = easeInOutCubic(u);
      w = mapAndClamp(cu, 0, 1, endWidth, startWidth);
      r = endRotation;
    } else {
      // sequence number 4: rotate back
      const u = mapAndClamp(t, 0.75 + aniStart, 1 - aniEnd, 0, 1);
      const cu = easeInOutCubic(u);
      w = startWidth;
      r = mapAndClamp(cu, 0, 1, endRotation, startRotation);
    }

    shape.width = w;
    shape.rotation = r;

    // inverse green shapes rotation
    if (i >= 25) {
      shape.rotation = r * -1;
    }
  });
});

two.play();
