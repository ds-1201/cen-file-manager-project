import React from "react";
import styles from "./PinForm.module.scss";
import PinBox from "components/PinBox/PinBox";

const PinForm = () => {
  return (
    <div className={styles["modal__box__container"]}>
      <h2 className={styles["modal__title"]}>Enter Account Pin</h2>
      <div className={styles["modal__pin-box"]}>
        <PinBox />
      </div>
      <button className={`${styles["btn"]} ${styles["btn-submit"]}`}>
        Enter
      </button>
    </div>
  );
};

export default PinForm;
