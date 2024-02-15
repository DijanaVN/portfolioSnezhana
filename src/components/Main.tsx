import React from "react";
import img2 from "../assets/images/sneze.jpg";
import { TypingAnimation } from "./TypingMotion";
import { GrLinkedin } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";

const Main = () => {
  const mainStyle = {
    background: `url(${img2}) no-repeat right center/25% auto`,
    display: "flex",
    alignItems: "center",
    opacity: 1,
  };

  const frameStyle = {
    background: "linear-gradient(to bottom, gray, black)",
    padding: "1vw",
    borderRadius: "10px",
    height: "100%",
    opacity: 0.8,
  };

  const iconStyle = {
    margin: "1vw",
    fontSize: "3vw",
  };

  return (
    <div className="container-fluid" style={frameStyle}>
      <div className="container-fluid img-height " style={mainStyle}>
        <div className="text-shadow-main ">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            style={iconStyle}
          >
            <a
              href="https://www.linkedin.com/in/snezhana-kachaniklik-bb7576220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin color="yellow" />
            </a>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            style={iconStyle}
          >
            <a href="mailto: snezana_kacaniklik@yahoo.com">
              <IoMdMail color="yellow" />
            </a>
          </div>
        </div>
        <div className="col-6 text-light fonts ms-md-5 lh-lg  text-wrap main-text">
          <TypingAnimation
            text={" Hello there! I'm Snezhana, your UI/UX designer."}
          ></TypingAnimation>
        </div>
      </div>
    </div>
  );
};
export default Main;
