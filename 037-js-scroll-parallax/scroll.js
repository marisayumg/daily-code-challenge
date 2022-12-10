const bodyTag = document.querySelector("body");
const scrolled = document.querySelector("p.scrolled");
const scrollable = document.querySelector("p.scrollable");
const progressbar = document.querySelector("div.progress-bar");
const counterTag = document.querySelector("p.page-counter");
const sections = document.querySelectorAll("section");

// full height of document
let documentHeight = bodyTag.getBoundingClientRect().height;
// height of one viewport
let viewportHeight = window.innerHeight;
// need to minus one viewport as we start with one full viewport
let scrollablePX = documentHeight - viewportHeight;
// update number on load
scrollable.innerHTML = scrollablePX;

// distance scrolled
document.addEventListener("scroll", function () {
  // how many pixels have we scrolled
  let scrolledPX = Math.floor(window.pageYOffset);
  scrolled.innerHTML = scrolledPX;

  scrollable.innerHTML = scrollablePX - scrolledPX;

  const percentageScrolled = (scrolledPX / scrollablePX) * 100;
  progressbar.style.height = `${percentageScrolled}%`;

  // see how far down the page we scrolled
  // if equal or bigger than a section top, update the number
  sections.forEach((section) => {
    if (section.offsetTop <= scrolledPX + 100) {
      counterTag.innerHTML = section.getAttribute("data-pagination");
      progressbar.style.backgroundColor = section.getAttribute("data-progress");
      if (section.hasAttribute("data-is-light")) {
        bodyTag.style.color = "#242529";
      } else {
        bodyTag.style.color = "";
      }
    }
  });
});

document.addEventListener("scroll", function () {
  // find the middle point of the viewport
  const viewportTop = window.pageYOffset;
  const viewportMid = viewportTop + window.innerHeight / 2;

  sections.forEach((section) => {
    // find the middle point of each section
    const sectionTop = section.offsetTop;
    const sectionMid = sectionTop + section.offsetHeight / 2;

    // find the distance between mid section and mid viewport
    const distanceToSection = viewportMid - sectionMid;

    const parallaxTags = section.querySelectorAll(`[data-parallax]`);

    parallaxTags.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute("data-parallax"));
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
  });
});
