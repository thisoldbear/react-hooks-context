import React, { useContext } from "react";

import Notification from "./notification";

import { LoginContext } from "../context/login";

const LoginToggle = () => {
  const { loginOpen, setLoginOpen } = useContext(LoginContext);

  return (
    <div className="login-toggle">
      <button
        onClick={() => {
          setLoginOpen(!loginOpen);
        }}
      >
        {loginOpen ? "Close" : "Open"} Login
      </button>
      <Notification />
    </div>
  );
};

export default LoginToggle;
