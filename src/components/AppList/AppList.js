import React from "react";
import styles from "./AppList.module.scss";
import AppItem from "./App/AppItem";
import FolderIcon from "assets/FolderIcon";
import ImgIcon from "assets/ImgIcon";
import FileIcon from "assets/FileIcon";

const demo = [
  {
    id: 1,
    name: "sample-1",
    type: 0,
    icon: <FolderIcon />,
  },
  {
    id: 2,
    name: "sample-2",
    type: 1,
    icon: <FileIcon />,
  },
  {
    id: 3,
    name: "sample-3",
    type: 2,
    icon: <ImgIcon />,
  },
];

const AppList = () => {
  return (
    <div className={styles["app-list"]}>
      {demo.map((app) => {
        return <AppItem key={app.id} app={app} />;
      })}
    </div>
  );
};

export default AppList;
