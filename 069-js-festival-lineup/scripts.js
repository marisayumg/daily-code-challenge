const cursorTag = document.querySelector("div.cursor");
const canvasTag = document.querySelector("canvas.in");

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
  const h = window.innerHeight;
  const dpi = window.devicePixelRatio;
  canvas.width = w * dpi;
  canvas.height = h * dpi;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";

  const context = canvas.getContext("2d");
  context.scale(dpi, dpi);
  context.fillStyle = "blue";
  context.strokeStyle = "blue";
  context.lineWidth = 80;
  context.lineCap = "round";
  context.lineJoin = "round";
};

const startDraw = function (canvas, x, y) {
  const context = canvas.getContext("2d");
  const colors = ["blue", "red", "pink", "yellow", "orange"];
  const randomNum = Math.floor(Math.random() * colors.length);

  context.strokeStyle = colors[randomNum];

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

setupCanvas(canvasTag);

document.addEventListener("mousedown", function (event) {
  isMouseDown = true;
  growCursor();
  startDraw(canvasTag, event.pageX, event.pageY);
});

document.addEventListener("mouseup", function () {
  isMouseDown = false;
  shrinkCursor();
});

document.addEventListener("mousemove", function (event) {
  moveCursor(event.pageX, event.pageY);
  moveDraw(canvasTag, event.pageX, event.pageY);
});
