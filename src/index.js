import React from "react";
import ReactDOM from "react-dom";

import LoginProvider from "./context/login";
import NotificationProvider from "./context/notification";

import LoginToggle from "./components/loginToggle";
import AnotherLoginToggle from "./components/anotherLoginToggle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <NotificationProvider>
          <LoginToggle />
          <AnotherLoginToggle />
        </NotificationProvider>
      </LoginProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
