import DataContext from "context/Data/DataContext";
import FolderListContext from "context/FolderList/FolderListContext";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ModalOpenContext from "./context/ModalOpen/ModalOpenContext";
import ActiveFileContext from "./context/File/FileContext";

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
      <FolderListContext>
        <ActiveFileContext>
          <ModalOpenContext>
            <App />
          </ModalOpenContext>
        </ActiveFileContext>
      </FolderListContext>
    </DataContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
