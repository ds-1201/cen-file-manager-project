import React from 'react';
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles["registerPage____form-box"]}>
              <h3 className={styles["loginPage__right__form-title"]}>
                Set your account pin
              </h3>
              <form className={styles["registerPage____form"]}>
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
                  Save Changes
                </button>
              </form>
            </div>
  )
}

export default RegisterForm