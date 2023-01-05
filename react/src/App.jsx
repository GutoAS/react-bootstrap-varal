import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
