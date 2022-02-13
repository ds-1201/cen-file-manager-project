import React from "react";
import styles from "./MainNavbar.module.scss";
import Search from "./../SearchForm/SearchForm";
import light_icon from "./../../assets/sun_logo.png";
import plus_icon from "./../../assets/plus_icon.png";
import cog_icon from "./../../assets/cog_logo.png";

const MainNavbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__top"]}>
        <div className={styles["navbar__top__container"]}>
          <Search />
          <div className={styles["navbar__button-section"]}>
            <button className={`${styles["btn"]} ${styles["btn-outlined"]}`}>
              <i style={{ margin: "0 5px" }}>
                <img src={light_icon} alt="" width="90%" />{" "}
              </i>
              Light Mode
            </button>
            <button className={`${styles["btn"]} ${styles["btn-outlined-2"]}`}>
              <i>
                <img src={plus_icon} alt="" width="90%" />{" "}
              </i>
            </button>
            <button className={`${styles["btn"]} ${styles["btn-outlined-2"]}`}>
              <i>
                <img src={cog_icon} alt="" width="90%" />{" "}
              </i>
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
