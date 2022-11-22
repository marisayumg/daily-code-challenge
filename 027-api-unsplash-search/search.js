const formTag = document.querySelector("form");
// more specific way to call the input
const inputTag = formTag.querySelector("input");
const resultsTag = document.querySelector("main.results");

// API data
const accessKey = "msI1QTjoD5SqbNHe_ck5TOrVqoyNyAxI4UoRq5N2xBE";
const apiUrl = "https://api.unsplash.com/search/photos?per_page=24&query=";

// search unsplash
const searchUnsplash = (term) => {
  return fetch(apiUrl + term, {
    // adding authorization key via HTTP request instead of through api url
    method: "GET",
    headers: {
      Authorization: "Client-ID " + accessKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // format Unsplash's results
      return data.results.map((result) => {
        return {
          imageSrc: result.urls.regular,
          width: result.width,
          height: result.height,
          author: result.user.name,
          title: result.description || "Untitled",
          backgroundColor: (result.color || "#eee") + "33",
        };
      });
    });
};

// add results to the page
const showResults = (results) => {
  resultsTag.innerHTML = "";
  // loop over each result and add to the results tag
  results.forEach((result) => {
    resultsTag.innerHTML =
      resultsTag.innerHTML +
      `
        <div class="single-result">
            <div class="image" style="background-color: ${result.backgroundColor}">
                <img src="${result.imageSrc}" />
            </div>
            <h2>
                ${result.title}
            </h2>
            <p>by ${result.author} - ${result.width} x ${result.height}</p>
        </div>
    `;
  });
};

// when we submit the form, get the info from input
formTag.addEventListener("submit", function (event) {
  // get info from input
  const searchTerm = inputTag.value;

  // stop the form from going to next page
  event.preventDefault();

  // do a search with input value
  searchUnsplash(searchTerm).then((results) => showResults(results));
});
