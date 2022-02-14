import React from "react";
import styles from "./SidebarList.module.scss";
import SidebarItem from "./SidebarItem/SidebarItem";

const SidebarList = () => {
  return (
    <div className={styles["list"]}>
      <SidebarItem />
    </div>
  );
};

export default SidebarList;
