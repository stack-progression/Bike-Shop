import React, { useState } from "react";
import { ShopContext } from "./ShopContext";

const Context = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const scrollToTop = () => {
    window.scrollY(0,0);
  }

  const AppValue = { scrollToTop, openSearch, setOpenSearch, openFilter, setOpenFilter };

  return (
    <ShopContext.Provider value={AppValue}>{children}</ShopContext.Provider>
  );
};

export default Context;
