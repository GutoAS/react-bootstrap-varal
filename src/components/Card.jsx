import React from "react";
import CardCarousel from "./CartCarousel";

const Card = () => {
  return (
    <section id="card" className="my-5">
      <div className="text-center mx-auto w-50 d-none d-md-block">
        <h4 className="fw-bold ">
          Most{" "}
          <span
            style={{
              borderBottomWidth: "6px",
              borderBottomStyle: "solid",
              borderBottomColor: "rgb(255, 187, 0)",
            }}
          >
            {" "}
            popular affordable pricing{" "}
          </span>{" "}
          per
          <br />
          jurisdictions are brought to you to <br />
          kick off your adventure.
        </h4>
      </div>
      <div>
        <CardCarousel />
      </div>
    </section>
  );
};

export default Card;
