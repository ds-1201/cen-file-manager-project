import React from "react";
import styles from "./SidebarItem.module.scss";
import FolderStart from "assets/FolderStart";
import FolderEnd from "assets/FolderEnd";
const SidebarItem = () => {
  return (
    <>
      <div className={styles["item"]}>
        {" "}
        <FolderStart /> SidebarItem
      </div>
      <div className={styles["item"]}>
        {" "}
        <FolderEnd /> SidebarItem
      </div>
    </>
  );
};

export default SidebarItem;
