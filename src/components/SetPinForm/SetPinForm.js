import React, { useState } from "react";
import styles from "./SetPinForm.module.scss";
import PinBox from "components/PinBox/PinBox";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useMode } from "context/Mode/ModeContext";

const SetPinForm = () => {
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();
  const [pin, setPin] = useState("");
  const [rPin, setRPin] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (pin === "" || rPin === "") {
      setPin("");
      setRPin("");
      return alert("Please enter a valid pin");
    }
    if (pin !== rPin) {
      setPin("");
      setRPin("");
      return alert("Both Pin should match");
    }
    localStorage.setItem("file_explorer_password", pin);
    modalDispatch({ type: "CLOSE" });
  };
  return (
    <div className={styles["pin-form"]}>
      <h2 className={!isDark ? styles["dark__title"] : styles["title"]}>
        Reset Account Pin
      </h2>
      <div className={styles["pin-box"]}>
        <label>Enter New Pin</label>
        <PinBox pin={pin} setPin={setPin} />
      </div>
      <div className={styles["pin-box"]}>
        <label>Re-Enter New Pin</label>
        <PinBox pin={rPin} setPin={setRPin} />
      </div>
      <button
        className={`${!isDark ? styles["dark__btn"] : styles["btn"]} ${
          !isDark ? styles["dark__btn-submit"] : styles["btn-submit"]
        }`}
        onClick={handleClick}
      >
        Enter
      </button>
    </div>
  );
};

export default SetPinForm;
