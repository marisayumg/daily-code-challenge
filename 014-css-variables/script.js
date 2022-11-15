// select all inputs
const inputs = document.querySelectorAll(".controls input");

// function to update the values
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// listen to any change on the inputs
inputs.forEach((input) => {
  // triggers a single time when you change
  input.addEventListener("change", handleUpdate);
  // triggers everytime you change
  input.addEventListener("mousemove", handleUpdate);
});

handleUpdate();
