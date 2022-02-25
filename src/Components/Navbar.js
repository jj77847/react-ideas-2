import React from "react";
import { Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import About from "./AboutMe";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Project from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
class Navbars extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: "AboutMe",
    };
  }
  AboutMe = () => {
    this.setState({
      activePage: "AboutMe",
    });
    console.log("Active Page :", this.state);
  };
  Experience = () => {
    this.setState({
      activePage: "Experience",
    });
    console.log("Active Page :", this.state);
  };
  contact = () => {
    this.setState({
      activePage: "Contact",
    });
    console.log("Active Page :", this.state);
  };
  certifications = () => {
    this.setState({
      activePage: "Certifications",
    });
    console.log("Active Page :", this.state);
  };
  projects = () => {
    this.setState({
      activePage: "Projects",
    });
    console.log("Active Page :", this.state);
  };
  toggle = () => {
    let narrowLinks = document.querySelector(".narrowLinks");
    narrowLinks.classList.toggle("hidden");
  };
  render() {
    const { activePage } = this.state;
    return (
      <div>
        {/* <div style={navbar}>
          <div style={{ fontSize: "31px", marginTop: "0px" }}>Jonathan Jefferies</div>

          <ul className="listitems">
            <li className="items" onClick={this.AboutMe}>
              About
            </li>
            <li className="items" onClick={this.Certifications}>
              Certifications
            </li>
            <li className="items" onClick={this.Experience}>
              Experience
            </li>
            <li className="items" onClick={this.Projects}>
              Projects
            </li>
            <li className="items" onClick={this.Contact}>
              Contact
            </li>
          </ul>
        </div> */}

        <Nav
          fill
          className="ss"
          variant="pills"
          defaultActiveKey="/home"
          sticky="top"
        >
          <Nav.Item>
            <Nav.Link
              onClick={this.AboutMe}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              href="/home"
            >
              About
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/709/709722.svg?token=exp=1619454906~hmac=57f45ea1adc27132ecdca3d5cebaefea"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={this.certifications}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              eventKey="link-3"
            >
              Certifications
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/3631/3631546.svg?token=exp=1619454765~hmac=6ee8dbd2f7fb837780049ec6570a8223
              "
              />
            </Nav.Link>
            <Nav.Item>
              <Nav.Link
                onClick={this.Experience}
                className="navtab"
                style={{ borderRadius: "0px", fontSize: "23px" }}
                eventKey="link-1"
              >
                Experience
                <img
                  alt=""
                  style={{ height: "29px", marginLeft: "10px" }}
                  src="https://www.flaticon.com/svg/vstatic/svg/2910/2910791.svg?token=exp=1619454335~hmac=ccf956642cfe9a204af81cd49dbab796"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={this.projects}
                className="navtab"
                style={{ borderRadius: "0px", fontSize: "23px" }}
                eventKey="link-2"
              >
                Projects
                <img
                  alt=""
                  style={{ height: "29px", marginLeft: "10px" }}
                  src="https://www.flaticon.com/svg/vstatic/svg/1087/1087902.svg?token=exp=1619454625~hmac=8509c541e5a7b8f04b6739c5b486aade"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={this.contact}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              eventKey="Contact"
            >
              Contact
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/1034/1034204.svg?token=exp=1619454853~hmac=305918016329caaf3e7d70337e62f5a2"
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activePage === "AboutMe" ? <About /> : null}
        {activePage === "Certification" ? <Certifications /> : null}
        {activePage === "Experience" ? <Experience /> : null}
        {activePage === "Projects" ? <Project /> : null}
        {activePage === "Contact" ? <Contact /> : null}
        <Footer />
      </div>
    );
  }
}
const navbar = {
  color: "black",
  backgroundColor: "red",
  padding: "10px",
  display: "flex",
  height: "auto",
};

export default Navbars;
