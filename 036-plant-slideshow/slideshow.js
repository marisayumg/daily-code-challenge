const mainTag = document.querySelector("main");
const images = document.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

mainTag.addEventListener("click", function () {
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  currentSlide++;
  z++;

  images[currentSlide].style.zIndex = z;
});
