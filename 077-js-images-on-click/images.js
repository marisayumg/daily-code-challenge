const images = [
  "assets/image1.jpg",
  "assets/image2.jpg",
  "assets/image3.png",
  "assets/image4.jpg",
  "assets/image5.jpg",
  "assets/image6.jpg",
  "assets/image7.png",
  "assets/image8.jpg",
  "assets/image9.jpg",
  "assets/image10.jpg",
  "assets/image11.jpg",
  "assets/image12.jpg",
];

let i = 0;

function placeImage(x, y) {
  const nextSrc = images[i];

  const img = document.createElement("img");
  img.setAttribute("src", nextSrc);

  img.style.left = x + "px";
  img.style.top = y + "px";

  document.body.appendChild(img);

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener("click", function (event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});
