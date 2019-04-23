import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export default ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <NotificationContext.Provider
      value={{
        message,
        setMessage
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
