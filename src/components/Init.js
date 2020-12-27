import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";

function Init() {
  return (
    <Jumbotron
      fluid
      border-style="solid"
      style={{
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "0px 0px 2px 0px",
        // borderStyle: "0px 0px 10px 0px",
      }}
    >
      <Container>
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
          The Nu Delta Chapter of Alpha Epsilon Pi
        </h1>
        <h2 style={{ textAlign: "center" }}>Central Florida</h2>
        <p>
          <li></li>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Init;
