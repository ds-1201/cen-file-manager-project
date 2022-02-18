import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles["registerPage____form-box"]}>
      <h3 className={styles["loginPage__right__form-title"]}>
        Set your account pin
      </h3>
      <form
        className={styles["registerPage____form"]}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={styles["registerPage____form-control"]}>
          <input
            type="text"
            placeholder="Enter new pin"
            className={styles["registerPage____input"]}
          />
        </div>
        <div className={styles["registerPage____form-control"]}>
          <input
            type="text"
            placeholder="Confirm new pin"
            className={styles["registerPage____input"]}
          />
        </div>
        <button
          className={`${styles["btn"]} ${styles["btn-submit"]}`}
          type="submit"
        >
          <Link to="/">Save Changes</Link>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
