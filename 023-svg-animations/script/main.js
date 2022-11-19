const CSStransforms = anime({
  targets: "#tunnel circle",
  scale: 1.1,
  direction: "alternate",
  loop: true,
  duration: 250,
  easing: "easeInOutSine",
  // delay function that loops through all the elements, their index at the max length
  delay: (el, index) => index * 50,
});
