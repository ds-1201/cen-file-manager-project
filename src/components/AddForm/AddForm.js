import React from "react";
import styles from "./AddForm.module.scss";
import PropTypes from "prop-types";

const AddForm = ({ type }) => {
  return (
    <div className={styles["add-form"]}>
      <h2 className={styles["title"]}>Create {type}</h2>
    </div>
  );
};

AddForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AddForm;
