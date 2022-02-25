import React from "react";
import { Modal, Button } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thank you for checking out my portfolio!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ alignContent: "center", textAlign: "center" }}>
          <a href="mailto:jonathanjefferies1985@gmail.com">
            <img
              alt="gmail"
              style={{ height: "29px", marginLeft: "0px" }}
              src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
            />
            <span style={{ marginLeft: "10px" }}>
              jonathanjefferies1985@gmail.com
            </span>
          </a>
        </h4>
        <p style={{ alignContent: "Center", textAlign: "center" }}>
          Feel free to Email/Phone/Text anytime,
          <br />I prefer Coffee Meetings! &#9749;
          <br />
          07963 508706 &#x1F4F1;
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
