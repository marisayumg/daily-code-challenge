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

// biggest circle
monthGroups
  .append("circle")
  .attr("class", "ring")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 40);

// biggest circle
monthGroups
  .append("circle")
  .attr("class", "ring")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 50);

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

circleChartTag
  .selectAll("text")
  .data(monthData)
  .enter()
  .append("text")
  .attr("x", (d, i) => {
    return (i % 7) * 140 + 56;
  })
  .attr("y", (d, i) => {
    return Math.floor(i / 7) * 120 + 115;
  })
  .text((d, i) => {
    return i;
  });
