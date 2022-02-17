import propTypes from "prop-types";
import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const useModalOpen = () => {
  return useContext(GlobalContext);
};

const ModalOpenContext = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   console.log({ modalOpen });
  // }, [modalOpen]);

  const value = { modalOpen, setModalOpen };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

ModalOpenContext.propTypes = {
  children: propTypes.any.isRequired,
};

export default ModalOpenContext;
