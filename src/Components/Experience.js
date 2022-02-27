import React from "react";
import "../styles.css";
import placeHolderImg from "../images/place-holder-img.png";
import { Col, Container, Row, Image } from "react-bootstrap";
import Experiences from "../images/experience.png";
class Experience extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Row>
            <Col xl={1} lg={1} sm={1} xs={1}></Col>
            <Col>
              <div
                style={{
                  marginTop: "10px",
                  // marginLeft: "7vw",
                  fontFamily: "Sans-serif",
                  backgroundColor: "rgb(102, 0, 102)",
                  borderRadius: "10px",
                  width: "max-Content",
                }}
              >
                <h1
                  style={{
                    textShadow: "4px 4px 4px grey",
                    fontSize: "5vw",
                    fontWeight: "bolder",
                    color: "white",
                    padding: "1vw",
                  }}
                >
                  Experience{" "}
                  <Image
                    style={{ height: "auto", width: "10vw" }}
                    alt="Experince"
                    src={Experiences}
                    responsive
                  />
                </h1>
              </div>
            </Col>
            <Col xl={1} lg={1} sm={1} xs={1}></Col>
          </Row>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}></Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "4vh", fontWeight: "bold" }}>
                    {" "}
                    Jubilee2{" "}
                  </Row>
                  <Row style={{ fontSize: "3vh" }}>
                    <a>Personal Trainer and Climbing Wall Instructor</a>
                  </Row>
                  <Row>(2012 - 2017)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Training In-House Gym Instructors and Lifeguards to enable them
                to become Climbing Wall Instructors. Running Tasters, Kids club,
                Adult Climbing and disabled Abseiling sessions. Route setting
                the bouldering and traversing walls. Running all Sessions and
                maintaining paperwork eg Nicas lvls 1 and 2, Lead Climbing and
                Tru Blue Autos. All aspects of gym inductions, cleaning,
                paperwork and working taking PT/Rehab Injury sessions, focussing
                on Bodyweight and TRX/functional training.
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}></Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Academics
                  </Row>
                  <Row style={{ fontSize: "20px" }}>
                    Special Needs Teaching Assistant(Autism and Deaf)
                  </Row>
                  <Row>(2018 - 2019)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Working with various schools in Stoke-on-Trent and all aspects
                of classroom assistant role and 1:1 support to various disabled
                students. Working mainly Autistic, Cebreal palsy and Deaf
                children ranging from 5yrs to 16yrs.
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}></Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Family Commitments
                  </Row>
                  <Row style={{ fontSize: "20px" }}>Stay at Home Dad</Row>
                  <Row>(2020 - 2022)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Looking after my 4yrs and 1yrs Daughters, also retraining in the
                evenings and nap-times as the about me section states 'self
                taught web developer for 6 months focusing on the basics of
                coding using mainly Futurelearn.com foundational courses Jan-Feb
                2021'.
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}></Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Full Stack Web Developer
                  </Row>
                  <Row style={{ fontSize: "20px" }}>
                    Birmingham University - Coding Boot-camp
                  </Row>
                  <Row>(September 2021 to March 2022)</Row>
                </Col>
              </Row>
              <Row style={text}>
                I've recently enrolled in Birmingham University's 6 month
                intensive Coding Boot Camp in September 2021. After it finishes
                in March 2022, I will be a Full Stack Web Developer. As of the
                1st phase of the University Boot camp, I'm currently operating
                at average academic grade of A. Examples of my projects are
                below and further details are on my Github Profile.
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
const text = {
  padding: "10px",
};

export default Experience;
