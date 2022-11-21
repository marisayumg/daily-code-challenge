const spaceId = "t5f54zpe8cy9";
const environmentId = "master";
const accessToken = "0mvOpn7biqFo3Qj5QX-4_uCs1H1byxVrLjgKpPk_A68";

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&order=fields.order&content_type=menuItem`;

const menuTag = document.querySelector("section.menu");

setTimeout(function () {
  const getData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // store assets
        const assets = data.includes.Asset;

        // turn our contentful data into something simpler
        return data.items.map((item) => {
          // adding image url to our item object as images are quite more buried in the contentful JSON
          let imageUrl = "";
          const imageId = item.fields.photo.sys.id;

          // find the imageId in our assets
          const imageData = assets.find((asset) => {
            return asset.sys.id === imageId;
          });

          // if it matches, update it imageUrl
          if (imageData) {
            imageUrl = imageData.fields.file.url;
          }

          item.fields.photo = imageUrl;
          return item.fields;
        });
      });
  };

  // run function on load
  getData().then((data) => {
    // remove loader
    menuTag.innerHTML = "";

    // create the html tags for each item
    data.forEach((item) => {
      menuTag.innerHTML =
        menuTag.innerHTML +
        `
        <div class="item">
        <img src=${item.photo} />
        <div class="heading">
            <h2>${item.title}</h2>
            <p>${item.price}</p>
        </div>
            <p>${item.description}</p>
        </div>
    `;
    });
  });
}, 2500);
