import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import InfiniteScroll from "./components/InfiniteScroll";
import Bio from "./components/Bio";
import Academic from "./components/Academic";
import Dev from "./components/Dev";
import Footer from "./components/Footer";
import Games from "./components/Games";

function App() {
  return (
    <>
      <div id="home"></div>
      <NavbarComponent />
      <Hero />
      <InfiniteScroll />
      <Bio />
      <div id="academia"></div>
      <hr />
      <Academic />
      <div id="dev"></div>
      <hr />
      <Dev />
      <div id="personal"></div>
      <hr />
      <Games />
      <Footer />
    </>
  );
}

export default App;
