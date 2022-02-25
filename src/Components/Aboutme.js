import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../images/profileImage Medium.png";
import approval from "../images/approval.png";

class About extends React.Component {
  render() {
    return (
      <Container className="outerbox">
        <Row className="boxabout">
          <Col className="box-myimage" xl={4} lg={5} md={2} sm={2} xs={12}>
            <img style={myimage} alt="myimagepic" src={image} />
          </Col>
          <Col xl={8} lg={7} sm={12} md={12} xs={12}>
            <p style={mytext}>
              <h1 id="name">Jonathan Jefferies</h1>
              <h2 class="line-1 anim-typewriter">Full Stack Web Developer</h2>
              <br />
              Hi, I'm <span className="bold">Jonathan Jefferies</span>, I'm
              coming to the end of a intensive 12 months of learning Coding for
              a career change form working in the gym and outdoor industry for
              10yrs. Ive done 6 months of self study in preparation for studying
              Coding Boot-camp with Birmingham University. Once I've finished I
              will be a 'Full Stack Web Developer' enjoy{" "}
              <span role="img" aria-label="hey">
                ⚡
              </span>{" "}
              Programming in C++ mainly as it involves problem solving , and I
              Love to be Front-End developer and passionate in developing UI of
              website as well .loren sumd jd jr ff fjf d fjfjrfbrf fnrfrf rfir
              fjfrfn firfbrfb bfrbfjr jefbrjf rfrjfr rjfnrfn krnfkrnf jfnrifnr
              frjfrbf4 jbfj See also Navs for additional components and
              PropTypes. Cards include a few options for working with images.
              Choose from ng “image caps” at either end of a card, overlaying
              images with card content, or simply embedding the image in a card.
            </p>
          </Col>
        </Row>
        <Row>
          <Card className="text-center" style={hiremebox}>
            <Card.Body>
              <Card.Title className="fonthire">
                if you like what you see, please contact me
              </Card.Title>
              <img alt="hirelogo" style={hirelogo} src={approval} />
              <Button className="btnhire" variant="primary">
                Cick Here
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
const hirelogo = {
  height: "auto",
  width: "100px",
};
const hiremebox = {
  width: "100%",
  backgroundColor: "red",
  color: "white",
  boxShadow: " 3px 3px 4px 3px black",
};
const myimage = {
  height: "auto",
  width: "270px",
  marginTop: "25%",
  marginLeft: "9%",
  padding: "5px",
  borderRadius: "50%",
  boxShadow: "4px 7px 8px black",
};
const mytext = {
  fontSize: "20px",
  padding: "13px",
  textAlign: "justify",
  textJustify: "inter-word",
};
export default About;
