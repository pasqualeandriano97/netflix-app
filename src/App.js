import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import MainComponent from "./component/MainComponent";
import TvShows from "./component/TvShows";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavbarComponent />
        </header>
        <div className="vh-100 d-flex flex-column">
          <main className="flex-grow-1 bg-dark ">
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/tvshows" element={<TvShows />} />
              <Route path="/moviedetails/:movieid" element={<MovieDetails />} />
            </Routes>
          </main>
          <footer>
            <FooterComponent />
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
