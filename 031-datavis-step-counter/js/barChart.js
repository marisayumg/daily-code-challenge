// D3 way to select a tag similar to querySelector
const barChartTag = d3.select("svg.bar-chart");

//prettier-ignore
// using D3's linear scale
const barScale = d3.scaleLinear()
  .domain([0, 2000])
  .range([1, 112])

// formatting to get 0 before hours
const hourFormat = d3.format("02");
const stepsFormat = d3.format(",.0f");

// prettier-ignore
const rectColorScale = d3
  .scaleLinear()
  .domain([1000, 2000])
  .range(["#8A8C6C", "#f0f8ba"]);

// prettier-ignore
const todayGroups = barChartTag
  .selectAll("g")
  .data(todayData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => { return "translate(" + (i * 40) + ", 0)"})

// add transparent rectangles that are full height so we can use for hover
todayGroups
  .append("rect")
  .attr("class", "transparent")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 32)
  .attr("height", 120);

// Add rectangles to our group
todayGroups
  .append("rect")
  // the attributes of our rectangles
  .attr("x", 0)
  .attr("y", (d, i) => {
    return 120;
  })
  .attr("width", 32)
  .attr("height", 1)
  .transition()
  .duration(1000)
  .delay((d, i) => {
    return i * 20;
  })
  .attr("y", (d, i) => {
    return 120 - barScale(d);
  })
  .attr("height", (d, i) => {
    return barScale(d);
  })
  .attr("fill", (d, i) => {
    return rectColorScale(d);
  });

// add the bottom text to our group
todayGroups
  .append("text")
  .attr("class", "hours")
  .attr("x", 16)
  .attr("y", 140)
  .text((d, i) => {
    return hourFormat(i);
  });

// add the top text to our group
todayGroups
  .append("text")
  .attr("class", "steps")
  .attr("x", 16)
  .attr("y", (d, i) => {
    return 120 - barScale(d) - 8;
  })
  .text((d, i) => {
    return stepsFormat(d);
  });
