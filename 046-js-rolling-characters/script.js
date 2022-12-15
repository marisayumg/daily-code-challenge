const titleTags = document.querySelectorAll("h1, h2");

const runRandom = (tag) => {
  // store the original HTML
  const originalText = tag.dataset.original;

  // increment the override of the text
  let newText = "";
  let num = 0;
  let randomList = "abcdefghijklmnopqrstuvxwyz".split("");

  // override the text
  const addInterval = setInterval(() => {
    num = num + 1;
    newText = originalText.substring(0, num);

    // stop the interval
    if (num >= originalText.length) {
      clearInterval(addInterval);
    }
  }, 80);

  const randomInterval = setInterval(() => {
    tag.innerHTML = newText;

    // add a random character for each missing text
    for (let i = newText.length; i < originalText.length; i++) {
      tag.innerHTML =
        tag.innerHTML +
        randomList[Math.floor(Math.random() * randomList.length)];
    }
  }, 40);
};

// recent feature: listen for when the section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        runRandom(entry.target);
      }
    });
  },
  {
    threshold: [0, 0.5, 1],
  }
);

titleTags.forEach((tag) => {
  tag.dataset.original = tag.innerHTML;
  // original code without the run on each section, only on load
  // runRandom(tag);
  observer.observe(tag);
});
