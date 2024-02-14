import React, { useState } from "react";
import img from "../assets/images/logo dvn.webp";
import { motion } from "framer-motion";
import { Hover } from "./HoverMotion";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar className="navbar ps-5 pe-5" expand="md" bg="dark" variant="dark">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 200, 200, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        className="navbar-brand"
      >
        <Link to={"/"}>
          <img
            src={img}
            className="bd-placeholder-img logo-sign object-fit-cover border rounded"
            alt="Logo DijanaVN"
          
          />
        </Link>
      </motion.div>{" "}
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="navbar-toggler-icon"></span>{" "}
      </Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={`justify-content-end ${expanded ? "show" : ""}`}
      >
        <Nav className="ml-auto ">
          <ul className="navbar-nav text-font-size-nav text-white pe-5 fonts2">
            <li className="nav-item pe-5">
              <Hover>
                <Link to={"/about"} className="nav-link " aria-current="page">
                  About
                </Link>
              </Hover>
            </li>
            <li className="nav-item pe-5">
              <Hover>
                <Link to={"/projects"} className="nav-link">
                  Projects
                </Link>
              </Hover>
            </li>
            <li className="nav-item">
              {" "}
              <Hover>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </Hover>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
