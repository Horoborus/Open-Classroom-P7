import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

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
        <Link to="/about">
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
