import React from "react";
import Ellipse16 from "../assets/Ellipse16.png";
import Ellipse21 from "../assets/Ellipse21.png";
import Ellipse11 from "../assets/Ellipse11.png";
import ILLUSTRATION from "../assets/ILLUSTRATION.png";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <section id="home">
      <div className="d-flex justify-content-sm-end justify-content-center">
        <input
          className="inputSearch "
          type="search"
          placeholder="Search a Term | Topic"
        />
      </div>

      <img src={Ellipse16} />
      <img src={Ellipse21} />
      <img src={Ellipse11} />

      <div className="row w-100">
        <p className="purple noto">Claim a Free Quote</p>

        <div className="col-lg-6">
          <h1 className="blk-bold">
            <span>Get started</span> on fullfilling your Dubai or UAE dream
          </h1>
          <p className="purple noto">UAE & Offshore Company</p>
          <p className="gray fw-bold">
            We provide you with information about UAE or Offshore Company
            Registration & help you setup your company with a bank account and
            visas
          </p>
          <br />
          <div className="d-flex justify-content-sm-end justify-content-center">
            <Button variant="outline-primary" size="lg">
              Start a Company
            </Button>
            <Button variant="outline-primary" size="lg">
              Renew a Company
            </Button>
          </div>
        </div>
        <img className="col-lg-6 mt-2" src={ILLUSTRATION} />
      </div>
    </section>
  );
};

export default Home;
