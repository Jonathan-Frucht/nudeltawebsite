import React from "react";
import Rush from "../components/Rush";
import MainNavBar from "../components/MainNavBar";
import Container from "react-bootstrap/esm/Container";
import { Col } from "react-bootstrap";
const RushPage = () => {
  return (
    <div className=" ">
      {/* the div wrapper will place the side bar with other elements  */}
      <div className="">
        <Container fluid >
          <Col xs="1">
          <div >
          <MainNavBar />
        </div>
          </Col>
          
          <Col fluid >
          <div style={{backgroundColor:"grey"}} >
          <Rush />
        </div>
          </Col>
        </Container>
     
       
      </div>
    </div>
  );
};

export default RushPage;
