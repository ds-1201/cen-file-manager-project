import AddFileIcon from "assets/AddFileIcon";
import AddFolderIcon from "assets/AddFolderIcon";
import React, { useState } from "react";
import styles from "./ButtonSection.module.scss";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import Modal from "components/Modal/Modal";
import AddForm from "components/AddForm/AddForm";

const ButtonSection = () => {
  const { modalOpen, setModalOpen } = useModalOpen();
  const [type, setType] = useState("");
  return (
    <>
      {modalOpen && (
        <Modal>
          <AddForm type={type} />
        </Modal>
      )}
      <div className={styles["sidebar__button-box"]}>
        <button
          className={`${styles["btn"]} ${styles["btn-outlined"]}`}
          onClick={() => {
            setType("file");
            setModalOpen(true);
          }}
        >
          <AddFileIcon />
          Add File
        </button>
        <button
          className={`${styles["btn"]} ${styles["btn-outlined"]}`}
          onClick={() => {
            setType("file");
            setModalOpen(true);
          }}
        >
          <AddFolderIcon /> Add Folder
        </button>
      </div>
    </>
  );
};

export default ButtonSection;
