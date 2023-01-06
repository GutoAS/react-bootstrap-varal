import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Card from "./components/Card";

function App() {
  return (
    <div className="container-lg">
      <Navbar />
      <Home />
      <Services />
      <Card />
      <About />
    </div>
  );
}

export default App;
