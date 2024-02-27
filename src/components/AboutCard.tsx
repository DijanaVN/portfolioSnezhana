import React from "react";
import { Link } from "react-router-dom";

interface AboutProp {
  title: string;
  text?: string;
  text1?: string;
  list?: string[];
  link?: string;
  img: string;
  index: number;
}

const AboutCard = ({
  title,
  text,
  list,
  link,
  img,
  index,
  text1,
}: AboutProp) => (
  <div className="row p-3 p-sm-5 ">
    <div
      className="card mb-3"
      data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
      data-aos-duration="1500"
    >
      <div className="row no-gutters">
        <div
          className={`col-lg-6 d-flex justify-content-center align-items-center order-lg-${
            index % 2 === 0 ? 1 : 2
          }`}
        >
          <img
            src={img}
            className="card-img img-fluid pt-2 pb-2"
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className={`col-lg-6 d-flex justify-content-center align-items-center order-lg-${
            index % 2 === 0 ? 2 : 1
          }`}
        >
          <div className="card-body">
            <p className="card-title text-font-size fw-bold">{title}</p>
            {text && (
              <div>
                <p className="card-text text-start fw-semibold ps-md-5 mt-3 mb-3 lh-lg text-font-size-des  ">
                  {text}
                </p>
                <p className="card-text text-start fw-semibold ps-md-5 mt-3 mb-3 lh-lg text-font-size-des  ">
                  {text1}
                </p>
              </div>
            )}
            {list && (
              <ul className="list-group fw-semibold list-group-flush text-font-size-des ps-md-5 mt-3 mb-3 lh-lg  ">
                {list.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {link && (
              <a href={link} className="card-link text-font-size-btn fw-bold">
                {title.includes("Let's Connect")
                  ? "Contact link"
                  : title.includes("About Me")
                  ? "Certificates"
                  : title.includes("Career Evolution")
                  ? "My Resume"
                  : title.includes("Journey into UI/UX Design")
                  ? "My Projects"
                  : ""}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutCard;
