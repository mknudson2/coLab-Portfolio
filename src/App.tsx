// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <Hero />
      <InfiniteScroll />
    </>
  );
}

export default App;
