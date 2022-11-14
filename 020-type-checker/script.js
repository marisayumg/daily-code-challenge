const sentenceTag = document.querySelector("textarea");
const sentenceInput = document.querySelector(`input[type="text"]`);
const originalText = sentenceTag.value;

sentenceInput.addEventListener("keyup", function () {
  if (this.value) {
    sentenceTag.value = this.value;
  } else {
    sentenceTag.value = originalText;
  }
});

sentenceTag.addEventListener("keyup", function () {
  sentenceInput.value = this.value;
});
