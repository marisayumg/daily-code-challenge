// up here as we want to load on page load not on data load below
const svg = d3.select("svg");
svg.attr("viewBox", "0,0, 960, 320");

// API call
// prettier-ignore
d3.json("js/1y.json")
    .then((data) => {
      // transform the date (which is given as a string in the API into an actual date with d3)
      const dateParse = d3.timeParse("%Y-%m-%d");

      data = data.map((d, i) => {
        return { stock: d.close, date: dateParse(d.date) };
      });

      const minDate = d3.min(data, (d, i) => {
        return d.date;
      });
      const maxDate = d3.max(data, (d, i) => {
        return d.date;
      });

      const minStock = d3.min(data, (d, i) => {
        return d.stock;
      });
      const maxStock = d3.max(data, (d, i) => {
        return d.stock;
      });

      const dateScale = d3
        .scaleTime()
        .domain([minDate, maxDate])
        .range([60, 900]);

      const stockScale = d3
        .scaleLinear()
        .domain([minStock, maxStock])
        .range([280, 60]);

      // line generator - we pass in the details first
      // prettier-ignore
      const line = d3.line()
            .x((d, i) => { return dateScale(d.date) })
            .y((d, i) => { return stockScale(d.stock) })

      // area generator - we pass in the details first
      // prettier-ignore
      const area = d3.area()
            .x0((d, i) => { return dateScale(d.date); })
            .x1((d, i) => { return dateScale(d.date); })
            .y0((d, i) => { return stockScale(minStock) + 20 })
            .y1((d, i) => { return stockScale(d.stock) })

      // then we call the area
      // prettier-ignore
      svg
        .append("path")
        .datum(data)
        .attr("class", "area")
        .attr("d", area)

      // then we call the line
      // prettier-ignore
      svg
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
    })
