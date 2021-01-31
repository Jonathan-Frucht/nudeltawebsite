import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import borderPic from "../pictures/CleanTheWorldTruck2.jpeg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import GOLlogo from "../pictures/Phil/GOL-logo.png";

function Philanthropy() {
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
            padding: "0rem",
          }}
        />
        <div
          font-size="3rem"
          class="centered"
          style={{ backgroundColor: "rgb(200,200,200,.5)" }}
        >
          Replace this Pic
        </div>
      </div>

      <Container
        style={{
          alignItems: "center",
          flex: 1,
          padding: "0rem",
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Philanthropy</h1>
        <p style={{ textAlign: "center" }}>
          Here you may view our philanthropic ventures.
        </p>
        <Row>
          <div className="philWrapper">
            <Row>
              <Col xs="2">
                <div>
                  <Image
                    src={GOLlogo}
                    alt="..."
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      height: "auto",
                      padding: "0rem",
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="philAboutWrapper">
                  <h6 style={{}}>Gift of Life</h6>

                  <p
                    style={{
                      paddingRight: ".2rem",
                      fontSize: "1rem",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ante dui, viverra imperdiet viverra non, venenatis
                    ut ex. Nulla vel sagittis erat. Morbi in tortor euismod,
                    efficitur leo pretium, placerat odio. Aliquam maximus nibh
                    ut diam tincidunt, sed volutpat diam semper. turpis.
                    {
                      <span style={{ fontSize: "1rem" }}>
                        <br />
                        <br />
                        {/* <a className="philAnch" style={{ marginRight: "1rem" }}>
                          Gallery
                        </a> */}
                        <a
                          id="philAnch"
                          href="https://www.giftoflife.org/"
                          color="blue !important"
                        >
                          Gift of life website
                        </a>
                      </span>
                    }
                  </p>
                  {/* <span style={{ fontSize: "1rem" }}>
                    <a style={{ marginRight: "1rem" }}>Gallery</a>
                    <a>Gift of life website</a>
                  </span> */}
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Philanthropy;
