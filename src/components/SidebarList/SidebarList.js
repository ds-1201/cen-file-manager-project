import React from "react";
import styles from "./SidebarList.module.scss";
import SidebarItem from "./SidebarItem/SidebarItem";
import { links } from "./Data";

const SidebarList = () => {
  let depth = 0;
  let menuList = [];
  return (
    <div className={styles["list"]}>
      {links.map((link, i) => {
        return (
          <SidebarItem
            key={i}
            link={link}
            depth={depth + 1}
            menuList={menuList}
            style={{ marginLeft: `${depth * 1.2}rem` }}
          />
        );
      })}
    </div>
  );
};

export default SidebarList;
