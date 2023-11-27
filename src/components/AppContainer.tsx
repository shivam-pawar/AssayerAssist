import NavigationPanel from "./NavigationPanel";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store";
import { Outlet } from "react-router-dom";

const AppContainer = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </Provider>
  );
};

export default AppContainer;
