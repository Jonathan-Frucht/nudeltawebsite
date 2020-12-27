import React from "react";

import Bofa from "../pictures/webfrucht.png";
import Image from "react-bootstrap/Image";
function MainNavBar() {
  return (
    <div class="wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <nav id="sidebar">
        <div class="sidebar-header">
          <Image src={Bofa} alt="..." width="auto" height="100px" />
        </div>

        <ul class="list-unstyled components">
          <li>
            <a href="/">Home</a>
          </li>
          <li id="visibleA">
            <a href="/alumni">Alumni</a>
            <ul id="hiddenA">
              <li>
                <a href="/rush_info">Newsletter</a>
              </li>
              <li>
                <a href="/rush_form">Update Info</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/philanthropy">Philanthropy</a>
          </li>
          <li id="visibleR">
            <a href="/rush_info">Rush</a>
            <ul id="hiddenR">
              <li>
                <a href="/rush_info">What is Rush?</a>
              </li>
              <li>
                <a href="/rush_form">Sign up for Rush</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact_info">Contact Information</a>
          </li>
          <li id="instagram" style={{}}>
            <a
              href="https://www.instagram.com/aepicf/"
              target="_blank"
              rel="noreferrer"
              class="fa fa-instagram"
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavBar;
