const formTag = document.querySelector("form");
const inputTag = formTag.querySelector("input");
const nameTag = d3.select("span.name");

const svg = d3.select("svg");

// prettier-ignore
svg
    .attr("viewBox", 0, 0 , 960, 540)

// prettier-ignore
const pathGroup = svg
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
const line = d3.line()
    .x((d, i) => { return dateScale(1880 + 10 * i) })

// search name function
const searchName = (name) => {
  let results = data.filter((d, i) => {
    return d.name.toLowerCase() === name.toLowerCase();
  });

  if (results.length > 0) {
    nameTag.text(name);
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
