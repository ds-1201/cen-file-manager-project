import React from "react";
import styles from "./Dashboard.module.scss";
import MainNavbar from "./../MainNavbar/MainNavbar";

const DashboardMain = () => {
  return (
    <div className={styles["dashboard-main"]}>
      <MainNavbar />
    </div>
  );
};

export default DashboardMain;
