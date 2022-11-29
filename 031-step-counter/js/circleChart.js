// D3 way to select a tag similar to querySelector
const circleChartTag = d3.select("svg.circle-chart");

// prettier-ignore
const radiusScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range([0, 56]);

// prettier-ignore
const circleColorScale = d3.scaleSqrt()
  .domain([0, 30000])
  .range(["#DFF0F2", "#C4B2DF"]);

circleChartTag
  .selectAll("circle")
  .data(monthData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    // i remainder 7 will always return a number below 7
    return (i % 7) * 140 + 56;
  })
  .attr("cy", (d, i) => {
    // i / 7 will return the rows of 7 columns
    return Math.floor(i / 7) * 140 + 56;
  })
  .attr("r", (d, i) => {
    return radiusScale(d);
  })
  .attr("fill", (d, i) => {
    return circleColorScale(d);
  });

circleChartTag
  .selectAll("text")
  .data(monthData)
  .enter()
  .append("text")
  .attr("x", (d, i) => {
    return (i % 7) * 140 + 56;
  })
  .attr("y", (d, i) => {
    return Math.floor(i / 7) * 140 + 130;
  })
  .text((d, i) => {
    return i;
  });
