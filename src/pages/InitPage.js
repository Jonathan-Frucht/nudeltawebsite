import React from "react";
import PageTitle from "../components/PageTitle";
import Init from "../components/Init";
import MainNavBar from "../components/MainNavBar";
const InitPage = () => {
  return (
    <div>
      <MainNavBar />
      <PageTitle />
      <Init />
    </div>
  );
};

export default InitPage;
