import React from "react";
import styles from "./Dashboard.module.scss";
import MainNavbar from "./../MainNavbar/MainNavbar";
import AppList from "components/AppList/AppList";

const DashboardMain = () => {
  return (
    <div className={styles["dashboard-main"]}>
      <MainNavbar />
      <section className={styles["dashboard-main__list-box"]}>
        <AppList />
      </section>
    </div>
  );
};

export default DashboardMain;
