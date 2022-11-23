import React, { useState } from "react";
import "./App.css";
import mushroom1 from "./assets/mushroom1.jpg";
import mushroom2 from "./assets/mushroom2.jpg";
import mushroom3 from "./assets/mushroom3.jpg";
import mushroom4 from "./assets/mushroom4.jpg";

const images = [mushroom1, mushroom2, mushroom3, mushroom4];

function App() {
  // track slide number
  const [currentImage, setCurrentImage] = useState(0);
  // change to next image function
  const nextImage = () => {
    setCurrentImage((currentImage) => {
      if (currentImage < images.length - 1) {
        return currentImage + 1;
      } else {
        return (currentImage = 0);
      }
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Patterns</h1>
        <h2>
          A photography project
          <br /> on mycellium
        </h2>
      </div>
      <div className="gallery" onClick={nextImage}>
        <img
          src={images[currentImage]}
          alt="Oyster mushrooms growing in a log"
        />
      </div>
    </div>
  );
}

export default App;
