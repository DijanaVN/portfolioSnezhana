import React from "react";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import Certificates from "./../components/Certificates";
import ScrollToTopButton from "../components/ScrollToTheTopButton";

const CertificatesPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid p-md-5 " style={backgroundStyle}>
      <Certificates />
      <ScrollToTopButton />
    </div>
  );
};

export default CertificatesPage;
