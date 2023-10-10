import { Container } from "react-bootstrap";

function Bio() {
  return (
    <>
      <Container className="bio-container">
        <div>
          <img src="/hero-img.JPG" alt="" />
        </div>
        <div>
          <h3>Michael Knudson</h3>
          <p>While a Salt Lake City native, I have had the opportunity of living in many different places, including Arizona, Michigan, Wisconsin, Minnesota, Scotland, and Norway. I have loved meeting new people and experiencing new cultures and idea while also recognizing how everything blends and influences one another. <br />In my academic career, this sparked my interest in exploring how different cultures intersect and shape each other. Furthermore, it drove me to find different, unqiue ways to reach my students and make material more understandable or accessible. <br />This same drive has fueled my transition into tech with the joy of using my creativity to make web applications both intuitive to use and accessible regardless of experience.</p>
        </div>
      </Container>
    </>
  );
}

export default Bio;
