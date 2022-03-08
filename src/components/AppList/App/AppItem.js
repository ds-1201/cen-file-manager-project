import React from "react";
import styles from "./App.module.scss";
import PropTypes from "prop-types";
import FileIcon from "assets/FileIcon";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useActiveFile } from "context/File/FileContext";

const AppItem = ({ app }) => {
  const { activeFileDispatch } = useActiveFile();
  const { modalDispatch } = useModalOpen();

  const handleClick = () => {
    activeFileDispatch({ type: "ACTIVE", payload: app });
    modalDispatch({ type: "OPEN", payload: "Edit" });
  };
  return (
    <div className={styles["app-item"]} onClick={handleClick}>
      <FileIcon />
      <p>{app.label}</p>
    </div>
  );
};

AppItem.propTypes = {
  app: PropTypes.object.isRequired,
};

export default AppItem;
