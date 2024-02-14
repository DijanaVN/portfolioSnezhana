import React, { useEffect } from "react";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import About from "./../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid  " style={backgroundStyle}>
      <About />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;
