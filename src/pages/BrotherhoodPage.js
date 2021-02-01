import React from "react";
import Brotherhood from "../components/Brotherhood";
import SideNavBar from "../components/MainSideBar";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
const BrotherhoodPage = () => {
  return (
    <div className=" ">
      {/* the div wrapper will place the side bar with other elements  */}
      <div className="">
        <Container fluid style={{ padding: "0px" }}>
          <Row>
            <Col class="col-1" style={{ padding: "0px" }}>
              <div>
                <SideNavBar />
              </div>
            </Col>
            <Col
              class="col-11 align-self-end"
              fluid
              style={{
                paddingLeft: "110px",
                minWidth: "88%",
                right: "0%",
                padding: "0px",
                backgroundColor: "#F0F2F2",
              }}
            >
              <Brotherhood />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BrotherhoodPage;
