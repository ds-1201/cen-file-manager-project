import DashboardMain from "components/DashboardMain/DashboardMain";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
// import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <Sidebar />
      <DashboardMain />
    </>
  );
};

export default MainPage;
