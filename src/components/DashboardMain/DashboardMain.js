import React from "react";
import styles from "./Dashboard.module.scss";
import MainNavbar from "./../MainNavbar/MainNavbar";
import AppList from "components/AppList/AppList";
import PropTypes from "prop-types";
import { useMode } from "context/Mode/ModeContext";

const DashboardMain = ({ sidebarWidth }) => {
  const { isDark } = useMode();
  return (
    <div
      className={`${styles["dashboard-main"]} ${
        !isDark && styles["dark__dashboard-main"]
      }`}
      style={{
        marginLeft: sidebarWidth,
      }}
    >
      <MainNavbar />
      <section className={styles["dashboard-main__list-box"]}>
        <AppList />
      </section>
    </div>
  );
};

DashboardMain.propTypes = {
  sidebarWidth: PropTypes.number.isRequired,
};

export default DashboardMain;
