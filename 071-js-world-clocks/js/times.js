const locations = document.querySelectorAll("section.times div");

const updateTimes = function () {
  locations.forEach((location) => {
    const output = location.querySelector("output");
    const timezone = location.getAttribute("data-timezone");
    // Luxon
    const now = luxon.DateTime.now().setZone(timezone);

    output.innerHTML = now.toFormat("HH:mm:ss");

    // need to transform the hour (which comes as a string from Luxon)
    // into a number so we can compare it
    const hour = parseInt(now.toFormat("H"));

    if (hour >= 9 && hour < 18) {
      location.classList.add("open");
    }
  });
};

updateTimes();

setInterval(function () {
  updateTimes();
}, 1000);
