import React, { useState } from "react";
import styles from "./SidebarItem.module.scss";
import PropTypes from "prop-types";
import FolderStart from "assets/FolderStart";
import FolderEnd from "assets/FolderEnd";

const SidebarItem = ({ link, depth, style, menuList }) => {
  const { label, children } = link;
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const links = children?.filter((child) => child.type === "Folder");

  return (
    <div className={styles["sidebar-item"]} style={style}>
      <div
        className={styles["item"]}
        onClick={() => setDropDownOpen((prev) => !prev)}
      >
        {" "}
        {dropDownOpen ? <FolderStart /> : <FolderEnd />} {label}
      </div>
      {dropDownOpen && children?.length > 0 && (
        <div className={styles["item__container"]}>
          {links.map((child, i) => {
            return (
              <SidebarItem
                key={i}
                link={child}
                depth={depth + 1}
                style={{ marginLeft: `${depth * 1.2}rem` }}
                menuList={menuList}
              />
            );
          })}
        </div>
      )}

      {dropDownOpen && children?.length > 0 && (
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
