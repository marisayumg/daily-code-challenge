const sectionTags = document.querySelectorAll("section");

const addMovement = () => {
  // how far down the page are we
  const topOfViewport = window.pageYOffset;
  // how far down the page is the middle of the viewport
  const midOfViewport = topOfViewport + window.innerHeight / 2;

  // find the middle of each section
  sectionTags.forEach((section) => {
    // top of each section
    const topOfSection = section.offsetTop;
    // middle of each section
    const midOfSection = topOfSection + section.offsetHeight / 2;
    // find the distance between the middle of the viewport and the middle of each section
    const distanceToSection = midOfViewport - midOfSection;

    // pick the tags to parallax
    const imageTag = section.querySelector("img");
    const quoteTag = section.querySelector("div.quote");

    //
    imageTag.style.transform = `rotate(20deg)`;
  });
};

// run on page load
addMovement();

// run on scroll
document.addEventListener("scroll", function () {
  addMovement();
});

// run on resize
window.addEventListener("resize", function () {});
