import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import facebook from "../images/facebook.png";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container fluid style={footerstyle}>
          <Row>
            <Col style={{ marginTop: "45px" }} xl={1} lg={1} sm={4} xs={5}>
              <div className="socialmediaicons">
                <ul className="listitems">
                  <li>
                    <a
                      href="https://www.github.com/jj77847/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="Github" src={github} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:jonathanjefferies1985@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="gmail" src={gmail} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/jajefferies/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="snapchat" src={facebook} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jonathan-jefferies-70916110b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="linkedin" src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <hr style={{ width: "50%", backgroundColor: "red" }} />

          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>
                {" "}
                &copy; Copyright, 2022 Made Jonathan Jefferies
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const footerstyle = {
  height: "auto",
  width: "100%",
  backgroundColor: "white",
  textAlign: "center",
  color: "black",
};
const icon = {
  height: "auto",
  width: "30px",
  cursor: "pointer",
  borderRadius: "3px",
  textAlign: "center",
};

export default Footer;
