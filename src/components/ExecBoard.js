import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import Master from "../pictures/COFA_Color.png";
import allExec from "../pictures/allExec.jpg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function ExecBoard() {
  return (
    <div id="1"
       >
      <div id="jumbo" >
      {/* <Jumbotron
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
      <div>
              <Image src={allExec} alt="..." fluid style={{}} />
            </div>
      </Container>
     */}
    {/* EXEC INDIVIDUAL SECTIONS */}
    <div className="execWrapper">
      <h1 style={{textAlign:"center"}}>
        Executive Board
      </h1>
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Max Lasday, President</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Charlie Stuve, Vice President</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Steven Erched, Exchequer</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Samuel Massre, Scribe</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Micheal Romano, Rush</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Brenden Epstein, Sentinel</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Benjamin Stillman, New Member Educater</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Jonathan Yaari, Brother at Large</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="execWrapper">
     
      <Container>
        <Row>
          <Col xs="4">
            <div>
              <Image src={Master} alt="..." width="200px" height="200px" 
              border-style="solid"
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px 2px 2px 2px",
                margin:"2rem"
                
        
                  // borderStyle: "0px 0px 10px 0px",
                }} />
            </div>
          </Col>

          <Col>
          
            <div className="execAboutWrapper">
              <h6>Cameron Scarberry, House Manager</h6>
              <p className="execAboutStyle" style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ante dui, viverra imperdiet viverra non, venenatis ut ex. Nulla
                vel sagittis erat. Morbi in tortor euismod, efficitur leo
                pretium, placerat odio. Aliquam maximus nibh ut diam tincidunt,
                sed volutpat diam semper. turpis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* </Jumbotron> */}
    </div>
    </div>
  );
}

export default ExecBoard;
