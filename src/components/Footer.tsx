import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import img from "../assets/images/SK Designs Logo@72x.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const iconStyle = {
    fontSize: "2.8vw",
    margin: "8px",
  };

  return (
    <footer className="bg-dark text-white text-center py-1 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Link to={"/"}>
          <img
            className="bd-placeholder-img object-fit-cover border rounded"
            src={img}
            alt="Snezhana Logo"
            style={{ height: "4.8vw", margin: "5px" }}
          />
        </Link>
      </div>
      <p className="mb-0 right-reserved text-wrap right-reserved">
        &copy; 2024 SK Designs. All Rights Reserved.
      </p>
      <div className="d-flex align-items-center">
        <div style={iconStyle}>
          <a
            href="https://www.linkedin.com/in/snezhana-kachaniklik-bb7576220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin color="gray" />
          </a>
        </div>
        <div style={iconStyle}>
          <a href="mailto:snezana_kacaniklik@yahoo.com">
            <IoMdMail color="gray" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
