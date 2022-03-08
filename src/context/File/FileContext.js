import propTypes from "prop-types";
import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = "";

export const useActiveFile = () => {
  return useContext(GlobalContext);
};

const ActiveFileContext = ({ children }) => {
  const ActiveFileReducer = (state, action) => {
    switch (action.type) {
      case "ACTIVE": {
        return action.payload;
      }
      case "INACTIVE": {
        return "";
      }
      default:
        return state;
    }
  };

  const [activeFile, activeFileDispatch] = useReducer(
    ActiveFileReducer,
    initialState,
  );

  const value = { activeFile, activeFileDispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

ActiveFileContext.propTypes = {
  children: propTypes.any.isRequired,
};

export default ActiveFileContext;
