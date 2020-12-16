import React from "react";
import PageTitle from "../components/PageTitle";
import Init from "../components/Init";
import MainNavBar from "../components/MainNavBar";
import Container from "react-bootstrap/esm/Container";
const InitPage = () => {
  return (
    <div className=" pageBackground fillBackground">
      {/* the div wrapper will place the side bar with other elements  */}
      <div className="wrapper">
        <MainNavBar />

        <PageTitle />
        <Init />
      </div>
    </div>
  );
};

export default InitPage;
