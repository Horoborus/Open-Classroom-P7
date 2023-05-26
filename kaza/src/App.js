import React from "react";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

import "../src/Sass/base.scss";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
