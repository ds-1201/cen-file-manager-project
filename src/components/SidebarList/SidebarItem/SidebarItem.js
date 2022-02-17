import React from "react";
import styles from "./SidebarItem.module.scss";
import PropTypes from "prop-types";
import FolderStart from "assets/FolderStart";
import FolderEnd from "assets/FolderEnd";
const SidebarItem = ({ link }) => {
  const { label, children = [] } = link;
  return (
    <li>
      {children.length > 0 ? (
        <>
          <div className={styles["item"]}>
            {" "}
            <FolderStart /> {label}
          </div>
          <ul>
            {children.map((child, i) => {
              return <SidebarItem key={i} link={child} />;
            })}
          </ul>

          <div className={styles["item"]}>
            {" "}
            <FolderEnd /> {label}
          </div>
        </>
      ) : (
        <>
          <div className={styles["item"]}>
            {" "}
            <FolderEnd /> {label}
          </div>
        </>
      )}
    </li>
  );
};

SidebarItem.propTypes = {
  link: PropTypes.object.isRequired,
};

export default SidebarItem;
