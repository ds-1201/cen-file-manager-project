import React, { useState, useRef } from "react";
import styles from "./Sidebar.module.scss";
import PropTypes from "prop-types";
import SidebarList from "./../SidebarList/SidebarList";
import ButtonSection from "./ButtonSection/ButtonSection";
import logo from "./../../assets/company_logo.png";
import logo_dark from "./../../assets/company_logo_dark.png";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useMode } from "context/Mode/ModeContext";
import LockIcon from "./../../assets/LockIcon";

const Sidebar = ({ sidebarWidth, setSidebarWidth }) => {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();

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
        className={!isDark ? styles["dark__sidebar"] : styles["sidebar"]}
        style={{ width: sidebarWidth }}
        ref={sidebarRef}
      >
        <div className={styles["sidebar__outer-container"]}>
          <div className={styles["sidebar__inner-container"]}>
            <div>
              <div className={styles["sidebar__logo-box"]}>
                <img src={!isDark ? logo_dark : logo} alt="[Company-logo]" />
              </div>
            </div>
            <ButtonSection />

            <div className={styles["sidebar__list-box"]}>
              <SidebarList />
            </div>
            <div className={styles["sidebar__lock-box"]}>
              <button
                className={`${styles["btn"]} ${
                  !isDark
                    ? styles["dark__btn-contained"]
                    : styles["btn-contained"]
                }`}
                onClick={() => modalDispatch({ type: "OPEN", payload: "Lock" })}
              >
                <LockIcon />
                Lock now
              </button>
            </div>
          </div>
          <div
            className={
              !isDark
                ? styles["dark__sidebar__scroller"]
                : styles["sidebar__scroller"]
            }
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
