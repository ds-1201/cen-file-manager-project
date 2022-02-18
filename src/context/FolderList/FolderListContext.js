import propTypes from "prop-types";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  depth: 0,
  list: [],
};

const folderListReducer = (state, action) => {
  switch (action.type) {
    case "CLOSE":
      return { ...state, open: false, type: "" };
    case "OPEN":
      return { ...state, open: true, type: action.payload };
    default:
      return { ...state };
  }
};

export const useFolderList = () => {
  return useContext(GlobalContext);
};

const FolderListContext = ({ children }) => {
  const [fList, fListDispatch] = useReducer(folderListReducer, initialState);

  useEffect(() => {
    console.log({ fList });
  }, [fList]);

  const value = { fList, fListDispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

FolderListContext.propTypes = {
  children: propTypes.any.isRequired,
};

export default FolderListContext;
