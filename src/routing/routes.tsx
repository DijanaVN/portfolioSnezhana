import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import Layout from "../components/Layout";
import AboutPage from "./../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ProjectsPage from "./../pages/ProjectsPage";
import ContactPage from "./../pages/ContactPage";
import CV from "./../pages/Resume";
import CertificatesPage from "./../pages/CertificatesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/cv", element: <CV /> },
      { path: "/certificates", element: <CertificatesPage /> },
    ],
  },
]);
export default router;
