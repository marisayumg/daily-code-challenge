const sectionTags = document.querySelectorAll("section");
const bodyTag = document.querySelector("body");

const addMovement = () => {
  // how far down the page are we
  const topOfViewport = window.pageYOffset;
  // how far down the page is the middle of the viewport
  const midOfViewport = topOfViewport + window.innerHeight / 2;

  // find the middle of each section
  sectionTags.forEach((section, index) => {
    // top of each section
    const topOfSection = section.offsetTop;
    // middle of each section
    const midOfSection = topOfSection + section.offsetHeight / 2;
    // find the distance between the middle of the viewport and the middle of each section
    const distanceToSection = midOfViewport - midOfSection + 100;

    // pick the tags to parallax
    const imageTag = section.querySelector("img");
    const quoteTag = section.querySelector("div.quote");
    const logoTag = section.querySelector(".title");

    let rotation = distanceToSection / 100;
    let quoteDistance = (-1 * distanceToSection) / 2;

    // make every other image and quote rotate the oposite way
    if (index % 2 === 0) {
      rotation = rotation * -1;
    }

    // add movement
    imageTag.style.transform = `rotate(${rotation}deg)`;
    quoteTag.style.top = `${quoteDistance}px`;
    quoteTag.style.transform = `rotate(${-1 * rotation}deg)`;

    // add background
    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background");
      const dataColor = section.getAttribute("data-color");
      bodyTag.style.backgroundColor = dataBackground;
      bodyTag.style.color = dataColor;
    }
  });
};

// run on page load
addMovement();

// run on scroll
document.addEventListener("scroll", function () {
  addMovement();
});

// run on resize
window.addEventListener("resize", function () {
  addMovement();
});
