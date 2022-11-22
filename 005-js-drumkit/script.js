window.addEventListener("keydown", function (event) {
  // select the audio tag with the data-key that has the same keyCode as event
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(audio);
  // stop the functionfrom running when a non-audio key is pressed
  if (!audio) {
    return;
  }

  // reset the audio even if it's already playing
  // so we can button smash if we want
  audio.currentTime = 0;
  audio.play();

  // add a pressed style change
  key.classList.add("playing");
});

// remove the classList
window.addEventListener("keyup", function (event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.remove("playing");
});
