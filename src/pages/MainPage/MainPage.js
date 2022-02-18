import DashboardMain from "components/DashboardMain/DashboardMain";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { useModalOpen } from "./../../context/ModalOpen/ModalOpenContext";
import AddForm from "components/AddForm/AddForm";
import PinForm from "components/PinForm/PinForm";

function MainPage() {
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const { modal, modalDispatch } = useModalOpen();

  useEffect(() => {
    modalDispatch({ type: "OPEN", payload: "Lock" });
  }, []);

  return (
    <>
      {modal.open && (
        <Modal>
          {modal.type !== "Lock" ? <AddForm type={modal.type} /> : <PinForm />}
        </Modal>
      )}
      <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} />
      <DashboardMain sidebarWidth={sidebarWidth} />
    </>
  );
}

export default MainPage;
