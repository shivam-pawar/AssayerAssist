import ReactDOM from "react-dom/client";
import "./index.css";
import PrintSettings from "./components/PrintSettings.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";
import InputCustomerDetails from "./components/InputCustomerDetails.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <PrintSettings /> */}
    <InputCustomerDetails />
  </Provider>
);
