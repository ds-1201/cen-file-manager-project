import PropTypes from "prop-types";
import React, { useContext, createContext, useReducer } from "react";
import { links } from "../../StartData";

const initialState = links;

const updateState = (newItem, parent, active) => {
  if (active === "") {
    return [...parent, newItem];
  }

  for (let i = 0; i < parent.length; i++) {
    if (parent[i].id === active.id) {
      parent[i].children.push(newItem);
      return parent;
    }
    parent[i] = updateState(newItem, parent[i], active);
  }
  return parent;
};

const GlobalContext = createContext();

export const useData = () => {
  return useContext(GlobalContext);
};

const listsReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      let data = state;
      const temp = updateState(action.payload, data, action.active);
      return temp;
    }

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
