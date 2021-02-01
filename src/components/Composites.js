import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ComposSlides from "../components/ComposSlides";
function Composites() {
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
              Composites
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                paddingBottom: "3rem",
              }}
            >
              Here you can view our past brotherhood composites
            </p>
          </div>
        </Container>
      </div>
      <div>
        <Container
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ComposSlides />
        </Container>
      </div>
    </div>
  );
}
export default Composites;
