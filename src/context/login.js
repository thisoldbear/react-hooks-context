import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export default ({ children }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        loginOpen,
        setLoginOpen
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
