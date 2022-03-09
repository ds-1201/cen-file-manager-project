import React from "react";
import styles from "./App.module.scss";
import PropTypes from "prop-types";
import FileIcon from "assets/FileIcon";
import FileIconDark from "assets/FileIconDark";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useActiveFile } from "context/File/FileContext";
import { useMode } from "context/Mode/ModeContext";

const AppItem = ({ app }) => {
  const { activeFileDispatch } = useActiveFile();
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();

  const handleClick = () => {
    activeFileDispatch({ type: "ACTIVE", payload: app });
    modalDispatch({ type: "OPEN", payload: "Edit" });
  };
  return (
    <div
      className={`${!isDark ? styles["dark__app-item"] : styles["app-item"]}`}
      onClick={handleClick}
    >
      {!isDark ? <FileIconDark /> : <FileIcon />}
      <p>{app.label}</p>
    </div>
  );
};

AppItem.propTypes = {
  app: PropTypes.object.isRequired,
};

export default AppItem;
