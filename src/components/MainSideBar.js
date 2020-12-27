import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import {
//   ProSidebar,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Bofa from "../pictures/webfrucht.png";
import Insta from "../pictures/instaLogo.png";
import "react-pro-sidebar/dist/css/styles.css";

function MainSideBar() {
  const GoToInsta = () => {
    window.open("https://www.instagram.com/aepicf/");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <ProSidebar id="sidebar">
        <div class="sidebar-header" style={{ margin: "1rem" }}>
          <Image src={Bofa} alt="..." width="auto" height="100px" />
        </div>
        <Menu iconShape="square" icon={<img src={Bofa} />}>
          <MenuItem>
            <a href="/">Home</a>
          </MenuItem>
          <SubMenu id title="Alumni" style={{ listStyleType: "none" }}>
            <MenuItem>
              <div className="anch">
                Newsletter
                <Link to="/rush_info" />
              </div>
            </MenuItem>
            <MenuItem>
              <div className="anch">
                Update your information
                <Link to="/rush_info" />
              </div>
            </MenuItem>
          </SubMenu>
          <MenuItem>Philanthropy</MenuItem>
          <SubMenu id title="Rush" style={{ listStyleType: "none" }}>
            <MenuItem href="/rush_form">
              <div className="anch">
                What is Rush?
                <Link to="/rush_info" />
              </div>
            </MenuItem>
            <MenuItem>
              <div className="anch">
                Sign up
                <Link to="/rush_form" />
              </div>
            </MenuItem>
          </SubMenu>

          <MenuItem>Brotherhood</MenuItem>
          <MenuItem>Contact Info</MenuItem>

          <button
            onClick={GoToInsta}
            style={{
              backgroundColor: "transparent",
              color: "transparent",
              borderColor: "transparent",
              padding: "0px",
              margin: "0px",
            }}
          >
            <div class="sidebar-header" style={{ margin: "1rem" }}>
              {/* <Image
              src={Insta}
              alt="..."
              width="auto"
              height="50px"
              style={{ padding: "0px", margin: "0px" }}
            /> */}
              <div id="instagram" style={{}}>
                {/* <a
                href="https://www.instagram.com/aepicf/"
                target="_blank"
                rel="noreferrer"
                className="anch"
                display="block"
                // class="fa fa-instagram"
                width="100%"
                height="100%"
              > */}
                <div class="sidebar-header" style={{ margin: "1rem" }}>
                  <Image
                    src={Insta}
                    alt="..."
                    width="auto"
                    height="50px"
                    style={{ padding: "0px", margin: "0px" }}
                  />
                </div>
                {/* <img
                  src={Insta}
                  //   href="https://www.instagram.com/aepicf/"
                  alt="..."
                  width="auto"
                  height="50px"
                  style={{ padding: "0px", margin: "0px" }}
                /> */}
                {/* </a> */}
                {/* <div id="instagram" style={{}}>
              <a
                to="https://www.instagram.com/aepicf/"
                target="_blank"
                rel="noreferrer"
                class="fa fa-instagram"
              /> */}
              </div>{" "}
            </div>
          </button>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default MainSideBar;
