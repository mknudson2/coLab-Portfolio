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
      <div id="home" />
      <NavbarComponent />
      <Hero />
      <InfiniteScroll />
      {/* <div id="bio"/> */}
      <Bio />
      <div id="academia"/>
      <hr />
      <Academic />
      <div id="dev" />
      <hr />
      <Dev />
      <div id="personal" />
      <hr />
      <Games />
      <Footer />
    </>
  );
}

export default App;
