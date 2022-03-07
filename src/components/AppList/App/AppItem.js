import React from "react";
import styles from "./App.module.scss";
import PropTypes from "prop-types";
import FileIcon from "assets/FileIcon";

const AppItem = ({ app }) => {
  return (
    <div className={styles["app-item"]}>
      <FileIcon />
      <p>{app.label}</p>
    </div>
  );
};

AppItem.propTypes = {
  app: PropTypes.object.isRequired,
};

export default AppItem;
