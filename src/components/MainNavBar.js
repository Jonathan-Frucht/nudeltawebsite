import React from "react";

import Bofa from "../pictures/webfrucht.png";
import Image from "react-bootstrap/Image";
function MainNavBar() {
  return (
    <div class="wrapper">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   

      <nav id="sidebar">
        <div class="sidebar-header">
          <Image src={Bofa} alt="..." width="auto" height="100px" />
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
          <li id="instagram" style={{}}>
          <a href="https://www.instagram.com/aepicf/" target="_blank" rel="noreferrer" class="fa fa-instagram"></a>  

          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavBar;
