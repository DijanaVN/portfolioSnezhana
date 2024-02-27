import { useEffect } from "react";

import img17 from "../assets/images/sertificat2.webp";
import img1 from "../assets/images/sertificat1.jpg";
import img2 from "../assets/images/1_Figma_SKALA.webp";
import img3 from "../assets/images/2_Photoshop_Figma_SKALA.webp";
import img4 from "../assets/images/3_WordPress_Elementor_SKALA.webp";
import img5 from "../assets/images/4_Top Comment NCL.webp";
import img6 from "../assets/images/5_Team Award NCL.webp";
import img7 from "../assets/images/6_Beauty STB Cert.webp";
import img8 from "../assets/images/7_Watch Training 11.11.2015.jpg";
import img9 from "../assets/images/8_CCNA Fundamentals.webp";
import img10 from "../assets/images/9_CCNA Routing.webp";

import CertificateGrid from "./CertificateGrid";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const setup: React.CSSProperties = {
    height: "500px",
    width: "100%",
    objectFit: "contain",
  };

  const certificateImages = [
    img1,
    img17,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
          {certificateImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`col${
                certificateImages.length % 2 !== 0 &&
                certificateImages.length - 1 === index
                  ? " offset-md-3 offset-lg-3 offset-xl-3"
                  : ""
              }`}
            >
              <CertificateGrid img={imgSrc} setup={setup} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
