const selectTags = document.querySelectorAll("select");

const svg = d3.select("svg");

// this is how we did before
//prettier-ignore
/* svg
  .attr("width", 1200)
  .attr("height", 640) */

// this is the responsive way of setting height and width
//prettier-ignore
svg
    .attr("viewBox", "0 0 1200 560");

//prettier-ignore
const axisXGroup = svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0,480)");

//prettier-ignore
const axisYGroup = svg
  .append("g")
  .attr("class", "y-axis")
  .attr("transform", "translate(100,0)");

//prettier-ignore
const axisXText = svg
  .append("text")
  .attr("class", "x-axis")
  .attr("transform", "translate(600, 540)")
  .text("X axis");

//prettier-ignore
const axisYText = svg
  .append("text")
  .attr("class", "y-axis")
  .attr("transform", "translate(30,260) rotate(-90)")
  .text("Y axis");

// update data
const placeCities = () => {
  let inputX = document.querySelector("select[name=valueX]");
  let inputY = document.querySelector("select[name=valueY]");

  let valueX = inputX.value;
  let valueY = inputY.value;

  let textX = inputX.options[inputX.selectedIndex].innerHTML;
  let textY = inputY.options[inputY.selectedIndex].innerHTML;

  axisXText.text(textX);
  axisYText.text(textY);

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
    .range([100, 1100])

  //prettier-ignore
  const scaleY = d3.scaleLinear()
    .domain([0, maxValueY])
    .range([480, 24])

  //prettier-ignore
  const scaleR = d3.scaleSqrt()
    .domain([0, maxValueR])
    .range([0, 32]);

  //prettier-ignore
  const axisX = d3
    .axisBottom(scaleX)
    .tickSize(-460)
    .tickSizeOuter(0)
    .tickPadding(8)
    .ticks(10, "$,f");

  axisXGroup.call(axisX);

  //prettier-ignore
  const axisY = d3
    .axisLeft(scaleY)
    .tickPadding(8)
    .tickSize(-1000)
    .tickSizeOuter(0)
    .tickPadding(8)
    .ticks(10, "$,f");

  axisYGroup.call(axisY);

  //prettier-ignore
  const cities = svg
  .selectAll("g.city")
  .data(data, (d,i) => { return d.city})
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

  // data circles for each city
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

  // label background
  //prettier-ignore
  cities
    .append("rect")
    .attr("x", -60)
    .attr("y", (d, i) => { return -1 * scaleR(d.population) -30})
    .attr("width", 120)
    .attr("height", 30)

  // label text
  //prettier-ignore
  cities
    .append("text")
    .attr("x", 0)
    .attr("y", (d, i) => { return -1 * scaleR(d.population) -11})
    .text((d, i) => { return d.city })

  // move the hovered label to the top
  //prettier-ignore
  svg
    .selectAll("g.city")
    .on("mouseover", function() {
        d3.select(this).raise()
    })
};

// run on change of any select box
selectTags.forEach((tag) => {
  tag.addEventListener("change", function () {
    placeCities();
  });
});

// run on page load
placeCities();
