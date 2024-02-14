import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import img from "../assets/images/logo dvn.webp";
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
            alt="DijanaVN Logo"
            style={{ height: "4.8vw", margin: "5px" }}
          />
        </Link>
      </div>
      <p className="mb-0 right-reserved text-wrap right-reserved">
        &copy; 2023 DijanaVN. All Rights Reserved.
      </p>
      <div className="d-flex align-items-center">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          style={iconStyle}
        >
          <a
            href="https://github.com/DijanaVN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub color="yellow" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          style={iconStyle}
        >
          <a
            href="https://www.linkedin.com/in/dijana-veljanoska-nikoloska-05679487/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin color="yellow" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          style={iconStyle}
        >
          <a href="mailto:veljanovskadijana@yahoo.com">
            <IoMdMail color="yellow" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
