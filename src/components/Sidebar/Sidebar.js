import React from "react";
import styles from "./Sidebar.module.scss";
import logo from "./../../assets/company_logo.png";
import add_file from "./../../assets/add_file.png";
import add_folder from "./../../assets/add_folder.png";
import lock_icon from "./../../assets/lock_icon.png";

const Sidebar = () => {
  return (
    <div className={styles["sidebar"]}>
      <div>
        <div className={styles["sidebar__logo-box"]}>
          <img src={logo} alt="[Company-logo]" />
        </div>
        <div className={styles["sidebar__button-box"]}>
          <button className={`${styles["btn"]} ${styles["btn-outlined"]}`}>
            <i style={{ margin: "0 5px" }}>
              <img src={add_file} alt="" width="90%" />{" "}
            </i>
            Add File
          </button>
          <button className={`${styles["btn"]} ${styles["btn-outlined"]}`}>
            <i style={{ margin: "0 5px" }}>
              <img src={add_folder} alt="" width="90%" />{" "}
            </i>
            Add Folder
          </button>
        </div>
      </div>

      <div className={styles["sidebar__list-box"]}></div>
      <div className={styles["sidebar__lock-box"]}>
        <button
          className={`${styles["btn"]} ${styles["btn-contained"]} ${styles["btn-lock"]}`}
        >
          <i style={{ margin: "0 5px" }}>
            <img src={lock_icon} alt="" width="90%" />{" "}
          </i>
          Lock now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
