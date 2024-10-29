"use client";

import React, { createContext, useContext, useState } from "react";
const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isOpen, setOpen] = useState(true)
  return (
    <GlobalContext.Provider
      value={{
          isOpen,
          setOpen
      }}
    >
      {children}
    </GlobalContext.Provider> 
  ); 
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}
