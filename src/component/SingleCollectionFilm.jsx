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
    this.setState({ ...this.state, isLoad: true });
    fetch(
      "http://www.omdbapi.com/?apikey=d85182ab&s=" + this.props.collectionName
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
        // this.setState({
        //   collectionFilms: data.Search,
        //   isLoad: false,
        // });
        this.setState({ ...this.state, isLoad: false, error: true });
      })
      .catch((error) => {
        console.log(error);
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
      this.state.collectionFilms.splice(0, 6).map((film) => {
        return (
          <Col key={film.imdbID} sm={4} md={3} lg={2}>
            <Image
              src={film.Poster}
              width="100%"
              height="100%"
              className="scale"
            />
            {this.state.error && (
              <Col>
                <Alert variant="danger">Si è verificato un problema</Alert>
              </Col>
            )}
          </Col>
        );
      })
    );
  }
}

export default SingleCollectionFilm;
