// comma to add the comma to e.g 1,000, point + 0 + f to add no decimals
const statsFormat = d3.format(",.0f");

d3.select("h3.worst-day").text(statsFormat(d3.min(monthData)) + " steps");
d3.select("h3.average-day").text(statsFormat(d3.mean(monthData)) + " steps");
d3.select("h3.best-day").text(statsFormat(d3.max(monthData)) + " steps");
d3.select("h3.total-month").text(statsFormat(d3.sum(monthData)) + " steps");
d3.select("h3.total-day").text(statsFormat(d3.sum(todayData)) + " steps");
