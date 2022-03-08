import React from "react";
import styles from "./Dropdown.module.scss";
import PropTypes from "prop-types";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const SettingDropdown = ({ style, items, setDropdown }) => {
  const { modalDispatch } = useModalOpen();

  return (
    <ul className={styles["setting-dropdown"]} style={style}>
      {items?.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              switch (item.type) {
                case "Mode": {
                  alert("Still InProgress Will Complete Soon !!! :)");
                  break;
                }
                case "Lock": {
                  modalDispatch({ type: "OPEN", payload: item.type });
                  break;
                }
                case "File": {
                  modalDispatch({ type: "OPEN", payload: item.type });
                  break;
                }
                case "Folder": {
                  modalDispatch({ type: "OPEN", payload: item.type });
                  break;
                }
                case "Reset": {
                  modalDispatch({ type: "OPEN", payload: item.type });
                  break;
                }
                default: {
                  alert("Server Error!!!");
                  break;
                }
              }
              return setDropdown(false);
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
  setDropdown: PropTypes.func.isRequired,
};

export default SettingDropdown;
