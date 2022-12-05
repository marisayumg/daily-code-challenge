const headerTag = document.querySelector("header");

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;

  if (pixels > 40) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
});
