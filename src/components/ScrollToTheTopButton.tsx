import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showBackToTop && (
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          className="btn btn-light rounded-circle d-md-none text-font-size-des"
          style={{
            position: "fixed",
            bottom: "4rem",
            right: "2vw",
            zIndex: 1000,
            color: "purple",
          }}
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up"> Back to Top</i>
        </button>
      )}{" "}
      {showBackToTop && (
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          className="btn btn-light rounded-circle d-none d-md-block d-xl-none text-font-size-des"
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "2vw",
            zIndex: 1000,
            color: "purple",
          }}
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up">Back to Top</i>
        </button>
      )}
      {showBackToTop && (
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          className="btn btn-light rounded-circle d-none d-xl-block text-font-size-des"
          style={{
            position: "fixed",
            bottom: "8.5rem",
            right: "2vw",
            zIndex: 1000,
            color: "purple",
          }}
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up">Back to Top</i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
