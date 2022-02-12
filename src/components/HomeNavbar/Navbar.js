import React from "react";
import styles from "./Navbar.module.scss";
import company_logo from "./../../assets/company_logo.png";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__container"]}>
        <div className={styles["navbar__logo-box"]}>
          <img src={company_logo} alt="" />
        </div>
        <div className={styles["navbar__button-section"]}></div>
      </div>
    </div>
  );
};

export default Navbar;
