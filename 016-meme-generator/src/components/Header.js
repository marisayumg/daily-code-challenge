import React from "react";
import trollface from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--image" src={trollface} alt="Troll face" />
      <h2 className="header--title">Meme generator</h2>
    </header>
  );
}
