import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import HouseBg from "../pictures/cornerHouse.jpeg";
import borderPic from "../pictures/fullHouse1.jpg";
import BrotherSpotlight from "../pictures/Baran.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Init() {
  return (
    <Jumbotron
      fluid
      border-style="solid"
      style={{
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "0px 0px 2px 0px",
        backgroundImage: "url(../pictures/cornerHouse.jpeg)",
        backgroundSize: "cover",
        padding: "0rem",
        // borderStyle: "0px 0px 10px 0px",
      }}
    >
      <div class="text-center">
        <Image
          src={borderPic}
          alt="..."
          fluid
          style={{
            top: "0%",
            right: "0%",
            position: "relative",
            maxWidth: "100%",
            maxHeight: "100%",
            height: "auto",
          }}
        />
      </div>
      <Container
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
          The Nu Delta Chapter of Alpha Epsilon Pi
        </h1>
        <h2 style={{ textAlign: "center" }}>Central Florida</h2>
        <p>
          Welcome to the home page of the #1 Jewish Fraternity in Central
          Florida
        </p>
        <div className="spotLightWrapper">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "1rem",
              paddingRight: "2rem",
            }}
          >
            Brotherhood Spotlight
          </h1>

          <Row>
            <Col xs="4">
              <div>
                <Image
                  src={BrotherSpotlight}
                  alt="..."
                  width="200px"
                  height="200px"
                  border-style="solid"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "2px 2px 2px 2px",
                    marginLeft: "5rem",
                    marginBottom: "4rem",

                    // borderStyle: "0px 0px 10px 0px",
                  }}
                />
              </div>
            </Col>

            <Col>
              <div
                className="spotLightAboutWrapper"
                style={{
                  paddingRight: "1rem",
                  backgroundColor: "rgb(120,120,120)",
                  marginRight: "1rem",
                }}
              >
                <h6>Jonathan Baran, 2023</h6>
                <p
                  className="spotLightAboutStyle"
                  style={{
                    paddingRight: ".2rem",
                    fontSize: "1rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ante dui, viverra imperdiet viverra non, venenatis ut
                  ex. Nulla vel sagittis erat. Morbi in tortor euismod,
                  efficitur leo pretium, placerat odio. Aliquam maximus nibh ut
                  diam tincidunt, sed volutpat diam semper. turpis.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Init;
