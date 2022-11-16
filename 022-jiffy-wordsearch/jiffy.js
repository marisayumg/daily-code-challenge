const videoTag = document.querySelector("div.videos");
const inputTag = document.querySelector(".search-input");
const hintTag = document.querySelector(".search-hint");

const apiKey = "2FVfpM8e8ypEGjAGa8CSOMUIe7NIXOw9";

// get a random index number in an array
const getRandomIndex = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// 2. create a video from the fetched src url
const createVideo = (src) => {
  // create an html element from within js
  const video = document.createElement("video");
  // we can set attributes to that element
  video.src = src;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.className = "video";

  return video;
};

// toggle page loading state on a off
const toggleLoading = (state) => {
  if (state) {
    document.body.classList.add("loading");
  } else {
    document.body.classList.remove("loading");
  }
};

// trigger video fetching on input enter
inputTag.addEventListener("keyup", function (e) {
  const keyword = this.value;
  if (keyword.length > 2) {
    hintTag.innerHTML = `Hit enter to search for ${keyword}`;
  }
  if (e.key === "Enter" && keyword.length > 2) {
    fetchVideo(keyword);
  }
});

// fetch a new URL with the input keyword
const fetchVideo = (keyword) => {
  // start loading spinner
  toggleLoading(true);
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=2FVfpM8e8ypEGjAGa8CSOMUIe7NIXOw9&q=${keyword}&limit=50&offset=0&rating=g&lang=en`;
  // 1. fetch the API and return a src mp4 url
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      const gif = getRandomIndex(json.data);
      const src = gif.images.original.mp4;

      const video = createVideo(src);

      // listen if video data has loaded
      video.addEventListener("loadeddata", (event) => {
        // toggle fadein effect of videos
        video.classList.add("visible");
        // hide loading spinner
        toggleLoading(false);
        // toggle class to show the close button
        document.body.classList.add("has-results");
        // change text to say show more
        hintTag.innerHTML = `Hit enter to see more ${keyword}`;
      });

      // add the video element to the videoTag
      videoTag.appendChild(video);
    })
    .catch((error) => {
      console.log(error);
    });
};
