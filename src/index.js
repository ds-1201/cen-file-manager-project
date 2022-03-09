import DataContext from "context/Data/DataContext";
import FolderListContext from "context/FolderList/FolderListContext";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ModalOpenContext from "./context/ModalOpen/ModalOpenContext";
import ActiveFileContext from "./context/File/FileContext";
import ModeContext from "./context/Mode/ModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
      <ModeContext>
        <FolderListContext>
          <ActiveFileContext>
            <ModalOpenContext>
              <App />
            </ModalOpenContext>
          </ActiveFileContext>
        </FolderListContext>
      </ModeContext>
    </DataContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
