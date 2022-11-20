// function to duplicate shapes
const duplicateHtml = (element, quantity) => {
  const crossesContent = element.innerHTML;
  const crosses = new Array(quantity).fill(crossesContent).join("");

  element.innerHTML = crosses;
};

// CIRCLE
anime({
  targets: "#tunnel circle",
  scale: 1.1,
  direction: "alternate",
  loop: true,
  duration: 250,
  easing: "easeInOutSine",
  // delay function that loops through all the elements, their index at the max length
  delay: (el, index) => index * 50,
});

// LINES
anime({
  targets: ".conveyor",
  translateX: "-50%",
  easing: "linear",
  duration: 3000,
  loop: true,
  autoplay: true,
});

// ZIGZAG
const zigzagPath = document.querySelector("#zigzag path");
const zigzagOffset = anime.setDashoffset(zigzagPath);
zigzagPath.setAttribute("stroke-dashoffset", zigzagOffset);

anime({
  targets: zigzagPath,
  strokeDashoffset: [zigzagOffset, 0],
  duration: 3000,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
});

// WAVE
const wavePath = document.querySelector("#wave path");
const waveOffset = anime.setDashoffset(wavePath);
wavePath.setAttribute("stroke-dashoffset", waveOffset);

anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
});

// CROSSES

const cross = document.querySelector("#crosses");
// duplicate the existing cross 10 times
duplicateHtml(cross, 10);

anime({
  targets: "#crosses path",
  rotate: "1turn",
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
});

// DOTS
const dots = document.querySelectorAll("#dots .dot");
// duplicate the existing cross 10 times
duplicateHtml(document.querySelector("#dots"), 40);

dots.forEach((dot) => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(270, 750),
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
  });
});

// SQUARE TUNNEL

anime({
  targets: "#squares rect",
  translateX: ["-50%", "-50%"],
  translateY: ["-50%", "-50%"],
  rotate: [45, 0, -45],
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
});
