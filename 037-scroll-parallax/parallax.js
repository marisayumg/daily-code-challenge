const scrolled = document.querySelector("p.scrolled");
const scrollable = document.querySelector("p.scrollable");
const progressbar = document.querySelector("div.progress-bar");

let scrollablePX = window.innerHeight * 3;

scrollable.innerHTML = scrollablePX;

// distance scrolled
document.addEventListener("scroll", function () {
  let scrolledPX = Math.floor(window.pageYOffset);
  scrolled.innerHTML = scrolledPX;

  scrollable.innerHTML = scrollablePX - scrolledPX;

  progressbar.style.height = scrollablePX;
});
