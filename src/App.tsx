import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InputCustomerDetails from "./components/InputCustomerDetails";
import PrintSettings from "./components/PrintSettings";
import NavigationPanel from "./components/NavigationPanel";
import Dashboard from "./components/Dashboard";
import SearchRecord from "./components/SearchRecord";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <NavigationPanel />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/print", element: <InputCustomerDetails /> },
        { path: "/settings", element: <PrintSettings /> },
        { path: "/search", element: <SearchRecord /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
