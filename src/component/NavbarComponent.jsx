import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function BasicExample() {
  return (
    <Navbar expand="md" className="bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="position-absolute end-0 d-md-none"
        />
        <Row className="justify-content-between align-items-center w-100">
          <Col className="d-flex ">
            <Row>
              <Col sm={12} md={2} lg={2}>
                <Navbar.Brand href="#home">
                  <Image
                    src="../assets/netflix_logo.png"
                    width="100"
                    height="30"
                  />
                </Navbar.Brand>
              </Col>
              <Col className="ms-md-2 ">
                <Navbar.Collapse id="basic-navbar-nav" className="">
                  <Nav className="me-0">
                    <Nav.Link href="#home" active>
                      Home
                    </Nav.Link>
                    <Nav.Link href="#link">TV Shows</Nav.Link>
                    <Nav.Link href="#link">Movies</Nav.Link>
                    <Nav.Link href="#link">Recently Added</Nav.Link>
                    <Nav.Link href="#link">My List</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={3} lg={4}>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className=" me-0">
                <Row className="align-items-center">
                  <Col className="p-0 col-3">
                    <Nav.Link href="#home" active>
                      <i className="bi bi-search"></i>
                    </Nav.Link>
                  </Col>
                  <Col className="p-0 col-3" sm={3}>
                    <Nav.Link href="#link">KIDS</Nav.Link>
                  </Col>
                  <Col className="p-0 col-3" sm={3}>
                    <Nav.Link href="#link">
                      <i className="bi bi-bell-fill me-3"></i>
                    </Nav.Link>
                  </Col>
                  <Col className="p-0 col-3" sm={3}>
                    <Nav.Link href="#link">
                      <Image src="../assets/avatar.png" width="40" />
                    </Nav.Link>
                  </Col>
                </Row>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
