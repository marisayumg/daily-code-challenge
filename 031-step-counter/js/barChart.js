// D3 way to select a tag similar to querySelector
const barChartTag = d3.select("svg.bar-chart");

//prettier-ignore
// using D3's linear scale
const barScale = d3.scaleLinear()
  .domain([0, 2000])
  .range([1, 112])

// prettier-ignore
const rectColorScale = d3.scaleLinear()
  .domain([0, 2000])
  .range(["#DFF0F2", "#C4B2DF"]);

// pick the group we will insert rectangles in
barChartTag
  .selectAll("rect")
  // link our data
  .data(todayData)
  // D3's function to add things
  .enter()
  .append("rect")
  // the attributes of our rectangles
  .attr("x", (d, i) => {
    return i * 40;
  })
  .attr("y", (d, i) => {
    return 112 - barScale(d);
  })
  .attr("width", 32)
  .attr("height", (d, i) => {
    return barScale(d);
  })
  .attr("fill", (d, i) => {
    return rectColorScale(d);
  });

barChartTag
  .selectAll("text")
  .data(todayData)
  .enter()
  .append("text")
  .attr("x", (d, i) => {
    return i * 40 + 20;
  })
  .attr("y", 132)
  .text((d, i) => {
    return i;
  });
