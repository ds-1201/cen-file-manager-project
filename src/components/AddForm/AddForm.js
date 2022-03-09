import React, { useState } from "react";
import styles from "./AddForm.module.scss";
import PropTypes from "prop-types";
import { useFolderList } from "context/FolderList/FolderListContext";
import { useData } from "context/Data/DataContext";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useMode } from "context/Mode/ModeContext";

const AddForm = ({ type }) => {
  const { fList } = useFolderList();
  const { listsDispatch } = useData();
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();
  const [label, setLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (label === "") {
      alert(`${type} Name cannot be empty!!!`);
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      label: label,
      type: type,
      ...(type === "Folder" ? { children: [] } : { content: "" }),
    };
    console.log(newItem);
    listsDispatch({
      type: "ADD",
      payload: newItem,
      add: newItem.type,
      active: fList.active,
    });
    setLabel("");

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
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={`${styles[!isDark ? "dark__btn" : "btn"]} ${
          styles[!isDark ? "dark__btn-submit" : "btn-submit"]
        }`}
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
