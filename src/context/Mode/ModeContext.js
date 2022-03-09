import propTypes from "prop-types";
import React, { createContext, useContext, useReducer, useEffect } from "react";

const GlobalContext = createContext();

const initialState = "";

export const useMode = () => {
  return useContext(GlobalContext);
};

const ModeContext = ({ children }) => {
  const ModeReducer = (state, action) => {
    switch (action.type) {
      case "START": {
        if (action.payload === "Light") {
          return false;
        } else {
          return true;
        }
      }
      case "CHANGE": {
        if (!state === true) {
          localStorage.setItem("file_explorer_mode", "Dark");
        } else {
          localStorage.setItem("file_explorer_mode", "Light");
        }
        return !state;
      }
      default:
        return state;
    }
  };

  const [isDark, isDarkDispatch] = useReducer(ModeReducer, initialState);

  useEffect(() => {
    console.log({ isDark });
  }, [isDark]);

  const value = { isDark, isDarkDispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

ModeContext.propTypes = {
  children: propTypes.any.isRequired,
};

export default ModeContext;
