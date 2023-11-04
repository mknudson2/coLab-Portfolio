import { Container } from "react-bootstrap";

function Bio() {
  return (
    <>
      <Container className="bio-container">
        <div>
          <img className="bio-img" src="/hero-img.JPG" alt="" />
        </div>
        <div>
          <h3 className="bio-header">Michael Knudson</h3>
          <h4>Ph.D. in Scandinavian Studies–Philology and Medieval Studies</h4>
          <h4>Front-End Software Developer</h4>
          <br />
          <p className="bio-text">
            While a Salt Lake City native, I have had the opportunity of living
            in many different places, including Arizona, Michigan, Wisconsin,
            Minnesota, Scotland, and Norway. I have loved meeting new people and
            experiencing new cultures and ideas while also recognizing how
            everything blends and influences one another. <br />
            <br />
            In my academic career, this sparked my interest in exploring how
            different cultures intersect and shape each other. Furthermore, it
            drove me to find different, unqiue ways to reach my students and
            make material more understandable or accessible regardless of their
            background or prior knowledge. <br />
            <br />
            This same drive has fueled my transition into tech with the joy of
            using my creativity to make web applications both intuitive to use
            and accessible regardless of experience.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Bio;
