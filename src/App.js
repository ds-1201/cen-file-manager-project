import MainPage from "pages/MainPage/MainPage";
import React from "react";
import "styles/main.scss";
import { useModalOpen } from "./context/ModalOpen/ModalOpenContext";
import Modal from "./components/Modal/Modal";

function App() {
  const { modalOpen } = useModalOpen();
  return (
    <>
      {modalOpen && <Modal />}
      <MainPage />
    </>
  );
}

export default App;
