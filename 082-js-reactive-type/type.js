document.addEventListener("mousemove", function (event) {
  const x = event.pageX;
  const y = event.pageY;

  document.querySelectorAll("div").forEach((letter) => {
    const dx = letter.offsetLeft + 50 - x;
    const dy = letter.offsetTop + 50 - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    // the curve we base the change on
    const score = Math.exp(dist * -0.005);

    letter.style.transform = `scale(${score})`;
    // letter.style.fontWeight = 100 + Math.round(100 * 4 * score);

    // letter.innerHTML = score.toFixed(2);
  });
});
