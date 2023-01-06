import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const CardIncludeList = () => {
  return (
    <ul className="card-include-items">
      <li className="">
        <BsCheckCircle />
        <p>Attestation Charges</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Registered Agent</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Registered Office</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Varal Administrative</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Preparing Statutory File</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Liasing with Registration Authorities</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Due Diligence Appraisal</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Keeping The Register</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Seal Charges</p>
      </li>
      <li className="">
        <BsCheckCircle />
        <p>Certificate of Good Standing</p>
      </li>
    </ul>
  );
};

export default CardIncludeList;
