import React, { useContext } from "react";

import { LoginContext } from "../context/login";
import { NotificationContext } from "../context/notification";

const Notificaton = () => {
  const { loginOpen } = useContext(LoginContext);
  const { message } = useContext(NotificationContext);

  return (
    <div className="notification">
      <p>Login is {loginOpen ? "Open" : "Closed"}</p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Notificaton;
