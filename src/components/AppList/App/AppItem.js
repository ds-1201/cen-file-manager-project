import React from "react";
import styles from "./App.module.scss";
import PropTypes from "prop-types";

const AppItem = ({ app }) => {
  return (
    <div className={styles["app-item"]}>
      {app.icon}
      <p>{app.name}</p>
    </div>
  );
};

AppItem.propTypes = {
  app: PropTypes.object.isRequired,
};

export default AppItem;
