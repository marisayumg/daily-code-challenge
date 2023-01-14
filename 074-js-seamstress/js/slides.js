const slides = document.querySelectorAll("section div.slides");

slides.forEach((slide) => {
  let currentSlide = 0;
  let z = 1000000;

  const images = slide.querySelectorAll("img");

  images.forEach((image) => {
    z--;
    image.style.zIndex = z;
  });

  const timeline = gsap.timeline();

  //prettier-ignore
  timeline
    .set(images, { y: "500%", rotation: () => {
        return 40 * Math.random() - 20
    }})
    .to(images, { y: 0, stagger: -0.25 })
    .to(images, { rotation: () => {
        return 16 * Math.random() - 8
    } })

  slide.addEventListener("click", function () {
    z--;
    images[currentSlide].style.zIndex = z;
    currentSlide++;
    currentSlide = currentSlide % images.length;
  });
});
