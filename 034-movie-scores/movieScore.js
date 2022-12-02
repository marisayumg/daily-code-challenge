const svg = d3.select("svg");

// score scale
// prettier-ignore
const scoreScale = d3.scaleLinear()

// prettier-ignore
svg
    .attr("height", 48 * data.length)
    .attr("width", 1400)

const movieGroup = svg
  .selectAll("g.movie")
  .attr("class", "movie")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d, i) => {
    return `translate(80, ${i * 48 + 80})`;
  });

// title
// prettier-ignore
movieGroup
    .append("text")
    .text((d, i) => {return d.title})

// imbd circle
// prettier-ignore
movieGroup
  .append("circle")
  .attr("cx", (d, i) => { return d.imdb + 1100})
  .attr("cy", -8)
  .attr("r", 8)
  .attr("class", "imdb")

// metascore circle
// prettier-ignore
movieGroup
  .append("circle")
  .attr("cx", (d, i) => {
    return d.metascore + 1140
  })
  .attr("cy", -8)
  .attr("r", 8)
  .attr("class", "metascore");

// Background rectangle
// prettier-ignore
movieGroup
  .append("rect")
  .attr("x", 0)
  .attr("y", -30)
  .attr("width", 1280)
  .attr("height", 48)
