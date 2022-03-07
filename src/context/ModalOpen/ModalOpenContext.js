import propTypes from "prop-types";
import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  open: false,
  type: "",
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case "CLOSE":
      return { ...state, open: false, type: "" };
    case "OPEN":
      return { ...state, open: true, type: action.payload };
    default:
      return { ...state };
  }
};

export const useModalOpen = () => {
  return useContext(GlobalContext);
};

const ModalOpenContext = ({ children }) => {
  const [modal, modalDispatch] = useReducer(modalReducer, initialState);
  const value = { modal, modalDispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

ModalOpenContext.propTypes = {
  children: propTypes.any.isRequired,
};

export default ModalOpenContext;
