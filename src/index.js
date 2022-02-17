import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ModalOpenContext from "./context/ModalOpen/ModalOpenContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalOpenContext>
      <App />
    </ModalOpenContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
