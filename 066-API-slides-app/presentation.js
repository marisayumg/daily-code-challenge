// get the file from figma API
const project = "ls1CPzqqSRWHSWxLPLLzCT";
const apiKey = "figd_r4rPOKJ7crBtiPOrmifm_sAOPh8RiBoqCyYHYM5l";
const apiHeaders = {
  headers: {
    "X-Figma-Token": apiKey,
  },
};

const loadFile = function (key) {
  return fetch("https://api.figma.com/v1/files/" + key, apiHeaders);
};

const loadImages = function (ids) {
  return new Promise(function (resolve, reject) {
    resolve(["image1.jpg", "image2.jpg", "image3.jpg"]);
  });
};

const addImagesToSite = function (urls) {
  const mainTag = document.querySelector("main");
  mainTag.innerHTML = "";
  urls.forEach((url) => {
    mainTag.innerHTML =
      mainTag.innerHTML +
      `
        <div>
            ${url}
        </div>
    `;
  });
};

// get images from that file
loadFile(project)
  .then((ids) => loadImages(ids))
  .then((urls) => addImagesToSite(urls));
