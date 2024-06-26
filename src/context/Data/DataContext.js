import PropTypes from "prop-types";
import React, { useContext, createContext, useReducer } from "react";
import { links } from "../../StartData";

const initialState = links;

const updateState = (newItem, parent, active) => {
  if (active === "") {
    return [...parent, newItem];
  }

  for (let i = 0; i < parent?.length; i++) {
    if (parent[i].type !== "Folder") {
      continue;
    }
    if (parent[i].id === active.id) {
      parent[i].children.push(newItem);
      return parent;
    }
    parent[i].children = updateState(newItem, parent[i].children, active);
  }
  return parent;
};

const editFile = (content, parent, active) => {
  for (let i = 0; i < parent?.length; i++) {
    if (parent[i].id === active.id) {
      parent[i].content = content;
      return parent;
    }
    if (parent[i].type === "File") {
      continue;
    }
    parent[i].children = editFile(content, parent[i].children, active);
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
    case "EDIT": {
      let data = state;
      const temp = editFile(action.payload, data, action.active);
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
