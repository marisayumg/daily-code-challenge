const titleTag = document.querySelector("h1");

document.addEventListener("scroll", function () {
  let pixels = window.pageYOffset;
  let fontSize = Math.floor(pixels * 0.2 + 16);
  let width = fontSize * 2;
  titleTag.style.fontSize = fontSize + "px";
  titleTag.style.fontVariationSettings = `"wdth" ${width}`;
  titleTag.innerHTML = `Type is ${fontSize}px`;
});
