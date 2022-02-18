import React from "react";
import styles from "./Dropdown.module.scss";
import PropTypes from "prop-types";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const SettingDropdown = ({ style, items }) => {
  const { modalDispatch } = useModalOpen();
  return (
    <ul className={styles["setting-dropdown"]} style={style}>
      {items?.map((item, i) => {
        const { type } = item;
        return (
          <li
            key={i}
            onClick={() => {
              return type
                ? type === "Mode"
                  ? alert("Still InProgress Will Complete Soon !!! :)")
                  : modalDispatch({ type: "OPEN", payload: item.type })
                : modalDispatch({ type: "OPEN", payload: "Lock" });
            }}
          >
            <a href="#"> {item.name} </a>
          </li>
        );
      })}
    </ul>
  );
};

SettingDropdown.propTypes = {
  style: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default SettingDropdown;
