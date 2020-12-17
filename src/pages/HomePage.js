import React from "react";
import Init from "../components/Init";
import MainNavBar from "../components/MainNavBar";
import Container from "react-bootstrap/esm/Container";
const HomePage = () => {
  return (
    <html background-color="black">
      <div className=" ">
        {/* the div wrapper will place the side bar with other elements  */}
        <div className="wrapper">
          <div>
            <MainNavBar />
          </div>

          <div>
            <Init />
          </div>
        </div>
      </div>
    </html>
  );
};

export default HomePage;
