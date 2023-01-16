const questions = document.querySelectorAll("section");

// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     question.classList.toggle("open");
//   });
// });

questions.forEach((question) => {
  const opener = question.querySelector("h3");

  opener.addEventListener("click", () => {
    [...questions]
      .filter((q) => q !== question)
      .forEach((q) => q.classList.remove("open"));

    question.classList.toggle("open");
  });
});
