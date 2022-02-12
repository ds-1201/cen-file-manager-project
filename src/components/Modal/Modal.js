import React from "react";
import styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__box"]}>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default Modal;
