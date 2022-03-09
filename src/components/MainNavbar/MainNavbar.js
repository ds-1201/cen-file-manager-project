import React, { useState } from "react";
import styles from "./MainNavbar.module.scss";
import Search from "./../SearchForm/SearchForm";
import SunLogo from "./../../assets/SunLogo";
import MoonLogo from "assets/MoonLogo";
import PlusIcon from "./../../assets/PlusIcon";
import CogIcon from "./../../assets/CogIcon";
import Dropdown from "./Dropdown/Dropdown";
import { useFolderList } from "context/FolderList/FolderListContext";
import { settingDropDownList, AddDropDownList } from "./Dropdown/Data";
import { useMode } from "context/Mode/ModeContext";

const MainNavbar = () => {
  const [settingDropDown, setSettingDropdown] = useState(false);
  const [addDropDown, setAddDropdown] = useState(false);

  const { fList, fListDispatch } = useFolderList();
  const { isDark, isDarkDispatch } = useMode();
  return (
    <div className={`${styles["navbar"]} ${isDark && styles["dark__navbar"]}`}>
      <div className={styles["navbar__top"]}>
        <div className={styles["navbar__top__container"]}>
          <Search />
          <div className={styles["navbar__button-section"]}>
            <div>
              <button
                className={`${styles["btn"]} ${
                  styles[isDark ? "btn-outlined" : "dark__btn-outlined"]
                }`}
                onClick={() => {
                  isDarkDispatch({ type: "CHANGE" });
                }}
              >
                {isDark ? <SunLogo /> : <MoonLogo />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <div>
              <button
                className={`${styles["btn"]} ${
                  !isDark
                    ? styles["dark__btn-outlined-2"]
                    : styles["btn-outlined-2"]
                }`}
                onClick={() => {
                  setAddDropdown((prev) => !prev);

                  setSettingDropdown(false);
                }}
              >
                <PlusIcon />
              </button>
              <Dropdown
                style={addDropDown ? { display: "block" } : { display: "none" }}
                items={AddDropDownList}
                setDropdown={setAddDropdown}
              />
            </div>
            <div>
              <button
                className={`${styles["btn"]} ${
                  !isDark
                    ? styles["dark__btn-outlined-2"]
                    : styles["btn-outlined-2"]
                }`}
                onClick={() => {
                  setAddDropdown(false);

                  setSettingDropdown((prev) => !prev);
                }}
              >
                <CogIcon />
              </button>
              <Dropdown
                style={
                  settingDropDown ? { display: "block" } : { display: "none" }
                }
                items={settingDropDownList}
                setDropdown={setSettingDropdown}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !isDark
            ? styles["dark__navbar__breadCrumb"]
            : styles["navbar__breadCrumb"]
        }
      >
        <h3>
          <span
            className={styles["navbar__folderName"]}
            onClick={() => fListDispatch({ type: "ROOT" })}
          >
            Root
          </span>
          {fList.list?.map((item) => {
            return (
              <span key={item.id}>
                {" "}
                /{" "}
                <span
                  className={styles["navbar__folderName"]}
                  onClick={() =>
                    fListDispatch({ type: "ACTIVE", payload: item })
                  }
                >
                  {item.label}
                </span>
              </span>
            );
          })}
        </h3>
      </div>
    </div>
  );
};

export default MainNavbar;
