import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";

import Slide1 from "../pictures/Brotherhood/CamKayak.JPG";
import Slide2 from "../pictures/Brotherhood/BeachSquad.JPG";
import Slide3 from "../pictures/Brotherhood/Guitar.JPG";
import { Card, CardGroup, CardColumns } from "react-bootstrap";

function Brotherhood() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(136, 136, 136)",
          borderBottom: "2px solid #1d1d1d",
        }}
      >
        <Container
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ backgroundColor: "rgb(136, 136, 136)" }}>
            <h1
              style={{
                paddingTop: "3rem",
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              Brotherhood Gallery
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                paddingBottom: "3rem",
              }}
            ></p>
          </div>
        </Container>
      </div>
      <div>
        <Container
          id="s"
          style={{
            // display: "flex",
            alignItems: "center",
            marginTop: "2rem",
            // width: "100%",
            position: "absolute",
            zIndex: 2,
            left: "6%",
            // alignItems: "center",
            // width: "100%",
            // justifyContent: "center",
          }}
        >
          <CardColumns
            fluid
            style={{
              marginTop: "2rem",
              width: "137%",
            }}
          >
            {" "}
            <Card>
              <Card.Img variant="top" src={Slide1} />
              <Card.Title
                style={{
                  marginLeft: "1rem",
                  marginTop: ".5rem",
                  fontSize: "1rem",
                }}
              >
                Kayaking at Wekiwa
                <small
                  style={{
                    marginRight: ".5rem",
                    marginTop: ".5rem",
                    float: "right",
                  }}
                  className="text-muted"
                >
                  9/20
                </small>
              </Card.Title>
            </Card>
            <Card>
              <Card.Img variant="top" src={Slide2} />

              <Card.Title
                style={{
                  marginLeft: "1rem",
                  marginTop: ".5rem",
                  fontSize: "1rem",
                }}
              >
                Cocoa Beach GAD
                <small
                  style={{
                    marginRight: ".5rem",
                    marginTop: ".5rem",
                    float: "right",
                  }}
                  className="text-muted"
                >
                  10/20
                </small>
              </Card.Title>
            </Card>
            <Card>
              <Card.Img variant="top" src={Slide3} />
              <Card.Title
                style={{
                  marginLeft: "1rem",
                  marginTop: ".5rem",
                  fontSize: "1rem",
                }}
              >
                Ginnie Springs
                <small
                  style={{
                    marginRight: ".5rem",
                    marginTop: ".5rem",
                    float: "right",
                  }}
                  className="text-muted"
                >
                  11/20
                </small>
              </Card.Title>
            </Card>
          </CardColumns>
        </Container>
      </div>
    </div>
  );
}
export default Brotherhood;
