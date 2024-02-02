import Col from "react-bootstrap/Col";
import { Component } from "react";
import Image from "react-bootstrap/Image";
import SpinnerComponent from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class SingleCollectionFilm extends Component {
  state = {
    collectionFilms: [],
    isLoad: false,
    error: false,
  };

  collectionFilmLoad = () => {
    this.setState({ isLoad: true });
    fetch(
      "http://www.omdbapi.co/?apikey=d85182ab&s=" + this.props.collectionName
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data.Search);
        this.setState({
          collectionFilms: data.Search,
          isLoad: false,
          error: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoad: false, error: true });
      });
  };

  componentDidMount() {
    this.collectionFilmLoad();
  }

  render() {
    return this.state.isLoad ? (
      <div>
        <SpinnerComponent />
      </div>
    ) : (
      <>
        {this.state.error && (
          <Col>
            <Alert variant="danger">Si è verificato un problema</Alert>
          </Col>
        )}
        {this.state.collectionFilms.slice(0, 6).map((film) => (
          <Col key={film.imdbID} sm={2} md={4} lg={3}>
            {film.Poster && (
              <Image
                src={film.Poster}
                width="100%"
                height="100%"
                className="scale"
              />
            )}
          </Col>
        ))}
      </>
    );
  }
}

export default SingleCollectionFilm;
