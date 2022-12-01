const selectTags = document.querySelectorAll("select");

const svg = d3.select("svg");

//prettier-ignore
svg
    .attr("width", 960)
    .attr("height", 720)

// update data
const placeCities = () => {
  let inputX = document.querySelector("select[name=valueX]");
  let inputY = document.querySelector("select[name=valueY]");

  let valueX = inputX.value;
  let valueY = inputY.value;

  // max value for the data on X axis
  let maxValueX = d3.max(data, (d, i) => {
    return d[valueX];
  });

  // max value for the data on X axis
  let maxValueY = d3.max(data, (d, i) => {
    return d[valueY];
  });

  // max value for population
  let maxValueR = d3.max(data, (d, i) => {
    return d.population;
  });

  //prettier-ignore
  const scaleX = d3.scaleLinear()
    .domain([0, maxValueX])
    .range([100, 860])

  //prettier-ignore
  const scaleY = d3.scaleLinear()
    .domain([0, maxValueY])
    .range([620, 100])

  //prettier-ignore
  const scaleR = d3.scaleSqrt().domain([0, maxValueR]).range([0, 32]);

  //prettier-ignore
  const cities = svg
  .selectAll("g.city")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "city")
  .attr("transform", (d, i) => {
    const x = scaleX(d[valueX]);
    const y = scaleY(d[valueY]);

    return `translate(${x},${y})`
})

  // need to call again svg position in order for the position to change a second time when called
  //prettier-ignore
  svg
    .selectAll("g.city")
    .transition()
    .duration(500)
    .attr("transform", (d, i) => {
      const x = scaleX(d[valueX]);
      const y = scaleY(d[valueY]);
      return `translate(${x},${y})`;
    });

  //prettier-ignore
  cities
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 15)
    .transition()
    .attr("r", (d, i) => {
        return scaleR(d.population)
    });
};

// run on change of any select box
selectTags.forEach((tag) => {
  tag.addEventListener("change", function () {
    placeCities();
  });
});

// run on page load
placeCities();
