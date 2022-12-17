let monthIndex = 0;
const colours = [
  "var(--chrome)",
  "var(--ie)",
  "var(--firefox)",
  "var(--safari)",
  "var(--opera)",
  "var(--android)",
];

const svg = d3.select("svg");

// prettier-ignore
svg
    .attr("width", 640)
    .attr("height", 640);

// prettier-ignore
const pieGroup = svg
    .append("g")
    .attr("transform", "translate(320,320)")

const updateGraph = () => {
  // to create the pie chart there are two steps:
  // 1. create a pie generator that formats data into the right start and end angles
  // 2. use arc to take the data and transform into a pie chart
  const pieGenerator = d3.pie();
  const arcData = pieGenerator(data[monthIndex]);

  // prettier-ignore
  const arcGenerator = d3.arc()
    .innerRadius(200)
    .outerRadius(300)

  // prettier-ignore
  const paths = pieGroup
    .selectAll("path")
    .data(arcData)

  // prettier-ignore
  // generate new paths
  paths
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => { return colours[i] });

  // prettier-ignore
  // update already existing paths with new data
  paths
    .attr("d", arcGenerator)
};

// run on load
updateGraph();

const restartBtn = document.querySelector("a.restart");

restartBtn.addEventListener("click", function () {
  monthIndex++;
  updateGraph();
});
