import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterComponent() {
  return (
    <Container fluid className="bg-dark  text-white pt-5 ">
      <div className="w-50 mx-auto">
        <Row>
          <Col className="col-12 col-lg-6 col-xl-3">
            <Row>
              <Col>
                <i className="bi bi-facebook" />
              </Col>
              <Col>
                <i className="bi bi-twitter" />
              </Col>
              <Col>
                <i className="bi bi-instagram" />
              </Col>
              <Col>
                <i className="bi bi-youtube" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="row row-cols-1 row-cols-md-12">
          <Col className="col-6 col-md-3 my-3">
            <h6>Audio and Subtitles</h6>
            <h6>Media Center</h6>
            <h6>Privary</h6>
            <h6>Contact Us</h6>
          </Col>
          <Col className="col-6 col-md-3 my-3">
            <h6>Audio Description</h6>
            <h6>Investor Relations</h6>
            <h6>Legal Notices</h6>
          </Col>
          <Col className="col-6 col-md-3 my-3">
            <h6>Help Center</h6>
            <h6>Jobs</h6>
            <h6>Coockie Preferences</h6>
          </Col>
          <Col className="col-6 col-md-3 my-3">
            <h6>Gift Cards</h6>
            <h6>Terms of Use</h6>
            <h6>Corporate Information</h6>
          </Col>
          <Row>
            <Col className="col-12">
              <button
                type="button"
                className="btn btn-dark border border-white bg-dark mb-3"
              >
                Service Code
              </button>
            </Col>
            <Col className="col-12">
              <span>
                &copy; 1997-<span>Copyright {new Date().getFullYear()}</span>
                Netflix,Inc. &#123;i-0d00fcda2fdf9c0de&#125;
              </span>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
}

export default FooterComponent;
