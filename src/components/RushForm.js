import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function rushForm() {
  return (
    <Container style={{ padding: "0px" }}>
      <div className="">
        <div>
          <iframe
            id="rushForm"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfVDBCn9yNZE6N-MeGw9wkyP3IXEbunSRCPpzThF3KisDCGdA/viewform?embedded=true"
            width="640"
            height="1050"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            display="block"
            style={{ backgroundColor: "rgb(136, 136, 136)", display: "block" }}
          >
            Loading
          </iframe>
        </div>
      </div>
    </Container>
  );
}

export default rushForm;
