import React from "react";
import dungeon from "../assets/dungeon.png";
import Ellipse19 from "../assets/Ellipse19.png";
import Vector2 from "../assets/Vector-2.png";
import Ellipse24 from "../assets/Ellipse24.png";
import Vector1 from "../assets/Vector-1.png";
import ILLUSTRATION031 from "../assets/ILLUSTRATION031.png";
import Vector from "../assets/Vector.png";
import Ellipse14 from "../assets/Ellipse14.png";
import Group2 from "../assets/Group-2.png";
import Group from "../assets/Group.png";
import Ellipse8 from "../assets/Ellipse8.png";
import Ellipse9 from "../assets/Ellipse9.png";
import Group1 from "../assets/Group-1.png";

const Services = () => {
  return (
    <section id="services">
      <div className="text-center mx-auto w-50">
        <p className="purple noto">
          Watch the video about UAE or Offshore Company Registration
        </p>

        <h4 className="fw-bold">
          <span
            style={{
              borderBottomWidth: "6px",
              borderBottomStyle: "solid",
              borderBottomColor: "rgb(255, 187, 0)",
            }}
          >
            Dedicated
          </span>{" "}
          <br />
          to our mission we are
        </h4>
        <p className="gray fw-normal">
          Our services include Company Formation & Renewals, Trust and
          Fiduciary, Tax Residency Setup with Family, Bank Accounts, Remote
          Management, Stock Trading Platforms, Ownership Solutions.
        </p>
      </div>

      <div className="row mt-4 pt-4">
        <div className="col-lg-4 mt-4 text-center text-sm-start">
          <div>
            <img className="pb-2 " src={dungeon} style={{ height: "45px" }} />\
          </div>

          <p className="pt-2 pb-2 pr-r">UAE Free Zone Company</p>
          <p className="gray noto">
            Your registration agent will answer all your questions and help you
            to reach a conclusion that meets your objectives of investing in the
            UAE.
          </p>
          <p className="text-warning mt-4">Get Started!</p>
          <img className="m-4" src={Ellipse19} />
        </div>

        <div className="col-lg-4 mt-4 text-center text-sm-start">
          <img className="pb-2" src={Vector2} style={{ height: "45px" }} />
          <p className="pt-2 pb-2 pr-r">Dubai Local Companies</p>
          <p className="gray noto">
            The Dubai LLC formation documents are actually articles of
            organization or a certificate of organization. You can get yours
            today.
          </p>
          <p className="text-warning">Get Started!</p>
          <img className="mx-4" src={Ellipse24} />
        </div>

        <div className="col-lg-4 mt-4 text-center text-sm-start">
          <img className="pb-2" src={Vector1} style={{ height: "45px" }} />
          <p className="pt-2 pb-2 pr-r">Offshore Companies</p>
          <p className="gray noto">
            You can regisater an offshore company and open its bank account in
            Dubai. Your agent will help you along all the process.
          </p>
          <p className="text-warning">Get Started!</p>
        </div>
      </div>

      <div className="row p-4 m-4">
        <div className="col-lg-6">
          <p>
            Learn the ways in which you can benefit from a UAE/Offshore Company.
            Then get started on fulfilling your UAE dream.
          </p>

          <p className="purple">Claim a Free Quote</p>

          <br />

          <div className="col-lg-8 graybox p-4">
            <img className="mx-auto d-block" src={ILLUSTRATION031} />
            <p className="pt-4 pb-2">Bank Account Setup</p>
            <p className="gray noto">
              There are many banks in the United Arab Emirates [UAE]. Both
              locally owned and branches of multinational ones. Foreign banks
              adjust according to their parent’s strategies and have changed
              local requirements overnight in the past. But we are here to help
              you.
            </p>
            <p className="purple noto">
              Learn more
              <img
                src={Vector}
                style={{ height: "20px", paddingLeft: "5px" }}
              />
            </p>
          </div>

          <img className="m-2 p-2" src={Ellipse14} />

          <div className="col-lg-8 graybox p-4 mt-4">
            <img className="mx-auto d-block" src={Group2} />
            <p className="pt-4 pb-2">UAE Company Visas</p>
            <p className="gray noto">
              Your application for visas is critical especially if you intend to
              move to Dubai. This becomes even more urgent if your family will
              also move with you. All the paperwork is done on your behalf
              smoothly so that you may only focus on doing what matters most to
              you.
            </p>
            <p className="purple noto">
              Learn more
              <img
                src={Vector}
                style={{ height: "20px", paddingLeft: "5px" }}
              />
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="graybox p-4 mt-2">
            <img className="mx-auto d-block" src={Group} />
            <p className="pt-4 pb-2">Advice & Guidance</p>
            <p className="gray noto">
              All activities in the UAE are licensed. Whether manufacturing,
              finance, trading, marketing, consultancy or restaurants. In some
              countries only manufacturing is licensed. In others there is a
              threshold below which business are encouraged. Get our insightfull
              guidance today.
            </p>
            <p className="purple noto">
              Learn more
              <img
                src={Vector}
                style={{ height: "20px", paddingLeft: "5px" }}
              />
            </p>
          </div>

          <img className="m-2 p-2" src={Ellipse8} />
          <img className="m-2 p-2" src={Ellipse9} />

          <div className="graybox p-4 mt-2">
            <img className="mx-auto d-block" src={Group1} />
            <p className="pt-4 pb-2">Registration Document Preparation</p>
            <p className="gray noto">
              Several documents must be prepared to start the process of
              registering a new company in the United Arab Emirates. Be it a
              Dubai local company, a free zone one or an offshore entity. Your
              registered agent is dedicated to get this done for you for a
              seamless process.
            </p>
            <p className="purple noto">
              Learn more
              <img
                src={Vector}
                style={{ height: "20px", paddingLeft: "5px" }}
              />
            </p>
          </div>

          <p className="my-4 pt-4">
            We have gathered a team of professionals to craft adequate services
            you can rely on for a friction free setup in UAE.
          </p>

          <p className="purple noto">
            More about our services
            <img src={Vector} style={{ height: "20px", paddingLeft: "5px" }} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
