import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Comp2020 from "../pictures/allExec.jpg";
import Comp2019 from "../pictures/Baran.png";

function ComposSlides() {
  return (
    <Carousel style={{ height: "auto", backgroundColor: "black" }}>
      <Carousel.Item>
        <Image
          className="slideshow"
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          src={Comp2019}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image id="slide2" className="slideshow" src={Comp2019} />
        <Carousel.Caption>
          <h3>2nd slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ComposSlides;
