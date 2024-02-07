import { Container, Row } from "react-bootstrap";
import SingleCollectionFilm from "./SingleCollectionFilm";

const TvShows = () => {
  return (
    <Container fluid className="bg-dark text-white pt-5 h-100">
      <Row className="g-3">
        <SingleCollectionFilm collectionName="Harry Potter" />
      </Row>
    </Container>
  );
};

export default TvShows;
