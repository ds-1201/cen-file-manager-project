import PropTypes from "prop-types";
import React, { useContext, createContext, useReducer } from "react";
import { links } from "../../StartData";

const initialState = links;

const GlobalContext = createContext();

export const useData = () => {
  return useContext(GlobalContext);
};

const listsReducer = (state, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

const DataContext = ({ children }) => {
  const [lists, listsDispatch] = useReducer(listsReducer, initialState);
  const value = { lists, listsDispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

DataContext.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataContext;
