import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/git.png";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <div className="tagline">Welcome to my Portfolio</div>
            <h1>{"Hi! I'm James Nguyen"}</h1>
            <p>
              James Nguyen is an energetic, spirited computer scientist with a
              foundation in math and programing logic and coding. Seeking to
              leverage skills of collaboration, communication, and support as a
              programming developer.
            </p>
            <HashLink to="/contact">
              <button>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </HashLink>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
      <img
        className="background-image-top-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default Banner;
