import React, { useState } from "react";
import styles from "./SidebarItem.module.scss";
import PropTypes from "prop-types";
import FolderStart from "assets/FolderStart";
import FolderEnd from "assets/FolderEnd";

const SidebarItem = ({ link, depth, style }) => {
  const { label } = link;
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      {link.children ? (
        <div className={styles["sidebar-item"]} style={style}>
          <div
            className={styles["item"]}
            onClick={() => setDropDownOpen((prev) => !prev)}
          >
            {" "}
            {dropDownOpen ? <FolderStart /> : <FolderEnd />} {label}
          </div>
          {dropDownOpen && link.children.length > 0 && (
            <div className={styles["item__container"]}>
              {link.children.map((child, i) => {
                return (
                  <SidebarItem
                    key={i}
                    link={child}
                    depth={depth + 1}
                    style={{ marginLeft: `${depth * 1.2}rem` }}
                  />
                );
              })}
            </div>
          )}

          {dropDownOpen && link.children?.length > 0 && (
            <div
              className={styles["item"]}
              onClick={() => setDropDownOpen((prev) => !prev)}
            >
              <FolderEnd /> {label}
            </div>
          )}
        </div>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </>
  );
};

SidebarItem.propTypes = {
  link: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired,
};

export default SidebarItem;
