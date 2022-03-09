import React, { useState } from "react";
import styles from "./PinForm.module.scss";
import PinBox from "components/PinBox/PinBox";
import { Link } from "react-router-dom";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useMode } from "context/Mode/ModeContext";

const PinForm = () => {
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();
  const [pin, setPin] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const password = localStorage.getItem("file_explorer_password");
    if (!password) {
      return alert("Password Not set please Register");
    }
    if (password !== pin) {
      setPin("");
      return alert("Invalid password");
    }
    modalDispatch({ type: "CLOSE" });
  };
  return (
    <div className={!isDark ? styles["dark__pin-form"] : styles["pin-form"]}>
      <h2 className={!isDark ? styles["dark__title"] : styles["title"]}>
        Enter Account Pin
      </h2>
      <div className={styles["pin-box"]}>
        <PinBox pin={pin} setPin={setPin} />
      </div>
      <button
        className={`${!isDark ? styles["dark__btn"] : styles["btn"]} ${
          !isDark ? styles["dark__btn-submit"] : styles["btn-submit"]
        }`}
        onClick={handleClick}
      >
        Enter
      </button>
      <Link to="/register">Register User</Link>
    </div>
  );
};

export default PinForm;
