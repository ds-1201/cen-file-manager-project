import AddFileIcon from "assets/AddFileIcon";
import AddFolderIcon from "assets/AddFolderIcon";
import React from "react";
import styles from "./ButtonSection.module.scss";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const ButtonSection = () => {
  const { modalDispatch } = useModalOpen();

  return (
    <>
      <div className={styles["sidebar__button-box"]}>
        <button
          className={`${styles["btn"]} ${styles["btn-outlined"]}`}
          onClick={() => {
            modalDispatch({ type: "OPEN", payload: "File" });
          }}
        >
          <AddFileIcon />
          Add File
        </button>
        <button
          className={`${styles["btn"]} ${styles["btn-outlined"]}`}
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
