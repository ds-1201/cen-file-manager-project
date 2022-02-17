import React from "react";
import styles from "./SidebarList.module.scss";
import SidebarItem from "./SidebarItem/SidebarItem";
import { links } from "./Data";

const SidebarList = () => {
  return (
    <ul className={styles["list"]}>
      {links.map((link, i) => {
        return <SidebarItem key={i} link={link} />;
      })}
    </ul>
  );
};

export default SidebarList;
