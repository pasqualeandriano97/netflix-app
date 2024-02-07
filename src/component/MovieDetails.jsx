import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const details = () => {
    fetch(`http://www.omdbapi.com/?apikey=d85182ab&i=${params.movieid}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })

      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((error) => {
        alert(error + "Ricerca non riuscita");
      });
  };

  const CommentsDetails = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${params.movieid}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzYTJjMzZkZTM0YTAwMTk3YTEyOWQiLCJpYXQiOjE3MDczMjAwMDMsImV4cCI6MTcwODUyOTYwM30.WYU-csn0j8lL-5a36IlNtJZI48rpg7M2NaRypFUUD6s",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setComments(data);
      });
  };

  useEffect(() => {
    details();
    CommentsDetails();
  }, []);

  return (
    <Container fluid className="bg-dark text-white pt-5 h-100">
      <Row className="justify-content-center align-items-center ">
        {movie === null ? (
          <>
            <h1>Loading...</h1>
            <Spinner animation="border" variant="danger" />
          </>
        ) : (
          <Col sm={12} md={6}>
            <Card className="w-100">
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Plot}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
      <Row className="justify-content-center align-items-center ">
        <Col sm={12} md={6}>
          <h3 className="text-center mt-3 ">Commenti</h3>
          <ListGroup>
            {comments.map((comment) => {
              return (
                <ListGroup.Item key={comment.elementId}>
                  <h3>Commento:{comment.comment}</h3>
                  <p>Voto:{comment.rate}</p>
                </ListGroup.Item>
              );
            })}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
