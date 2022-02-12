import React from 'react'
import styles from "./Main.module.scss";
import register_img from "./../../assets/register_img.png"
import RegisterForm from "./../RegisterForm/RegisterForm";

const Main = () => {
  return (
    <div className={styles.loginPage}>
        <div className={styles["loginPage__left"]}>
          <div className={styles["loginPage__left__container"]}>
            <div className={styles["loginPage__left__heading-box"]}>
              <h1>
                <span className={styles["loginPage__heading_1"]}>
                  Welcome to your
                </span>
                <span className={styles["loginPage__heading_2"]}>
                  Dashboard
                </span>
              </h1>
              <h3>
                <span className={styles["loginPage__sub_1"]}>
                  This is the homepage of your
                </span>
                <span className={styles["loginPage__sub_2"]}>
                  file explorer, set your pin and start
                </span>
              </h3>
            </div>
            <div className={styles["loginPage__left__image-box"]}>
              <img src={register_img} alt="loginPage-img" />
            </div>
          </div>
        </div>
        <div className={styles["loginPage__right"]}>
          <div className={styles["loginPage__right__container"]}>
            <RegisterForm />
          </div>
        </div>
      </div>
  )
}

export default Main