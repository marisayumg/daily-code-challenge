// D3 way to select a tag similar to querySelector
const circleChartTag = d3.select("svg.circle-chart");

// prettier-ignore
const radiusScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range([0, 40]);

// prettier-ignore
const circleColorScale = d3
  .scaleSqrt()
  .domain([0, 30000])
  .range(["#f0f8ba", "#f0f8ba"]);

// prettier-ignore
const monthGroups = circleChartTag
  .selectAll("g")
  .data(monthData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => {
    const x = (i % 7) * 140 + 56;
    const y = Math.floor(i / 7) * 120 + 56;
    return `translate(${x}, ${y})`;
  });

// 10,000 steps circle
monthGroups
  .append("circle")
  .attr("class", "ring")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", radiusScale(10000));

// 20,000 steps circle
monthGroups
  .append("circle")
  .attr("class", "ring")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", radiusScale(20000));

// actual circle
monthGroups
  .append("circle")
  .attr("class", "actual")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 10)
  .transition()
  .duration(1000)
  .delay((d, i) => {
    return i * 20 + 500;
  })
  .ease(d3.easeQuadInOut)
  .attr("r", (d, i) => {
    return radiusScale(d);
  });

// day text
monthGroups
  .append("text")
  .attr("class", "day")
  .attr("x", 0)
  .attr("y", 64)
  .text((d, i) => {
    return i + 1;
  });

// steps text
monthGroups
  .append("text")
  .attr("class", "steps")
  .attr("x", 0)
  .attr("y", 64)
  .text((d, i) => {
    return d;
  });
