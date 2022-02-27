import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import desk from "../images/desksetup-2022.png";
import MyVerticallyCenteredModal from "./Modal";
function Contact() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Container>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Row>
          <Col xl={3} lg={3} sm={3} xs={1}></Col>
          <Col>
            <div
              style={{
                marginTop: "10px",
                // marginLeft: "20vw",
                fontFamily: "Sans-serif",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "max-Content",
              }}
            >
              <h1
                style={{
                  textShadow: "6px 6px 6px grey",
                  fontSize: "5vw",
                  fontWeight: "bolder",
                  color: "black",
                  padding: "1vw",
                }}
              >
                Contact{" "}
              </h1>
            </div>
          </Col>
          <Col xl={3} lg={3} sm={3} xs={1}></Col>
        </Row>

        <div style={{ padding: "15px" }}>
          <Container style={outside}>
            <div>
              <div
                style={{
                  backgroundColor: "black",
                  width: "max-content",
                  marginLeft: "30%",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></div>
            </div>
            <Row>
              <Col xl={6} lg={6} sm={6} xs={6}>
                <img
                  style={{ height: "auto", width: "35vw" }}
                  alt="Desk setup 2022"
                  src={{ desk }}
                />
              </Col>
              <Col style={{ paddingTop: "8vw" }} xl={6} lg={6} sm={6} xs={6}>
                <Row style={{ marginTop: "-6vw" }}>
                  <>
                    Thank you for taking the time to look at my site. Contact Me
                    links below.
                    <br />
                    <div style={{ padding: "25px" }}>
                      <Button
                        size="lg"
                        style={{ fontSize: "25px", marginLeft: "-20px" }}
                        variant="success"
                        onClick={() => setModalShow(true)}
                      >
                        Contact Me
                      </Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}
const outside = {
  backgroundColor: "white",
  boxShadow: "5px 5px 4px ",
  height: "fit-Content",
};
export default Contact;
