import React, { useState } from "react";
import styles from "./AddForm.module.scss";
import PropTypes from "prop-types";
import { useFolderList } from "context/FolderList/FolderListContext";
import { useData } from "context/Data/DataContext";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const AddForm = ({ type }) => {
  const { fList } = useFolderList();
  const { listsDispatch } = useData();
  const { modalDispatch } = useModalOpen();
  const [newItem, setNewItem] = useState({
    id: Math.random().toString(),
    label: "",
    type: type,
    ...(type === "Folder" && { children: [] }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    listsDispatch({
      type: "ADD",
      payload: newItem,
      add: newItem.type,
      active: fList.active,
    });
    setNewItem({
      id: Math.random().toString(),
      label: "",
      type: type,
      ...(type === "Folder" && { children: [] }),
    });

    modalDispatch({ type: "CLOSE" });
  };
  return (
    <form className={styles["add-form"]}>
      <h2 className={styles["title"]}>Create New {type}</h2>
      <div className={styles["add-form____form-control"]}>
        <label htmlFor="add-form-label">New {type} Name:</label>
        <input
          id="add-form-label"
          type="text"
          placeholder={`Enter ${type} Name`}
          className={styles["add-form____input"]}
          value={newItem.label}
          onChange={(e) =>
            setNewItem((prev) => ({ ...prev, label: e.target.value }))
          }
        />
      </div>
      <button
        type="submit"
        className={`${styles["btn"]} ${styles["btn-submit"]}`}
        onClick={handleSubmit}
      >
        Create Now
      </button>
    </form>
  );
};

AddForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AddForm;
