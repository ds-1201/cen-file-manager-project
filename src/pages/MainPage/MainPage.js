import DashboardMain from "components/DashboardMain/DashboardMain";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import { useModalOpen } from "./../../context/ModalOpen/ModalOpenContext";
import AddForm from "components/AddForm/AddForm";

function MainPage() {
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const { modal } = useModalOpen();

  return (
    <>
      {modal.open && (
        <Modal>
          <AddForm type={modal.type} />
        </Modal>
      )}
      <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} />
      <DashboardMain sidebarWidth={sidebarWidth} />
    </>
  );
}

export default MainPage;
