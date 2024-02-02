import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import MainComponent from "./component/MainComponent";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent />
      </header>
      <main>
        <MainComponent />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
