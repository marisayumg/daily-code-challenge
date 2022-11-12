const canvas = document.createElement("canvas");
const sandbox = new GlslCanvas(canvas);

document.body.appendChild(canvas);

const sizer = function () {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const dpi = window.devicePixelRatio;

  const s = Math.max(ww, wh);

  canvas.width = s * dpi;
  canvas.height = s * dpi;
  canvas.style.width = s + "px";
  canvas.style.height = s + "px";
};

sizer();
window.addEventListener("resize", function () {
  sizer();
});

sandbox.load(frag);
sandbox.setUniform("seed", Math.random());
