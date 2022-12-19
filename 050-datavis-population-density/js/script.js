// prettier-ignore
const svg = d3.select("svg")
    .attr("viewBox", "0 0 1000 600");

const worldGroup = svg.append("g");

// prettier-ignore
const projection = d3.geoNaturalEarth1()
    .translate([500, 300])
    .scale(175)

// prettier-ignore
const mapGenerator = d3.geoPath()
    .projection(projection);

// prettier-ignore
d3.json("js/data.json").then(data => {
    d3.json("js/world-110m2.json").then(mapData)
})
