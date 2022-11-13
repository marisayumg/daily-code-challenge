const titleTag = document.querySelector("h1");
const counterTag = document.querySelector(".counter");
const bodyTag = document.querySelector("body");
const randomTag = document.querySelector(".random");
const circleTag = document.querySelector(".circle");
const nextArrow = document.querySelector(".next-arrow");
const previousArrow = document.querySelector(".previous-arrow");

let slideCount = 0;

const slides = [
  {
    title: "a digital designer and wannabe developer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    title: "an avid climber and nature enthusiast",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    title: "the proud and tired owner of a puppy",
    background: "#d3c7f3",
    circle: "#fff",
  },
  {
    title: "trying to reforest a small piece of Portugal",
    background: "#faffb8",
    circle: "#b472e6",
  },
];

// update section
const updateContent = function () {
  titleTag.innerHTML = slides[slideCount].title;
  circleTag.style.backgroundColor = slides[slideCount].circle;
  bodyTag.style.backgroundColor = slides[slideCount].background;
  counterTag.innerHTML = `${slideCount + 1} / ${slides.length}`;
};

// next slide function
const nextSlide = function () {
  slideCount += 1;

  if (slideCount >= slides.length) {
    slideCount = 0;
  }
  updateContent();
};

// previous slide function
const previousSlide = function () {
  slideCount -= 1;

  if (slideCount < 0) {
    slideCount = slides.length - 1;
  }
  updateContent();
};

// random slide function
const randomSlide = function () {
  let randomNumber = Math.floor(Math.random() * slides.length);
  // && condition stops a possible infinite loop where it will always be 1 if there's only one page as well
  if (randomNumber === slideCount && slides.length > 1) {
    randomSlide();
  } else {
    slideCount = randomNumber;
    updateContent();
  }
};

nextArrow.addEventListener("click", function () {
  nextSlide();
});

previousArrow.addEventListener("click", function () {
  previousSlide();
});

randomTag.addEventListener("click", function () {
  randomSlide();
});

document.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.key === "ArrowRight") {
    nextSlide();
  }

  if (e.key === "ArrowLeft") {
    previousSlide();
  }

  if (e.key === " ") {
    randomSlide();
  }
});
