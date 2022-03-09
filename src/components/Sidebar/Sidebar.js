import React, { useState, useRef } from "react";
import styles from "./Sidebar.module.scss";
import PropTypes from "prop-types";
import SidebarList from "./../SidebarList/SidebarList";
import ButtonSection from "./ButtonSection/ButtonSection";
import logo from "./../../assets/company_logo.png";
import lock_icon from "./../../assets/lock_icon.png";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const Sidebar = ({ sidebarWidth, setSidebarWidth }) => {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const { modalDispatch } = useModalOpen();

  const startResizing = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        const value =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left;
        setSidebarWidth(value <= 320 ? 320 : value);
      }
    },
    [isResizing],
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <div
        className={styles["sidebar"]}
        style={{ width: sidebarWidth }}
        ref={sidebarRef}
      >
        <div className={styles["sidebar__outer-container"]}>
          <div className={styles["sidebar__inner-container"]}>
            <div>
              <div className={styles["sidebar__logo-box"]}>
                <img src={logo} alt="[Company-logo]" />
              </div>
            </div>
            <ButtonSection />

            <div className={styles["sidebar__list-box"]}>
              <SidebarList />
            </div>
            <div className={styles["sidebar__lock-box"]}>
              <button
                className={`${styles["btn"]} ${styles["btn-contained"]} ${styles["btn-lock"]}`}
                onClick={() => modalDispatch({ type: "OPEN", payload: "Lock" })}
              >
                <i>
                  <img src={lock_icon} alt="" width="90%" />{" "}
                </i>
                Lock now
              </button>
            </div>
          </div>
          <div
            className={styles["sidebar__scroller"]}
            onMouseDown={startResizing}
          >
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  sidebarWidth: PropTypes.number.isRequired,
  setSidebarWidth: PropTypes.func.isRequired,
};

export default Sidebar;
