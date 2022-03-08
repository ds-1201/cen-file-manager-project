import React from "react";
import styles from "./SetPinForm.module.scss";
import PinBox from "components/PinBox/PinBox";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const SetPinForm = () => {
  const { modalDispatch } = useModalOpen();
  const handleClick = () => {
    modalDispatch({ type: "CLOSE" });
  };
  return (
    <div className={styles["pin-form"]}>
      <h2 className={styles["title"]}>Reset Account Pin</h2>
      <div className={styles["pin-box"]}>
        <label>Enter New Pin</label>
        <PinBox />
      </div>
      <div className={styles["pin-box"]}>
        <label>Re-Enter New Pin</label>
        <PinBox />
      </div>
      <button
        className={`${styles["btn"]} ${styles["btn-submit"]}`}
        onClick={handleClick}
      >
        Enter
      </button>
    </div>
  );
};

export default SetPinForm;
