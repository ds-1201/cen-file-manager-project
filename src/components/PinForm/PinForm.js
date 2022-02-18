import React from "react";
import styles from "./PinForm.module.scss";
import PinBox from "components/PinBox/PinBox";
import { Link } from "react-router-dom";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const PinForm = () => {
  const { modalDispatch } = useModalOpen();
  const handleClick = () => {
    modalDispatch({ type: "CLOSE" });
  };
  return (
    <div className={styles["pin-form"]}>
      <h2 className={styles["title"]}>Enter Account Pin</h2>
      <div className={styles["pin-box"]}>
        <PinBox />
      </div>
      <button
        className={`${styles["btn"]} ${styles["btn-submit"]}`}
        onClick={handleClick}
      >
        Enter
      </button>
      <Link to="/register">Register User</Link>
    </div>
  );
};

export default PinForm;
