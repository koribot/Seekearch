"use client";
import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";
type CommonContextType = {
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};
const defaultCommonContext: CommonContextType = {
  isSearching: false,
  setIsSearching: () => {}, // Provide an empty function as default
};
export const CommonContext =
  createContext<CommonContextType>(defaultCommonContext);

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  return (
    <CommonContext.Provider value={{ isSearching, setIsSearching }}>
      {children}
    </CommonContext.Provider>
  );
};

export default ContextProvider;
