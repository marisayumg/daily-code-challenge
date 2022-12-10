const stampsTag = document.querySelector(".stamps");
const stamps = ["coding.svg", "quote-left.svg", "quote-right.svg"];

let number = 0;

const addStamp = (x, y) => {
  // add an img element everytime we click
  const img = document.createElement("img");
  // add audio
  const audio = document.createElement("audio");

  // set the src to the stamps array
  if (number < stamps.length - 1) {
    number += 1;
  } else {
    number = 0;
  }
  img.setAttribute("src", `assets/stamps/${stamps[number]}`);
  audio.setAttribute("src", `assets/sound/plop.mp3`);
  audio.play();

  // set the position of the image to x and y
  // remove half the window width
  img.style.left = x - window.innerWidth / 2 + "px";
  img.style.top = y + "px";

  stampsTag.appendChild(img);

  console.log(x, y);
};

document.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY);
});
