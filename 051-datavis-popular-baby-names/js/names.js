const formTag = document.querySelector("form");
const inputTag = formTag.querySelector("input");
const nameTag = d3.select("span.name");

const svg = d3.select("svg");

// prettier-ignore
svg
    .attr("viewBox", "0 0 1200 480")

// prettier-ignore
const pathsGroup = svg
    .append("g")
    .attr("class", "paths")

// prettier-ignore
const rankScale = d3.scalePow()
    .domain([1, 1000])
    .range([20, 440])
    .exponent(0.25)

// prettier-ignore
const dateScale = d3.scaleLinear()
    .domain([1880, 2010])
    .range([90, 1100])

// prettier-ignore
const rankAxis = d3.axisLeft(rankScale)
    .tickValues([1, 5, 10, 25, 50, 75, 100, 500, 750, 1000])
// prettier-ignore
const dateAxis = d3.axisBottom(dateScale)
.tickFormat((d, i) => { return d + "'s"})
.tickPadding(8)

// prettier-ignore
const line = d3.line()
    .x((d, i) => { return dateScale(1880 + 10 * i) })
    .y((d, i) => { return rankScale(d) })
    .defined((d, i) => { return d != 0 })
    .curve(d3.curveCardinal.tension(0.5))

// prettier-ignore
const flatLine = d3.line()
    .x((d, i) => { return dateScale(1880 + 10 * i) })
    .y((d, i) => { return rankScale(1000) })
    .defined((d, i) => { return d != 0 })
    .curve(d3.curveCardinal.tension(0.5))

// prettier-ignore
svg
    .append("g")
    .attr("transform", "translate(60, 0)")
    .call(rankAxis)

// prettier-ignore
svg
    .append("g")
    .attr("transform", "translate(0, 440)")
    .call(dateAxis)

// search name function
const searchName = (name) => {
  let results = data.filter((d, i) => {
    return d.name.toLowerCase() === name.toLowerCase();
  });

  if (results.length > 0) {
    nameTag.text(name);

    // prettier-ignore
    const lines = pathsGroup
    .selectAll("path")
    .data(results, (d, i) => { return d.name })

    // prettier-ignore
    lines
        .enter()
        .append("path")
        .attr("class", (d, i) => { return d.sex })
        .attr("d", (d, i) => { return flatLine(d.rank) })
        .style("opacity", 0)
        .transition()
        .duration(500)
        .style("opacity", 1)
        .attr("d", (d, i) => { return line(d.rank) })

    // prettier-ignore
    lines
        .exit()
        .style("opacity", 1)
        .transition()
        .duration(500)
        .style("opacity", 0)
        .attr("d", (d, i) => { return flatLine(d.rank) })
        .remove()
  } else {
    alert(`No results for ${name}`);
  }
};

// listen for submitted name
formTag.addEventListener("submit", function (event) {
  event.preventDefault();

  searchName(inputTag.value);
  inputTag.value = "";
});

// run searchName on load
searchName("Richard");
