import React, { useContext } from "react";

import { LoginContext } from "../context/login";
import { NotificationContext } from "../context/notification";

const AnotherLoginToggle = () => {
  const { loginOpen, setLoginOpen } = useContext(LoginContext);
  const { setMessage } = useContext(NotificationContext);

  return (
    <div className="another-login-toggle">
      <button
        onClick={() => {
          setLoginOpen(!loginOpen);
          setMessage("The message was set");
        }}
      >
        {loginOpen ? "Close" : "Open"} Login
      </button>
    </div>
  );
};

export default AnotherLoginToggle;
