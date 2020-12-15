import React from "react";
import Navbar from "react-bootstrap/Navbar";

function MainNavBar() {
  return (
    <div>
      <Navbar className="navbar-custom">
        <Navbar.Brand>
          <img src="" className="d-inline-block align-top" alt="..." />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <ul>
            <Navbar.Text style={{ margin: "10px" }}>
              <a href="">Alpha Epsilon Pi</a>
            </Navbar.Text>
            <Navbar.Text style={{ margin: "10px" }}>
              <a href="">Meet the Central Comm.</a>
            </Navbar.Text>
            <Navbar.Text style={{ margin: "10px" }}>
              <a href="">Our manifesto</a>
            </Navbar.Text>
            <Navbar.Text style={{ margin: "10px" }}>
              <a href="">Join the CCP!</a>
            </Navbar.Text>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavBar;
