import React from "react";
import PageTitle from "../components/PageTitle";
import Init from "../components/Init";
import MainNavBar from "../components/MainNavBar";
import Container from "react-bootstrap/esm/Container";
const HomePage = () => {
  return (
    <html background-color="black">
      <div className=" ">
        {/* the div wrapper will place the side bar with other elements  */}
        <div className="wrapper">
          <MainNavBar />

          <PageTitle />
          <Init />
        </div>
      </div>
    </html>
  );
};

export default HomePage;
