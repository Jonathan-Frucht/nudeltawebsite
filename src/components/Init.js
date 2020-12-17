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
        <h1>Put a pic here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante
          dui, viverra imperdiet viverra non, venenatis ut ex. Nulla vel
          sagittis erat. Morbi in tortor euismod, efficitur leo pretium,
          placerat odio. Aliquam maximus nibh ut diam tincidunt, sed volutpat
          diam semper. Proin a purus in massa pellentesque volutpat. Sed vitae
          risus dolor. Nullam eros dolor, pretium vitae est luctus, sagittis
          efficitur ligula. Ut et nulla hendrerit purus interdum ornare. Donec
          in vulputate odio, sit amet venenatis ipsum. Aliquam consequat semper
          nisi nec feugiat. Proin consequat posuere ligula at lacinia. Curabitur
          a ornare lacus, non congue tellus. Vivamus blandit at lectus sit amet
          condimentum. Etiam blandit, tellus at luctus efficitur, sapien neque
          volutpat diam, nec mollis tellus nisi vitae urna. Praesent at lorem
          non libero venenatis euismod sit amet quis turpis.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Init;
