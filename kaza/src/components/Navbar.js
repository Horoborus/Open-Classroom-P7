import React from "react";
import "../Sass/Layout/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav__check" />

      <div className="nav__logo">
        <img src="logo.png" className="logo" alt="" />
      </div>
      <div className="nav__btn">
        <label htmlFor="nav__check">
          <span />
          <span />
          <span />
        </label>
      </div>

      <div className="nav__links">
        <Link to="/">
          <div>Accueil</div>
        </Link>

        <Link to="/about">
          <div>A Propos</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
