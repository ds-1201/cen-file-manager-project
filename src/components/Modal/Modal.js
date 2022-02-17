import React, { useRef, useEffect } from "react";
import styles from "./Modal.module.scss";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import PropTypes from "prop-types";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const { setModalOpen } = useModalOpen();

  const handleClick = (e) => {
    e.preventDefault();
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleClick);
    return () => {
      window.removeEventListener("mouseup", handleClick);
    };
  }, [handleClick]);

  return (
    <div className={styles["modal"]} onMouseDown={(e) => e.preventDefault()}>
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
