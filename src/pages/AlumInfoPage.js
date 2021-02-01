import React from "react";
import AlumUpdate from "../components/AlumUpdate";
import SideNavBar from "../components/MainSideBar";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
const AlumInfoPage = () => {
  return (
    <div
      className=" "
      style={{ padding: "0px", backgroundColor: "rgb(136, 136, 136)" }}
    >
      {/* the div wrapper will place the side bar with other elements  */}
      <div className="">
        <Container
          fluid
          style={{ padding: "0px", backgroundColor: "rgb(136, 136, 136)" }}
        >
          <Row style={{ padding: "0px" }}>
            <Col style={{ padding: "0px" }}>
              <div>
                <SideNavBar />
              </div>
            </Col>
            <Col
              fluid
              style={{
                minWidth: "100%",
                right: "0%",
                padding: "0px",
                alignItems: "center",
                backgroundColor: "rgb(136, 136, 136)",
                margin: "auto",
                marginLeft: "20rem",
              }}
            >
              <AlumUpdate />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AlumInfoPage;
