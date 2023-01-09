const cursorTag = document.querySelector("div.cursor");
const canvasTag = document.querySelector("canvas.in");

const growCursor = function () {
  cursorTag.classList.add("is-down");
};

const shrinkCursor = function () {
  cursorTag.classList.remove("is-down");
};

const moveCursor = function (x, y) {
  cursorTag.style.left = x + "px";
  cursorTag.style.top = y + "px";
};

const setupCanvas = function (canvas) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpi = window.devicePixelRatio;
  canvas.width = w * dpi;
  canvas.height = h * dpi;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
};

setupCanvas(canvasTag);

document.addEventListener("mousedown", function () {
  growCursor();
});

document.addEventListener("mouseup", function () {
  shrinkCursor();
});

document.addEventListener("mousemove", function (event) {
  moveCursor(event.pageX, event.pageY);
});
