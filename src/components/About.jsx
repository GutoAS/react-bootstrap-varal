import React from "react";
import Vector4 from "../assets/Vector-4.png";
import Vector3 from "../assets/Vector-3.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Group34 from "../assets/Group34.png";
import Vector5 from "../assets/Vector-5.png";
import Vector6 from "../assets/Vector-6.png";
import Vector7 from "../assets/Vector-7.png";
import Vector8 from "../assets/Vector-8.png";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-12 col-md-7">
          <h4
            style={{
              maxWidth: "400px",
              borderLeftStyle: "solid",
              borderColor: "#585cec",
              borderWidth: "10px",
            }}
            className="p-3"
          >
            Read about our blogs for more information on our processes
          </h4>
          <div className="d-flex my-5">
            <div
              className="p-4 "
              style={{
                borderStyle: "solid",
                borderColor: "blue",
                borderWidth: "1px",
                borderRadius: "10px",
              }}
            >
              <img src={Vector4} className="" alt="" />
            </div>
            <div className="pt-2 ps-4">
              <h4 style={{ maxWidth: "300px" }}>
                How to start a company formation in Dubai
              </h4>
              <p style={{ color: "#585cec" }}>5 Minutes</p>
            </div>
          </div>
          <div className="d-flex my-5">
            <div
              className="p-4 "
              style={{
                borderStyle: "solid",
                borderColor: "#585cec",
                borderWidth: "1px",
                borderRadius: "10px",
              }}
            >
              <img src={Vector4} className="" alt="" />
            </div>
            <div className="pt-2 ps-4">
              <h4 style={{ maxWidth: "370px" }}>
                How to start an Offshore company formation in Dubai
              </h4>
              <p style={{ color: "blue" }}>5 Minutes</p>
            </div>
          </div>
          <div className="d-flex my-5">
            <div
              className="p-4 "
              style={{
                borderStyle: "solid",
                borderColor: "#585cec",
                borderWidth: "1px",
                borderRadius: "10px",
              }}
            >
              <img src={Vector4} className="" alt="" />
            </div>
            <div className="pt-2 ps-4">
              <h4 style={{ maxWidth: "350px" }}>
                SEO Dubai: Who benefits the most?
              </h4>
              <p style={{ color: "blue" }}>5 Minutes</p>
            </div>
          </div>
          <h4
            style={{
              maxWidth: "400px",
              borderLeftStyle: "solid",
              borderColor: "#585cec",
              borderWidth: "10px",
            }}
            className="p-3"
          >
            Sadisfied We are When Our Customers Are Happy
          </h4>

          <div className="d-flex my-5">
            <div>
              <img src={Vector3} alt="" />
            </div>
            <div className="ms-4">
              <p style={{ maxWidth: "290px" }}>
                <RiDoubleQuotesL />I am very happy with them. I&apos;ll continue
                to use their services in future & highly recommend them to
                anyone. <RiDoubleQuotesR />
              </p>
              <p className="fw-bold">Muhib Abrar</p>
            </div>
          </div>
          <div className="d-flex my-4">
            <div>
              <img src={Vector3} alt="" />
            </div>
            <div className="ms-4">
              <p style={{ maxWidth: "290px" }}>
                <RiDoubleQuotesL />
                Rama has a high level of integrity, intellect, knowledge of his
                business, resourcefulness and humanity.
                <RiDoubleQuotesR />
              </p>
              <p className="fw-bold">Colin Saldahna</p>
            </div>
          </div>
          <div className="d-flex my-4">
            <div>
              <img src={Vector3} alt="" />
            </div>
            <div className="ms-4">
              <p style={{ maxWidth: "290px" }}>
                <RiDoubleQuotesL />
                Your advise was so complete that I actually realized how
                beneficial this would be to my clients and my business
                <RiDoubleQuotesR />
              </p>
              <p className="fw-bold">Mark Swann</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <h4
            style={{
              maxWidth: "400px",
              borderLeftStyle: "solid",
              borderColor: "#585cec",
              borderWidth: "10px",
            }}
            className="p-3 d-none d-md-block "
          >
            Get to know the whole us and more of our services
          </h4>
          <div className="row my-4">
            <div className="col-6 col-md-12 ps-4">
              <div>
                <h4>Services</h4>
                <p style={{ color: "grey" }}>Products</p>
                <p style={{ color: "grey" }}>Solutions</p>
                <p style={{ color: "grey" }}>Assurance</p>
                <p style={{ color: "grey" }}>FAQ</p>
                <p style={{ color: "grey" }}>Working at Varal-Singhania</p>
              </div>
              <div className="my-5">
                <h4>Policies</h4>
                <p style={{ color: "grey" }}>Privacy Policy</p>
                <p style={{ color: "grey" }}>Terms & Conditions</p>
              </div>
            </div>
            <div className="col-6 col-md-12 ps-4">
              <div className="">
                <h4>About</h4>
                <p style={{ color: "grey" }}>About Us</p>
                <p style={{ color: "grey" }}>Contact Us</p>
              </div>
              <div className="my-5">
                <h4>Address</h4>
                <p style={{ color: "grey" }}>608 One Lake Plaza, Cluster T,</p>
                <p style={{ color: "grey" }}>Al Sarayat Street, Jumeirah</p>
                <p style={{ color: "grey" }}>Lake Towers</p>
                <p style={{ color: "grey" }}>Dubai</p>
                <p style={{ color: "grey" }}>United Arab Emirates</p>
              </div>
              <div className="d-none d-md-block ">
                <p style={{ color: "grey" }}>Office Hours: Sunday to</p>
                <p style={{ color: "grey" }}>Thursday 8:30 AM to 6:30 PM</p>
                <p style={{ color: "grey" }}>[GMT+4]</p>
                <p style={{ color: "grey" }}>M: +971 55 794 2016</p>
                <p style={{ color: "grey" }}>O: +971 4 447 2061</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-12">
              <h4>Subscribe to our Newsletter</h4>
              <p
                className="d-none d-md-block"
                style={{ color: "grey", maxWidth: "300px" }}
              >
                Sunbscribe now to receive our Newsletters about amazing
                opportunities in Dubai
              </p>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Enter email address"
                />
                <span className="" id="inputGroup-sizing-lg">
                  <img src={Group34} alt="" />
                </span>
              </div>
            </div>
            <div
              className="col-6 col-md-12 d-flex justify-content-between my-2 my-md-5"
              style={{ maxWidth: "60%" }}
            >
              <div>
                <img src={Vector5} alt="" />
              </div>
              <div>
                <img src={Vector6} alt="" />
              </div>
              <div>
                <img src={Vector7} alt="" />
              </div>
              <div>
                <img src={Vector8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center my-5" style={{ color: "grey" }}>
          Agostinho Soberano 2023 &copy; All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default About;
