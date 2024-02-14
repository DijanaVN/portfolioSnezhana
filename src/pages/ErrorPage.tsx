import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import img from "../assets/images/dynamic-wang-cD-_fbY6yww-unsplash.webp";

const ErrorPage = () => {
  const error = useRouteError();
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={backgroundStyle}
    >
      <div className="text-center text-danger">
        <NavBar />
        <h2 className="fw-bold">Oops</h2>
        <h5 className="mt-3 fw-bold ">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </h5>
      </div>
    </div>
  );
};

export default ErrorPage;
