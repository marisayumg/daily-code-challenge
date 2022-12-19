// prettier-ignore
const svg = d3.select("svg")
    .attr("viewBox", "0 0 800 500");

const worldGroup = svg.append("g");

// prettier-ignore
const projection = d3.geoNaturalEarth1()
    .translate([400, 250])
    .scale(175)

// prettier-ignore
const mapGenerator = d3.geoPath()
    .projection(projection);

// prettier-ignore
const colorScale = d3.scaleSequentialPow(d3.interpolatePurples)
  .domain([0, 2000])
  .exponent(0.1);

// prettier-ignore
const scrollScale = d3.scaleLinear()
    .domain([0, 2000, 4000, 7500, 15000])
    .range([0, 10, 100, 300, 2000])
    .clamp(true)

// prettier-ignore
d3.json("js/data.json").then(data => {
    d3.json("js/world-110m2.json").then(mapData => {
        worldGroup
          .selectAll("path")
          .data(mapData.features)
          .enter()
          .append("path")
          .attr("d", mapGenerator)
          .style("stroke-width", 0.3)
          .style("stroke", "#222222")
          .style("fill", (d, i) => {
            const country = data.find((country) => {
              return country.name == d.properties.name;
            });
            if (country) {
              return colorScale(country.density);
            } else {
              return "#111111";
            }
          });
            
          window.addEventListener("scroll", function() {
            const pixels = window.pageYOffset
            const threshold = scrollScale(pixels)
            const format = d3.format(".1f")

            d3.select("span.counter").text(format(threshold));

            worldGroup
                .selectAll("path")
                .style("fill", (d, i) => {
                    const country = data.find((country) => {
                        return country.name == d.properties.name
                    })
                    if (country && country.density > threshold) {
                      return colorScale(country.density);
                    } else {
                      return "#111111";
                    }
                })

          })
    })
})
