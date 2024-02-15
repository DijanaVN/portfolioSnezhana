import React, { useEffect } from "react";
import img from "../assets/images/watercolorspink.webp";
import Projects from "./../components/Projects";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="card-group p-5 " style={backgroundStyle}>
      <Projects />
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectsPage;
