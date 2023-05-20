import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />

      <div className="nav-logo">
        <img src="logo.png" className="logo" alt="" />
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>

      <div className="nav-links">
        <a href="//github.io/jo_geek" target="_blank" rel="noopener noreferrer">
          Accueil
        </a>
        <a
          href="http://stackoverflow.com/users/4084003/"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Propos
        </a>
      </div>
    </div>
  );
}

export default Navbar;
