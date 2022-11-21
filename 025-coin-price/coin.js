// coindesk api url
const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
const priceTag = document.querySelector("h1");
const descriptionTag = document.querySelector("p");
const navLinks = document.querySelectorAll("nav a");

// keep track of currency to change it later
let currency = "USD";

// grab data from coindesk
const checkPrice = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1);
      descriptionTag.innerHTML = `${currency} per BTC`;
    });
};

checkPrice();

// loop every nav link and add a click event
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // update currency variable with the html data-currency of the clicked nav item
    currency = this.getAttribute("data-currency");
    checkPrice();
    // remove all previously selected nav items
    navLinks.forEach((link) => link.classList.remove("selected"));
    // and then add selected class to the clicked nav item
    this.classList.add("selected");
  });
});

// check the price every 60 seconds
setInterval(function () {
  checkPrice();
}, 60000);
