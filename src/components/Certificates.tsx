import { useEffect } from "react";
import img1 from "../assets/images/certificate-of-completion-for-react-18-for-beginners.webp";
import img2 from "../assets/images/1-react-18-for-beginners part 2.webp";
import img3 from "../assets/images/certificate-of-completion-for-object-oriented-programming-in-javascript.webp";
import img4 from "../assets/images/certificate-of-completion-for-javascript-basics.webp";
import img5 from "../assets/images/UC-ffd482eb-be2f-4733-9b99-bc3b98e0ec63.webp";
import img6 from "../assets/images/UC-c3ad728f-3843-4f37-8f04-c4b7d2779df7.webp";
import img7 from "../assets/images/UC-c42d4dc8-37db-44a7-b38b-f458db389f26.webp";
import img8 from "../assets/images/e18db421-8a31-401c-8ca6-5a6fb9164e19.webp";
import img9 from "../assets/images/40ec507c-8edc-44b3-8b04-b6d543a91329.webp";
import img10 from "../assets/images/54e8b293-246c-4096-b9e5-00b8ad82b986.webp";
import img11 from "../assets/images/4cb91d04-4865-4190-8f90-576d3636a0b0.webp";
import img12 from "../assets/images/6358942a-6ce8-471e-b0c0-c504f6eb2b70.webp";
import CertificateGrid from "./CertificateGrid";
import img13 from "../assets/images/Microsoft-365.webp";
import img14 from "../assets/images/Excel-pivot-table.webp";
import img15 from "../assets/images/Scrum-the-basics.webp";
import img16 from "../assets/images/Scrum-Advanced.webp";
import img17 from "../assets/images/CertificateOfCompletion_Learning Jira Cloud Edition.webp";
import img18 from "../assets/images/CertificateOfCompletion_Learning Jira Software.webp";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const setup: React.CSSProperties = {
    maxHeight: "500px",
    objectFit: "cover",
  };

  const certificateImages = [
    img17,
    img18,
    img13,
    img14,
    img15,
    img16,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

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
