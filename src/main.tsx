import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import store from "./store.ts";
import { registerSW } from "virtual:pwa-register";

//@ts-ignore
const root = createRoot(document.getElementById("root"));
// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
