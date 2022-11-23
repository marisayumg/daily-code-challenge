import React, { useState } from "react";
import "./App.css";
import mushroom1 from "./assets/mushroom1.jpg";
import mushroom2 from "./assets/mushroom2.jpg";
import mushroom3 from "./assets/mushroom3.jpg";
import mushroom4 from "./assets/mushroom4.jpg";
import mushroom5 from "./assets/mushroom5.jpg";
import mushroom6 from "./assets/mushroom6.jpg";

const images = [
  mushroom1,
  mushroom2,
  mushroom3,
  mushroom4,
  mushroom5,
  mushroom6,
];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <label htmlFor="images-loaded">Loading images...</label>
    <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
  </aside>
);

const App = () => {
  // track slide number
  const [currentImage, setCurrentImage] = useState(0);
  // track number of images loaded
  const [numLoaded, setNumLoaded] = useState(0);

  // change to next image function
  const nextImage = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      /* if (currentImage < images.length - 1) {
          return currentImage + 1;
        } else {
          return (currentImage = 0);
        } */
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  // keep track and add how many images have been loaded
  const handleLoading = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <main>
      <header>
        <h1>Patterns</h1>
        <h2>
          A photography project
          <br /> on <span>mycellium</span>
        </h2>
      </header>
      <figure>
        {/* convert number of images loaded into a percentage */}
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={nextImage}
            onLoad={handleLoading}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </main>
  );
};

export default App;
