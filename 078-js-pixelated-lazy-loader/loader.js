const pixelator = document.querySelector(".pixelator");
const filename = pixelator.dataset.original;

const image = new Image();
image.src = filename;

image.onload = () => {
  setTimeout(() => {
    pixelator.style.backgroundImage = `url(${filename})`;
  }, 1000);
};
