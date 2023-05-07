import { Col, Row, Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Contact = () => {
  return (
    <section className="contact">
      <Container className="contact">
        <Row className="align-items-center">
          <h2>Get In Touch</h2>
          <Col>
            <form name="form" method="post">
              <input type="hidden" name="form-name" value="form" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="first-name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="last-name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" placeholder="Phone Number" name="number" />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    row="6"
                    placeholder="Message"
                    required
                    name="message"
                  />
                </Col>
              </Row>
              <button>Send</button>
            </form>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="null" />
      <img
        className="background-image-top-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default Contact;
