import AddFileIcon from "assets/AddFileIcon";
import AddFolderIcon from "assets/AddFolderIcon";
import React from "react";
import styles from "./ButtonSection.module.scss";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useMode } from "context/Mode/ModeContext";
const ButtonSection = () => {
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();
  return (
    <>
      <div className={styles["sidebar__button-box"]}>
        <button
          className={`${styles["btn"]} ${
            !isDark ? styles["dark__btn-outlined"] : styles["btn-outlined"]
          }`}
          onClick={() => {
            modalDispatch({ type: "OPEN", payload: "File" });
          }}
        >
          <AddFileIcon />
          Add File
        </button>
        <button
          className={`${styles["btn"]} ${
            !isDark ? styles["dark__btn-outlined"] : styles["btn-outlined"]
          }`}
          onClick={() => {
            modalDispatch({ type: "OPEN", payload: "Folder" });
          }}
        >
          <AddFolderIcon /> Add Folder
        </button>
      </div>
    </>
  );
};

export default ButtonSection;
