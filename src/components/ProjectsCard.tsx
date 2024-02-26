import React from "react";
import { Link } from "react-router-dom";

interface ProjectProp {
  title: string;
  img: string;
  description?: string;
  siteLink: string;
  color: string;
}
const ProjectCard = ({
  title,
  img,
  description,
  siteLink,
  color,
}: ProjectProp) => (
  <div className="col mt-xxl-5 ">
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className={`card h-100 text-bg-light p-2 text-black`}
    >
      <div className="p-2 h-100">
        <a href={siteLink} target="_blank" rel="noopener noreferrer">
          <img src={img} className="card-img-top " alt={`image of ${title}`} />
        </a>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-font-size fw-bold pb-4">{title}</h5>
        <p className="card-text  text-font-size-des pb-4">{description}</p>
        <div className="d-flex justify-content-between ps-xl-5 pe-xl-5">
          <a
            href={siteLink}
            className={`btn btn-${color} text-font-size-btn-project fw-semibold`}
            rel="noopener"
            target="_blank"
          >
            {`${title.split("-")[0]}-Link`}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
