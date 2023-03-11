import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <App title="Heelo" type="secondary">
      <div>Ahoj1</div>
      <div>Ahoj2</div>
    </App>
  </AuthContextProvider>
  // </React.StrictMode>
);
