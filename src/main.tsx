import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PrintSettings from "./components/PrintSettings.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PrintSettings />
  </Provider>
);
