const sentenceTag = document.querySelector("textarea");
const sentenceInput = document.querySelector(`input[type="text"]`);
const sizeInput = document.querySelector(`input[type="range"]`);

const originalText = sentenceTag.value;

// display the text from text input on the big sentence on the RHS
sentenceInput.addEventListener("keyup", function () {
  if (this.value) {
    sentenceTag.value = this.value;
  } else {
    sentenceTag.value = originalText;
  }
});

// display the text from the textarea on the text input
sentenceTag.addEventListener("keyup", function () {
  sentenceInput.value = this.value;
});

// change font size depending on range value
sizeInput.addEventListener("click", function () {
  sentenceTag.style.fontSize = this.value;
});
