import React from "react";

interface PropCertificate {
  img: string;
  setup: React.CSSProperties;
}

const CertificateGrid = ({ img, setup }: PropCertificate) => (
  <div
    className="col border border-3 mt-3 mb-3 d-flex justify-content-center align-items-center"
    data-aos="zoom-in"
    data-aos-duration="1500"
  >
    <img
      src={img}
      className="card-img img-fluid pt-2 pb-2"
      alt="Card Image of certificate belongs to Dijana Veljanoska Nikoloska"
      style={setup}
    />
  </div>
);
export default CertificateGrid;
