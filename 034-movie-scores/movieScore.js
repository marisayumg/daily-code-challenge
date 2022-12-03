const selectTag = document.querySelector("select");

data = data.map((d, i) => {
  d.difference = d.imdb - d.metascore;
  return d;
});

const svg = d3.select("svg");

// score scale
// prettier-ignore
const scoreScale = d3.scaleLinear()
    .domain([0,100])
    .range([800, 1200])

// imdb line specifications
// prettier-ignore
const imdbLine = d3.line()
    .x((d, i) => {return scoreScale(d.imdb) + 80})
    .y((d, i) => {return i * 48 + 80})

// imdb Path tag (the actual element)
// prettier-ignore
const imdbPath = svg
  .append("path")
  .datum(data)
  .attr("d", imdbLine)
  .attr("class", "imdb")

// imdb line specifications
// prettier-ignore
const metascoreLine = d3.line()
    .x((d, i) => {return scoreScale(d.metascore) + 80})
    .y((d, i) => {return i * 48 + 72})

// imdb Path tag (the actual element)
// prettier-ignore
const metascorePath = svg
  .append("path")
  .datum(data)
  .attr("d", metascoreLine)
  .attr("class", "metascore")

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

// Background rectangle
// prettier-ignore
movieGroup
  .append("rect")
  .attr("x", 0)
  .attr("y", -30)
  .attr("width", 1280)
  .attr("height", 48)

// movie year
// prettier-ignore
movieGroup
  .append("text")
  .attr("class", "year")
  .text((d, i) => {
    return d.year;
  });

// movie title
// prettier-ignore
movieGroup
    .append("text")
    .attr("x", 80)
    .text((d, i) => {return d.title})

// imbd circle
// prettier-ignore
movieGroup
  .append("circle")
  .attr("cx", (d, i) => { return scoreScale(d.imdb)})
  .attr("cy", -8)
  .attr("r", 8)
  .attr("class", "imdb")

// metascore circle
// prettier-ignore
movieGroup
  .append("circle")
  .attr("cx", (d, i) => {
    return scoreScale(d.metascore)
  })
  .attr("cy", -8)
  .attr("r", 8)
  .attr("class", "metascore");

// imdb score number
// prettier-ignore
movieGroup
  .append("text")
  .attr("class", "imdb")
  .attr("x", (d, i) => {
    if(d.difference > 0) {
        return scoreScale(d.imdb) + 20;
    } else {
        return scoreScale(d.imdb) - 20;
    }
  })
  .attr("y", -2)
  .text((d, i) => {
    return d.imdb;
  })
  .style("text-anchor", (d, i) => {
    if(d.difference > 0) {
        return "start"
    } else {
        return "end"
    }
  })

// metascore score number
// prettier-ignore
movieGroup
  .append("text")
  .attr("class", "metascore")
  .attr("x", (d, i) => {
    if (d.difference > 0) {
      return scoreScale(d.metascore) - 20;
    } else {
      return scoreScale(d.metascore) + 20;
    }
  })
  .attr("y", -2)
  .text((d, i) => {
    return d.metascore;
  })
  .style("text-anchor", (d, i) => {
    if (d.difference > 0) {
      return "end";
    } else {
      return "start";
    }
  });

selectTag.addEventListener("change", function () {
  data.sort((a, b) => {
    if (this.value === "imdb") {
      return d3.descending(a.imdb, b.imdb);
    }
    if (this.value === "metascore") {
      return d3.descending(a.metascore, b.metascore);
    }
    if (this.value === "title") {
      return d3.ascending(a.title, b.title);
    }
    if (this.value === "year") {
      return d3.ascending(a.year, b.year);
    }
    if (this.value === "difference") {
      return d3.descending(a.difference, b.difference);
    }
  });

  // Tell data to update again
  // prettier-ignore
  movieGroup
    .data(data, (d, i) => { return d.title })
    .transition()
    .duration(1000)
    .attr("transform", (d, i) => {
      return `translate(80, ${i * 48 + 80})`;
    });

  // Tell data to update again
  // prettier-ignore
  imdbPath
    .datum(data, (d, i) => {
      return d.title;
    })
    .transition()
    .duration(1000)
    .attr("d", imdbLine)

  // Tell data to update again
  // prettier-ignore
  metascorePath
    .datum(data, (d, i) => {
      return d.title;
    })
    .transition()
    .duration(1000)
    .attr("d", metascoreLine)
});
