import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import Master from "../pictures/COFA_Color.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function ExecBoard() {
  return (
    <div className="execWrapper">
      <Container>
        <Row>
          <Col xs="6">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" />
            </div>
          </Col>

          <Col>
            <div className="execAboutWrapper">
              <p className="execAboutStyle" style={{ fontSize: "16px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExecBoard;
