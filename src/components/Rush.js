import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import allExec from "../pictures/cornerHouse.jpeg";

function Rush() {
  return (
    <div id="jumbo">
      <Jumbotron
        fluid
        border-style="solid"
        style={{
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "0px 0px 2px 0px",
          padding: "0px",

          right: "0px",

          // borderStyle: "0px 0px 10px 0px",
        }}
      >
        <Image
          src={allExec}
          alt="..."
          fluid
          style={{
            top: "0%",
            right: "0%",
            marginLeft: "20rem",
            position: "relative",
            maxWidth: "100%",
            maxHeight: "100%",
            height: "auto",
          }}
        />
        <div className="rushWrapper">
          <Container>
            <Row></Row>
          </Container>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Rush;
