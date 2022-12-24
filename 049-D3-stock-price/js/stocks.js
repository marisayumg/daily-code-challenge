// up here as we want to load on page load not on data load below
const svg = d3.select("svg");
svg.attr("viewBox", "0,0, 960, 320");

const apiUrl = "https://api.superhi.com/api/stocks/aapl";

// API call
// prettier-ignore
d3.json(apiUrl)
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
    
        const hoverGroup = svg
            .append("g")
            .attr("transform", "translate(-100,-100)")

        hoverGroup
            .append("rect")
            .attr("x", -50)
            .attr("y", -60)
            .attr("width", 100)
            .attr("height", 50)

        hoverGroup
            .append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 4)

        // save to a constant as we want to change it later on
        const stockText = hoverGroup
            .append("text")
            .attr("class", "stock")
            .attr("x", 0)
            .attr("y", -37)
            .text("Hi")

        const dateText = hoverGroup
            .append("text")
            .attr("class", "date")
            .attr("x", 0)
            .attr("y", -18)
            .text("date")

        svg.on("mousemove", function() {
            // returns the x and y coordinates
            const mouse = d3.mouse(this)
            // selecting just the x from above
            const mouseX = mouse[0]

            const mouseDate = dateScale.invert(mouseX)
            const bisector = d3.bisector((d) => { return d.date }).right
            const dataIndex = bisector(data, mouseDate)
            const dataPoint = data[dataIndex]

            if(dataPoint) {
                const x = dateScale(dataPoint.date);
                const y = stockScale(dataPoint.stock);
                const timeFormat = d3.timeFormat("%Y-%b-%d");
                const dateFormatted = timeFormat(dataPoint.date);
                stockText.text(dataPoint.stock);
                dateText.text(dateFormatted);
                hoverGroup.attr("transform", `translate(${x}, ${y})`)
            }
        })

        svg.on("mouseout", function() {
            hoverGroup.attr("transform", "translate(-999, -999)")
        })
    })
