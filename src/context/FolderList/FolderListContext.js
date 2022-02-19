import propTypes from "prop-types";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { links } from "StartData";

const GlobalContext = createContext();

const initialState = [];

const findActive = (item, parent) => {
  const flist = parent?.filter((p) => p.type === "Folder");
  if (flist?.length === 0) {
    return [];
  }
  for (let i = 0; i < flist.length; i++) {
    let link = flist[i];
    let list = [];
    if (link.id === item.id) {
      list.push(link);
      return list;
    }
    let small = findActive(item, link.children);
    if (small?.length > 0) {
      small.unshift(link);
      return small;
    }
  }
  return [];
};

const folderListReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVE": {
      const ans = findActive(action.payload, links);
      return ans;
    }
    default:
      return state;
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
