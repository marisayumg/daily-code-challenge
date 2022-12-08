const mainTag = document.querySelector("main");
const images = document.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

mainTag.addEventListener("click", function () {
  currentSlide++;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z++;

  // remove the animation for the style for EVERY IMAGE
  images.forEach((image) => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = `fadeIn 0.1s`;
});

mainTag.addEventListener("mouseenter", function () {
  images.forEach((image) => {
    let x = 25 * Math.floor(Math.random() * images.length) - 50;
    let y = 25 * Math.floor(Math.random() * images.length) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

mainTag.addEventListener("mouseleave", function () {
  images.forEach((image) => {
    image.style.transform = "";
  });
});
