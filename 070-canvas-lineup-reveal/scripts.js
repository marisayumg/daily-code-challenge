const cursorTag = document.querySelector("div.cursor");
const canvasIn = document.querySelector("canvas.in");
const canvasOut = document.querySelector("canvas.out");
const bodyTag = document.querySelector("body");

let isMouseDown = false;

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
  const h = bodyTag.offsetHeight;
  const dpi = window.devicePixelRatio;
  canvas.width = w * dpi;
  canvas.height = h * dpi;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";

  const context = canvas.getContext("2d");
  context.scale(dpi, dpi);

  if (canvas.classList.contains("in")) {
    context.fillStyle = "#000";
    context.strokeStyle = "#fff";
  } else {
    context.fillStyle = "#fff";
    context.strokeStyle = "#000";
  }

  context.lineWidth = 80;
  context.lineCap = "round";
  context.lineJoin = "round";

  context.rect(0, 0, w, h);
  context.fill();
};

const startDraw = function (canvas, x, y) {
  const context = canvas.getContext("2d");

  context.moveTo(x, y);
  context.beginPath();
};

const moveDraw = function (canvas, x, y) {
  const context = canvas.getContext("2d");
  if (isMouseDown) {
    context.lineTo(x, y);
    context.stroke();
  }
};

setupCanvas(canvasIn);
setupCanvas(canvasOut);

document.addEventListener("mousedown", function (event) {
  isMouseDown = true;
  growCursor();
  startDraw(canvasIn, event.pageX, event.pageY);
  startDraw(canvasOut, event.pageX, event.pageY);
});

document.addEventListener("mouseup", function () {
  isMouseDown = false;
  shrinkCursor();
});

document.addEventListener("mousemove", function (event) {
  moveCursor(event.pageX, event.pageY);
  moveDraw(canvasIn, event.pageX, event.pageY);
  moveDraw(canvasOut, event.pageX, event.pageY);
});

window.addEventListener("resize", function () {
  setupCanvas(canvasIn);
  setupCanvas(canvasOut);
});
