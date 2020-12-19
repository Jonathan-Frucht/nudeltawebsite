import React from "react";
import ExecBoard from "../components/ExecBoard";
import MainNavBar from "../components/MainNavBar";
import Container from "react-bootstrap/esm/Container";
const HomePage = () => {
  return (
    <div className=" ">
      {/* the div wrapper will place the side bar with other elements  */}
      <div className="">
        <div >
          <MainNavBar />
        </div>
        <div width= "50%">
          <ExecBoard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
