const animatedTags = document.querySelectorAll("h2, p, a.button");

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = () => {
  animatedTags.forEach((tag) => {
    const tagsTop = tag.getBoundingClientRect().top;
    const tagsBottom = tag.getBoundingClientRect().bottom;

    let delay = 0.25;

    if (tagsTop < window.innerHeight) {
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      delay += 0.25;
    }
  });
};

fadeIn();

document.addEventListener("scroll", function () {
  fadeIn();
});

window.addEventListener("resize", function () {
  fadeIn();
});
