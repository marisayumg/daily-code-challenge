const headerTag = document.querySelector("header");

const toggleHeader = () => {
  let scrolled = window.pageYOffset;

  if (scrolled > 40) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
};

document.addEventListener("scroll", function () {
  toggleHeader();
});
