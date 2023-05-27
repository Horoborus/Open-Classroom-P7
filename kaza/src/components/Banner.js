import React from "react";
import "../Sass/Layout/Banner.scss";
import "../Assets/background.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__background">
        <div className="banner__image">
          <img src={require("../Assets/background.png")} alt="" />
        </div>
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
