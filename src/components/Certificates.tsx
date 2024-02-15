import { useEffect } from "react";

import img17 from "../assets/images/sertificat1.jpg";
import CertificateGrid from "./CertificateGrid";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const setup: React.CSSProperties = {
    maxHeight: "500px",
    objectFit: "cover",
  };

  const certificateImages = [img17];

  return (
    <>
      <div className="container ">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
          {certificateImages.map((imgSrc, index) => (
            <CertificateGrid key={index} img={imgSrc} setup={setup} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
