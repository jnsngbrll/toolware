import React, { createContext, useState } from 'react';

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [isSearchbarActive, setIsSearchbarActive] = useState(false);
  const ContextValue = { isSearchbarActive, setIsSearchbarActive };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
