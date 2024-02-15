import React, { useEffect } from "react";
import img from "../assets/images/watercolorspink.webp";
import Contact from "./../components/Contact";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid" style={backgroundStyle}>
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactPage;
