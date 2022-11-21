const quoteTag = document.querySelector("h1");
const authorTag = document.querySelector("h2");
const randomTag = document.querySelector("button");

let quotesData = [];

fetch("https://api.superhi.com/api/test/quotes/")
  .then((response) => response.json())
  .then((data) => {
    quotesData = data;
    getQuote();
  });

const getQuote = () => {
  if (quotesData.length > 0) {
    const randomNumber = Math.floor(Math.random() * quotesData.length);
    const randomQuote = quotesData[randomNumber];
    quoteTag.innerHTML = "&ldquo;" + randomQuote.quote + "&rdquo;";
    authorTag.innerHTML = "&mdash; " + randomQuote.author;
    // make quotes smaller if too long
    if (randomQuote.quote.length > 100) {
      quoteTag.classList.add("long");
    } else {
      quoteTag.classList.remove("long");
    }
  } else {
    quoteTag.innerHTML = "Loading quotes...";
    authorTag.innerHTML = "";
  }
};

randomTag.addEventListener("click", getQuote);
