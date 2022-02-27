import React from "react";
import { Col, Container, Row, Card, Button, Image } from "react-bootstrap";
import project from "../images/projects.png";
import github from "../images/github.png";
import Foreign from "../images/foreign.png";

class Project extends React.Component {
  render() {
    return (
      <Container>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Row>
          <Col lg={2} sm={2} xs={2}></Col>
          <Col>
            <div
              style={{
                marginTop: "10px",
                // marginLeft: "7vw",
                fontFamily: "Sans-serif",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "max-Content",
              }}
            >
              <h1
                style={{
                  textShadow: "4px 4px 4px grey",
                  fontSize: "6vw",
                  fontWeight: "bolder",
                  color: "black",
                  padding: "1vw",
                }}
              >
                PROJECTS{" "}
                <Image
                  style={{ height: "auto", width: "8vw" }}
                  alt="project"
                  src={project}
                  responsive
                />
              </h1>
            </div>
          </Col>
          <Col xl={2} sm={2} lg={2}></Col>
        </Row>
        <Container style={{ padding: "20px" }}>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src={require("../images/marketing-screenshot-1.png")}
                    alt="Marketing-Accessability"
                  />
                  <Card.Body>
                    <Card.Title>Accessability Website</Card.Title>
                    <Card.Text>
                      Tasked with refactoring a marketing website focusing on
                      accessability and readability in the html and css.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/jj77847/marketing-acessability-website/tree/dev"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px",
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://jj77847.github.io/marketing-acessability-website/"
                      >
                        Links
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "15%",
                          }}
                          alt="foreign"
                          src={Foreign}
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://github.com/jj77847/react-ideas-2/blob/3ea0817d6334d3b341d799bc6a281e246e011aac/src/images/password-generator-screenshot-2.png"
                  />
                  <Card.Body>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Text>
                      In this project I have created a README generator using
                      Node.js with the inquirer package. This allows a user to
                      go through a series of terminal prompts and the program
                      creates a markdown file using the answers collected from
                      the user.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/jj77847/good-readme-generator"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px",
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://youtu.be/0sOWbX9wO88"
                      >
                        Video Link
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "15%",
                          }}
                          alt="foreign"
                          src="https://cdn-icons-png.flaticon.com/128/376/376007.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://github.com/jj77847/react-ideas-2/blob/3ea0817d6334d3b341d799bc6a281e246e011aac/src/images/profile-screenshot-3.png"
                  />
                  <Card.Body>
                    <Card.Title>Portfolio</Card.Title>
                    <Card.Text>
                      Portfolio of Jonathan Jefferies using example websites
                      from GitHub, Codepen, Freecodecamp and Futurelearn.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/jj77847/portfolio/tree/dev/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px",
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://jj77847.github.io/portfolio"
                      >
                        Links
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "15%",
                          }}
                          alt="foreign"
                          src="https://cdn-icons-png.flaticon.com/128/376/376007.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Code Quiz</Card.Title>
                    <Card.Text>
                      Batman 66 inspired quiz using JavaScript, HTML and CSS
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/jj77847/code-quiz/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px",
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://jj77847.github.io/marketing-acessability-website/"
                      >
                        Links
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "15%",
                          }}
                          alt="foreign"
                          src={Foreign}
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="./assets/img/workdayscheduler-screenshot-with-info-5.png"
                  />
                  <Card.Body>
                    <Card.Title>Work Day Scheduler</Card.Title>
                    <Card.Text>
                      Calendar application that allows the user to save events
                      for each hour of the day.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px",
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://jj77847.github.io/marketing-acessability-website/"
                      >
                        Links
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "15%",
                          }}
                          alt="foreign"
                          src={Foreign}
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="./assets/img/weather-dashboard-screenshot-6.png"
                  />
                  <Card.Body>
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Card.Text>
                      A simple web application that allows users to search for a
                      city to get the current weather and 5 day forecast.
                      Locations that users previously looked up will be saved in
                      their local storage.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px",
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://jj77847.github.io/marketing-acessability-website/"
                      >
                        Links
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "15%",
                          }}
                          alt="foreign"
                          src={Foreign}
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
const boxcard = {
  boxShadow: "2px 2px 3px",
};

export default Project;
