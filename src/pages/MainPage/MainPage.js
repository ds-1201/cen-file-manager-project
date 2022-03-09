import DashboardMain from "components/DashboardMain/DashboardMain";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { useModalOpen } from "./../../context/ModalOpen/ModalOpenContext";
import AddForm from "components/AddForm/AddForm";
import PinForm from "components/PinForm/PinForm";
import SetPinForm from "components/SetPinForm/SetPinForm";
import EditorFileForm from "components/EditFileForm/EditFileForm";

function MainPage() {
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const { modal, modalDispatch } = useModalOpen();

  useEffect(() => {
    const password = localStorage.getItem("file_explorer_password");
    if (!password) {
      localStorage.setItem("file_explorer_password", "1234");
    }
    modalDispatch({ type: "OPEN", payload: "Lock" });
  }, []);
  let display = <h2>Server Error :(</h2>;
  if (modal.open) {
    switch (modal.type) {
      case "Lock": {
        display = <PinForm />;
        break;
      }
      case "Edit": {
        display = <EditorFileForm />;
        break;
      }
      case "Reset": {
        display = <SetPinForm />;
        break;
      }
      case "File": {
        display = <AddForm type={modal.type} />;
        break;
      }
      case "Folder": {
        display = <AddForm type={modal.type} />;
        break;
      }
      default: {
        display = <h2>Server Error :(</h2>;
        break;
      }
    }
  }

  return (
    <>
      {modal.open && <Modal>{display}</Modal>}
      <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} />
      <DashboardMain sidebarWidth={sidebarWidth} />
    </>
  );
}

export default MainPage;
