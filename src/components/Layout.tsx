import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
const Layout = () => {
  return (
    <>
      <div className="bg-primary sticky-top">
        <NavBar />
      </div>
      <Container fluid>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <div className="bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
