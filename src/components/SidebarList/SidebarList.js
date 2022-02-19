import React from "react";
import styles from "./SidebarList.module.scss";
import SidebarItem from "./SidebarItem/SidebarItem";
import { useData } from "./../../context/Data/DataContext";

const SidebarList = () => {
  let depth = 0;
  let menuList = [];
  const { lists } = useData();
  const links = lists?.filter((list) => list.type === "Folder");
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
