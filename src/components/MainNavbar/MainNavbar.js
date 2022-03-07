import React, { useState } from "react";
import styles from "./MainNavbar.module.scss";
import Search from "./../SearchForm/SearchForm";
import SunLogo from "./../../assets/SunLogo";
import PlusIcon from "./../../assets/PlusIcon";
import CogIcon from "./../../assets/CogIcon";
import Dropdown from "./Dropdown/Dropdown";
import { useFolderList } from "context/FolderList/FolderListContext";
import {
  settingDropDownList,
  ModeDropDownList,
  AddDropDownList,
} from "./Dropdown/Data";

const MainNavbar = () => {
  const [settingDropDown, setSettingDropdown] = useState(false);
  const [addDropDown, setAddDropdown] = useState(false);
  const [modeDropDown, setModeDropdown] = useState(false);
  const { fList, fListDispatch } = useFolderList();
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__top"]}>
        <div className={styles["navbar__top__container"]}>
          <Search />
          <div className={styles["navbar__button-section"]}>
            <div>
              <button
                className={`${styles["btn"]} ${styles["btn-outlined"]}`}
                onClick={() => {
                  setAddDropdown(false);
                  setModeDropdown((prev) => !prev);
                  setSettingDropdown(false);
                }}
              >
                <SunLogo />
                Light Mode
              </button>
              <Dropdown
                style={
                  modeDropDown ? { display: "block" } : { display: "none" }
                }
                items={ModeDropDownList}
              />
            </div>

            <div>
              <button
                className={`${styles["btn"]} ${styles["btn-outlined-2"]}`}
                onClick={() => {
                  setAddDropdown((prev) => !prev);
                  setModeDropdown(false);
                  setSettingDropdown(false);
                }}
              >
                <PlusIcon />
              </button>
              <Dropdown
                style={addDropDown ? { display: "block" } : { display: "none" }}
                items={AddDropDownList}
              />
            </div>
            <div>
              <button
                className={`${styles["btn"]} ${styles["btn-outlined-2"]}`}
                onClick={() => {
                  setAddDropdown(false);
                  setModeDropdown(false);
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
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["navbar__breadCrumb"]}>
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
                <span className={styles["navbar__folderName"]}>
                  {item.label}
                </span>
              </span>
            );
          })}
        </h3>

        {/* <h3>
          Some Folder name / file1 /{" "}
          <span className={styles["navbar__current-file"]}>file2</span>
        </h3> */}
      </div>
    </div>
  );
};

export default MainNavbar;
