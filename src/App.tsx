import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import InfiniteScroll from "./components/InfiniteScroll";
import Bio from "./components/Bio";
import Academic from "./components/Academic";
import Dev from "./components/Dev";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="home"></div>
      <NavbarComponent />
      <Hero />
      <InfiniteScroll />
      <Bio />
      <hr />
      <Academic />
      <hr />
      <Dev />
      <Footer />
    </>
  );
}

export default App;
