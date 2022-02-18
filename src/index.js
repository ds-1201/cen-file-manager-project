import FolderListContext from "context/FolderList/FolderListContext";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ModalOpenContext from "./context/ModalOpen/ModalOpenContext";

ReactDOM.render(
  <React.StrictMode>
    <FolderListContext>
      <ModalOpenContext>
        <App />
      </ModalOpenContext>
    </FolderListContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
