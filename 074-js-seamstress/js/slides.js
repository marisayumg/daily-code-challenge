const slides = document.querySelectorAll("section div.slides");

slides.forEach((slide) => {
  let currentSlide = 0;
  let z = 1000000;

  const images = slide.querySelectorAll("img");

  images.forEach((image) => {
    z--;
    image.style.zIndex = z;
  });

  slide.addEventListener("click", function () {
    z--;
    images[currentSlide].style.zIndex = z;
    currentSlide++;
    currentSlide = currentSlide % images.length;
  });
});
