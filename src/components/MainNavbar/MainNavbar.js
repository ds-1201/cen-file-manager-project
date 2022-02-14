import React from "react";
import styles from "./MainNavbar.module.scss";
import Search from "./../SearchForm/SearchForm";
import SunLogo from "./../../assets/SunLogo";
import PlusIcon from "./../../assets/PlusIcon";
import CogIcon from "./../../assets/CogIcon";

const MainNavbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__top"]}>
        <div className={styles["navbar__top__container"]}>
          <Search />
          <div className={styles["navbar__button-section"]}>
            <button className={`${styles["btn"]} ${styles["btn-outlined"]}`}>
              <SunLogo />
              Light Mode
            </button>
            <button className={`${styles["btn"]} ${styles["btn-outlined-2"]}`}>
              <PlusIcon />
            </button>
            <button className={`${styles["btn"]} ${styles["btn-outlined-2"]}`}>
              <CogIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles["navbar__breadCrumb"]}>
        <h3>
          Some Folder name / file1 /{" "}
          <span className={styles["navbar__current-file"]}>file2</span>
        </h3>
      </div>
    </div>
  );
};

export default MainNavbar;
