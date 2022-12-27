let layer1 = document.querySelector("div.layer1");
let layer2 = document.querySelector("div.layer2");
let button = document.querySelector("button");

function makeColour() {
  let h = Math.random() * 360;
  let s = 100 - Math.random() * 50;
  let l = 90 - Math.random() * 40;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function makeGradient() {
  let colour1 = makeColour();
  let colour2 = makeColour();
  let angle = Math.random() * 360;
  return `linear-gradient(${angle}deg, ${colour1}, ${colour2})`;
}

function changeBg() {
  layer1.style.backgroundImage = makeGradient();
  layer2.style.backgroundImage = makeGradient();
}

changeBg();

button.addEventListener("click", function () {
  changeBg();
});
