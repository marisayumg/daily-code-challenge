const formTag = document.querySelector("form");
const inputTag = formTag.querySelector("input");
const nameTag = d3.select("span.name");

const svg = d3.select("svg");

// prettier-ignore
svg
    .attr("width", 960)
    .attr("height", 540)

// prettier-ignore
const pathsGroup = svg
    .append("g")
    .attr("class", "paths")

// prettier-ignore
const rankScale = d3.scaleLinear()
    .domain([1, 1000])
    .range([20, 500])

// prettier-ignore
const dateScale = d3.scaleLinear()
    .domain([1880, 2010])
    .range([80, 915])

// prettier-ignore
const rankAxis = d3.axisLeft(rankScale)
const dateAxis = d3.axisBottom(dateScale);

// prettier-ignore
const line = d3.line()
    .x((d, i) => { return dateScale(1880 + 10 * i) })
    .y((d, i) => { return rankScale(d) })
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
    .attr("transform", "translate(0, 520)")
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
        .attr("d", (d, i) => { return line(d.rank) })

    // prettier-ignore
    lines
        .exit()
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
