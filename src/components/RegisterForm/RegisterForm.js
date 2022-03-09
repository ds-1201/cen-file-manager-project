import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const [pin, setPin] = useState("");
  const [rPin, setRPin] = useState("");
  const navigate = useNavigate();
  return (
    <div className={styles["registerPage____form-box"]}>
      <h3 className={styles["loginPage__right__form-title"]}>
        Set your account pin
      </h3>
      <form
        className={styles["registerPage____form"]}
        onSubmit={(e) => {
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
          console.log({ pin, rPin });
          localStorage.setItem("file_explorer_password", pin);
          console.log(localStorage.getItem("file_explorer_password"));
          navigate("/");
        }}
      >
        <div className={styles["registerPage____form-control"]}>
          <input
            type="text"
            placeholder="Enter new pin"
            maxLength="4"
            className={styles["registerPage____input"]}
            value={pin}
            onChange={(e) => setPin(e.target.value.trim())}
          />
        </div>
        <div className={styles["registerPage____form-control"]}>
          <input
            type="text"
            placeholder="Confirm new pin"
            className={styles["registerPage____input"]}
            maxLength="4"
            value={rPin}
            onChange={(e) => setRPin(e.target.value.trim())}
          />
        </div>
        <button
          className={`${styles["btn"]} ${styles["btn-submit"]}`}
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
