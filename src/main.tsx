import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "../src/index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

AOS.init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
