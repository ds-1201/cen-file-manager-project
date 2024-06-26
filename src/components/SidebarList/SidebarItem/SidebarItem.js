import React, { useState } from "react";
import styles from "./SidebarItem.module.scss";
import PropTypes from "prop-types";
import FolderStart from "assets/FolderStart";
import FolderEnd from "assets/FolderEnd";
import { useFolderList } from "context/FolderList/FolderListContext";
import { useMode } from "context/Mode/ModeContext";

const SidebarItem = ({ link, depth, style, menuList }) => {
  const { fListDispatch } = useFolderList();
  const { isDark } = useMode();
  const { label, children } = link;
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const links = children?.filter((child) => child.type === "Folder");

  return (
    <div className={styles["sidebar-item"]} style={style}>
      <div
        className={!isDark ? styles["dark__item"] : styles["item"]}
        onClick={() => {
          setDropDownOpen((prev) => !prev);
          fListDispatch({ type: "ACTIVE", payload: link });
        }}
      >
        {" "}
        {dropDownOpen ? <FolderStart /> : <FolderEnd />} {label}
      </div>
      {dropDownOpen && (
        <div className={styles["item__container"]}>
          {links.map((child) => {
            return (
              <SidebarItem
                key={child.id}
                link={child}
                depth={depth + 1}
                style={{ marginLeft: `${depth * 1.2}rem` }}
                menuList={menuList}
              />
            );
          })}
        </div>
      )}

      {dropDownOpen && (
        <div
          className={styles["item"]}
          onClick={() => setDropDownOpen((prev) => !prev)}
        >
          <FolderEnd /> {label}
        </div>
      )}
    </div>
  );
};

SidebarItem.propTypes = {
  link: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired,
};

export default SidebarItem;
