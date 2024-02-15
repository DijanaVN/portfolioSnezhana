import React, { useRef } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import img from "../assets/images/rosebackground.webp";
import About from "../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";
import Projects from "./../components/Projects";
import { TypingAnimation } from "./../components/TypingMotion";
import useInViewport from "../hooks/useInViewport";
import Contact from "../components/Contact";

const HomePage = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const inViewportAbout = useInViewport(aboutRef);
  const inViewportProjects = useInViewport(projectsRef);
  const inViewportContact = useInViewport(contactRef);

  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid  " style={backgroundStyle}>
      <div className=" main-padding">
        <Main />
      </div>
      <div
        className="text-center text-dark fonts  mb-5 fs-1 lh-lg "
        ref={aboutRef}
      >
        {inViewportAbout && <TypingAnimation text={" ABOUT SECTION"} />}
      </div>
      <div>
        <About />
      </div>
      <div
        className="text-center text-dark fonts pt-5 pb-5 mb-5 fs-1 lh-lg"
        ref={projectsRef}
      >
        {inViewportProjects && <TypingAnimation text={" PROJECTS"} />}
      </div>
      <div className="m-3">
        <Projects />
      </div>

      <div
        className="text-center text-dark fonts mt-5 pt-5 fs-1 lh-lg "
        ref={contactRef}
      >
        {inViewportContact && <TypingAnimation text={" CONTACT ME"} />}
      </div>
      <div>
        <Contact />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
