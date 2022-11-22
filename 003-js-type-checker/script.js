// Text input
const outputTag = document.querySelector("textarea");
const textInput = document.querySelector(`input[type="text"]`);

// Font-family
const fontTag = document.querySelector(`select[name="typeface"]`);

// Font-size
const sizeInput = document.querySelector(`input[name="size"]`);
const sizeLabel = document.querySelector("span.size-label");

// Font-weight
const weightInput = document.querySelector(`input[name="weight"]`);
const weightLabel = document.querySelector("span.weight-label");

// Leading
const leadingInput = document.querySelector(`input[name="leading"]`);
const leadingLabel = document.querySelector("span.leading-label");

// italic
const italicInput = document.querySelector(`input[name="italic"]`);

// background colour buttons
const colourButtons = document.querySelectorAll("div.colour");
const mainTag = document.querySelector("main");

const originalText = outputTag.value;

// display the text from text input on the big text on the RHS
textInput.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = originalText;
  }
});

// display the text from the textarea on the text input
outputTag.addEventListener("keyup", function () {
  textInput.value = this.value;
});

// set font-family depending on selected option
fontTag.addEventListener("input", function () {
  outputTag.style.fontFamily = this.value;
});

// change font size depending on range value
sizeInput.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px";
  // show size range value
  sizeLabel.innerHTML = this.value + "px";
});

// change font weight depending on range value
weightInput.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value;
  weightLabel.innerHTML = this.value;
});

// change font leading depending on range value
leadingInput.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value;
  leadingLabel.innerHTML = this.value;
});

// make text italic if checked
italicInput.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic";
  } else {
    outputTag.style.fontStyle = "normal";
  }
});

// change background color
colourButtons.forEach((button) => {
  button.addEventListener("click", function () {
    mainTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;
  });
});
