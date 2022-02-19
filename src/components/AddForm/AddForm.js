import React, { useState } from "react";
import styles from "./AddForm.module.scss";
import PropTypes from "prop-types";

const AddForm = ({ type }) => {
  const [newItem, setNewItem] = useState({
    id: Math.random().toString(),
    label: "",
    type: type,
    ...(type === "Folder" && { children: [] }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
    setNewItem({
      id: Math.random().toString(),
      label: "",
      type: type,
      ...(type === "Folder" && { children: [] }),
    });
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
