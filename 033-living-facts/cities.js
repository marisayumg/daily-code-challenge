const selectTags = document.querySelectorAll("select");

const svg = d3.select("svg");

//prettier-ignore
svg
    .attr("width", 960)
    .attr("height", 720)

// update data
const placeCities = () => {
  let valueX = "singlePerson";
  let valueY = "apartment";

  //prettier-ignore
  const cities = svg
  .selectAll("g.city")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "city")
};

// run on change of any select box
selectTags.forEach((tag) => {
  tag.addEventListener("change", function () {
    placeCities();
  });
});

// run on page load
placeCities();
