const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

let interval = null;

// move the eyes every 3 seconds
const startInterval = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    moveEye(irisLeft, x, y);
    moveEye(irisRight, x, y);
  }, 3000);
};

const moveEye = (tag, mouseX, mouseY) => {
  // find center of the eye
  const eyeMidX = tag.getBoundingClientRect().left;
  const eyeMidY = tag.getBoundingClientRect().top;

  // find difference between eye and mouse
  const diffX = mouseX - eyeMidX;
  const diffY = mouseY - eyeMidY;

  // find the angle between X and Y
  const angle = Math.atan2(diffY, diffX);

  // find the capped version
  const cappedX = 2 * Math.cos(angle);
  const cappedY = 2 * Math.sin(angle);

  const eyeTag = tag.querySelector("div");

  eyeTag.style.left = cappedX + "px";
  eyeTag.style.top = cappedY + "px";
};

startInterval();

document.addEventListener("mousemove", function (event) {
  console.log(event);
  startInterval();
  moveEye(irisLeft, event.clientX, event.clientY);
  moveEye(irisRight, event.clientX, event.clientY);
});
