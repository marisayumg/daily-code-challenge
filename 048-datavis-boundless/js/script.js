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

const monthsLabel = d3.select("div.month");

const updateGraph = () => {
  // new Date has three inputs: year, month (starts at 0), day (starts at 1 weirdly)
  // this means the below is 1st January 2009
  const month = new Date(2009, monthIndex, 1);
  const monthFormat = d3.timeFormat("%B %Y");
  monthsLabel.text(monthFormat(month));

  // to create the pie chart there are two steps:
  // 1. create a pie generator that formats data into the right start and end angles
  // 2. use arc to take the data and transform into a pie chart
  const pieGenerator = d3.pie().sort(null);
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
    .style("fill", (d, i) => { return colours[i] })
    .each(function (d, i) {
        this.savedValue = d
      })

  // prettier-ignore
  // update already existing paths with new data
  paths
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attrTween("d", function(d, i) {
        const startValue = this.savedValue
        const endValue = d
        const curve = d3.interpolate(startValue, endValue)

        this.savedValue = d

        return function (t) {
            return arcGenerator(curve(t))
        }
    })
};

let loop = null;

const startLoop = () => {
  // run on page load
  monthIndex = 0;
  updateGraph();

  // clear already running loops
  clearInterval(loop);
  // run every half a second
  loop = setInterval(() => {
    if (monthIndex >= data.length) {
      clearInterval(loop);
    } else {
      monthIndex++;
      updateGraph();
    }
  }, 500);
};

// run on load
startLoop();

const restartBtn = document.querySelector("a.restart");

restartBtn.addEventListener("click", function () {
  startLoop();
});
