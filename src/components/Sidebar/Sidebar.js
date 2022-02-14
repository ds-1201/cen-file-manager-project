import React from "react";
import styles from "./Sidebar.module.scss";

import SidebarList from "./../SidebarList/SidebarList";

import logo from "./../../assets/company_logo.png";
import AddFileIcon from "./../../assets/AddFileIcon";
import AddFolderIcon from "./../../assets/AddFolderIcon";
import lock_icon from "./../../assets/lock_icon.png";

const Sidebar = () => {
  console.log(lock_icon);
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__outer-container"]}>
        <div className={styles["sidebar__inner-container"]}>
          <div>
            <div className={styles["sidebar__logo-box"]}>
              <img src={logo} alt="[Company-logo]" />
            </div>
            <div className={styles["sidebar__button-box"]}>
              <button className={`${styles["btn"]} ${styles["btn-outlined"]}`}>
                <AddFileIcon />
                Add File
              </button>
              <button className={`${styles["btn"]} ${styles["btn-outlined"]}`}>
                <AddFolderIcon /> Add Folder
              </button>
            </div>
          </div>

          <div className={styles["sidebar__list-box"]}>
            <SidebarList />
          </div>
          <div className={styles["sidebar__lock-box"]}>
            <button
              className={`${styles["btn"]} ${styles["btn-contained"]} ${styles["btn-lock"]}`}
            >
              <i>
                <img src={lock_icon} alt="" width="90%" />{" "}
              </i>
              Lock now
            </button>
          </div>
        </div>
        <div className={styles["sidebar__scroller"]}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
