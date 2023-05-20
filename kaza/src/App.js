import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./styles/App.css";
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
