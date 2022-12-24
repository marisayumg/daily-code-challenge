// prettier-ignore
const svg = d3.select("svg")
.attr("height", data.length * 150 + 320)

// prettier-ignore
const colorScale = d3
  .scaleLinear()
  .domain([-10, 30])
  .range(["#1616ff", "#fb365d"]);

// prettier-ignore
const heightScale = d3
  .scaleLinear()
  .domain([-20, 45])
  .range([88, 8]);

// prettier-ignore
const unitsScale = d3
  .scaleLinear()
  .domain([0, 100])
  .rangeRound([32, 212]);

// prettier-ignore
const lineGenerator = d3.line()
    .x((d, i) => {return 435 + 72 * i})
    .y((d, i) => {return heightScale(d)})

// prettier-ignore
const dataPoints = svg
    .selectAll("g.data-point")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "data-point")
    .attr("transform", (d, i) => { return `translate(0, ${i * 160})`});

// prettier-ignore
dataPoints
    .append("text")
    .attr("x", 0)
    .attr("y", 70)
    .attr("class", "city")
    .text((d, i) => { return d.city })

// prettier-ignore
dataPoints
    .append("text")
    .attr("x", 4)
    .attr("y", 96)
    .attr("class", "country")
    .text((d, i) => { return d.country })

// prettier-ignore
const months = dataPoints
    .append("g")
    .attr("class", "months")
    .attr("transform", "translate(200,0)")

// prettier-ignore
const monthGroups = months
    .selectAll("g.month")
    .data((d, i) => { return d.months })
    .enter()
    .append("g")
    .attr("class", "month")
    .attr("transform", (d, i) => { return `translate(${i * 72}, 0)` })

// prettier-ignore
const rectangles = monthGroups
  .append("rect")
  .attr("x", 200)
  .attr("y", 0)
  .attr("width", 72)
  .attr("height", 96)
  .attr("fill", (d, i) => {
    return colorScale(d);
  });

// prettier-ignore
const line = dataPoints
    .append("path")
    .datum((d, i) => { return d.months })
    .attr("d", (d, i) => { return lineGenerator(d) })

// prettier-ignore
const circle = monthGroups
  .append("circle")
  .attr("cx", 236)
  .attr("cy", (d, i) => { return heightScale(d)})
  .attr("r", 16);

// prettier-ignore
const temperatures = monthGroups
  .append("text")
  .attr("class", "temp")
  .attr("x", 236)
  .attr("y", (d, i) => {
    return heightScale(d) + 6;
  })
  .text((d, i) => {
    return d;
  });

// change Celsius to Fahrenheit
const selectTag = document.querySelector("select");
selectTag.addEventListener("input", function () {
  if (this.value === "C") {
    temperatures.text((d, i) => {
      return d;
    });
  }
  if (this.value === "F") {
    temperatures.text((d, i) => {
      return unitsScale(d);
    });
  }
});
