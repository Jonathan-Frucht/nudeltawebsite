import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Bofa from "../pictures/COFA_Color.png";
import Image from "react-bootstrap/Image";
function MainNavBar() {
  return (
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
            <a href="/exec_board">Executive Board</a>
          </li>
          <li>
            <a href="/philanthropy">Philanthropy</a>
          </li>
          <li>
            <a href="/rush">Rush</a>
          </li>
          <li>
            <a href="/contact_info">Contact Information</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavBar;
