import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleCollectionFilm from "./SingleCollectionFilm";
import Col from "react-bootstrap/Col";

function MainComponent() {
  return (
    <Container fluid className="bg-dark text-white pt-5 h-100">
      <Row className="g-3">
        <Col>
          <h3 className="text-light text-start ">My Collections Film</h3>
        </Col>
      </Row>
      <Row className="g-3  my-3 ">
        <h5 className="text-white-50 text-start my-3 ">Harry Potter</h5>
        <SingleCollectionFilm collectionName="Harry Potter" />
      </Row>
      <Row className="g-3 my-3 ">
        <h5 className="text-white-50 text-start my-3 ">Star Wars</h5>
        <SingleCollectionFilm collectionName="Star Wars" />
      </Row>
      <Row className="g-3 mt-3 ">
        <h5 className="text-white-50 text-start my-3 ">Lord of the Rings</h5>
        <SingleCollectionFilm collectionName="Marvel" />
      </Row>
    </Container>
  );
}

export default MainComponent;
