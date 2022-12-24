// if you run this code in Chrome's Developer Tools on one of IMDb's top pages
// such as https://www.imdb.com/search/title?groups=top_250&sort=user_rating
// then you will get a JSON object copied to your clipboard

// get all items as a list
const list = [...document.querySelectorAll(".lister-item")];

// for each tag, turn it in to a data object
const object = list
  .map((item) => {
    // pick the tags we need from each item
    titleTag = item.querySelector(".lister-item-header a");
    yearTag = item.querySelector(".lister-item-year");
    imdbTag = item.querySelector(".ratings-imdb-rating");
    metaTag = item.querySelector(".metascore");

    // return back an object per tag
    return {
      title: titleTag.innerHTML, // whats the film called
      year: yearTag.innerHTML.replace("(I) ", "").replace(/[\)\(]/g, ""), // remove any extra details in the year tag
      imdb: parseFloat(imdbTag.getAttribute("data-value"), 10) * 10, // make the imdb rating out of 100
      metascore: metaTag ? parseFloat(metaTag.innerHTML, 10) : 0, // if there is a metascore attached
      href: titleTag.getAttribute("href").replace("?ref_=adv_li_tt", ""),
    };
  })
  .filter((item) => item.metascore > 0); // remove any film without a metascore

// copy to clipboard
copy(object);
