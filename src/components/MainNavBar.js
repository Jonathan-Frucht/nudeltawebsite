import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Bofa from "../pictures/COFA_Color.png";
import Image from "react-bootstrap/Image";
function MainNavBar() {
  return (
    // <div className="wrapper">
    //   <Navbar id="sidebar">
    //     <Navbar.Brand>
    //       <img src={Bofa} alt="..." width="220px" height="273px" />
    //     </Navbar.Brand>

    //     <Navbar.Collapse id="content">
    //       <ul>
    //         <li>
    //           {" "}
    //           <Navbar.Text style={{ margin: "10px" }}>
    //             <a href="">Alpha Epsilon Pi</a>
    //           </Navbar.Text>
    //         </li>
    //         <Navbar.Text style={{ margin: "10px" }}>
    //           <a href="">Alpha Epsilon Pi</a>
    //         </Navbar.Text>
    //         <Navbar.Text style={{ margin: "10px" }}>
    //           <a href="">Meet the Central Comm.</a>
    //         </Navbar.Text>
    //         <Navbar.Text style={{ margin: "10px" }}>
    //           <a href="">Our manifesto</a>
    //         </Navbar.Text>
    //         <Navbar.Text style={{ margin: "10px" }}>
    //           <a href="">Join the CCP!</a>
    //         </Navbar.Text>
    //       </ul>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <Image src={Bofa} alt="..." width="220px" height="273px" />
        </div>

        <ul class="list-unstyled components">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Executive Board</a>
          </li>
          <li>
            <a href="#">Philanthropy</a>
          </li>
          <li>
            <a href="#">Rush</a>
          </li>
          <li>
            <a href="#">Contact Information</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavBar;
