import React, { useRef, useEffect } from "react";
import styles from "./Modal.module.scss";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useActiveFile } from "context/File/FileContext";
import PropTypes from "prop-types";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const { activeFileDispatch } = useActiveFile();
  const { modal, modalDispatch } = useModalOpen();

  const handleClick = (e) => {
    e.preventDefault();
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      if (modal.type === "Edit") {
        activeFileDispatch({ type: "INACTIVE" });
      }
      if (modal.type !== "Lock") {
        modalDispatch({ type: "CLOSE" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleClick);
    return () => {
      window.removeEventListener("mouseup", handleClick);
    };
  }, [handleClick]);

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__box"]} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Modal;
