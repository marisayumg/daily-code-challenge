const panBox = document.querySelector("div.world");

let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;

document.addEventListener("mousemove", function (event) {
  // to work out the size of the viewport
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // to work outthe whole "world" size
  const worldWidth = panBox.clientWidth;
  const worldHeight = panBox.clientHeight;

  // where is the mouse
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  // actual moveable area
  const panWidth = worldWidth - windowWidth;
  const panHeight = worldHeight - windowHeight;

  // work out the moveable area in percentage
  const percentageX = mouseX / windowWidth;
  const percentageY = mouseY / windowHeight;

  // the -1 moves it in the opposite direction (to - x)
  aimX = -1 * panWidth * percentageX;
  aimY = -1 * panHeight * percentageY;
});

const animate = function () {
  currentX += (aimX - currentX) * 0.05;
  currentY += (aimY - currentY) * 0.05;

  panBox.style.left = currentX + "px";
  panBox.style.top = currentY + "px";

  requestAnimationFrame(animate);
};

animate();
