const titleTag = document.querySelector("h1");

titleTag.addEventListener("mouseenter", function () {
  titleTag.style.fontVariationSettings = `"wght" 900, "wdth" 900`;
});

titleTag.addEventListener("mouseleave", function () {
  titleTag.style.fontVariationSettings = ``;
});
