import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import { FC } from "react";
import InputCustomerDetails from "./components/InputCustomerDetails";
import PrintSettings from "./components/PrintSettings";
import NavigationPanel from "./components/NavigationPanel";
import Dashboard from "./components/Dashboard";
import SearchRecord from "./components/SearchRecord";
import Login from "./components/Login";

interface User {
  user: any;
}

const App: FC = () => {
  const storedUser: User | null = JSON.parse(
    localStorage.getItem("user") || "null"
  );
  console.log(storedUser);

  const routes: RouteObject[] = [
    {
      path: "/",
      element: storedUser?.user?.uid ? <NavigationPanel /> : <Login />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/print", element: <InputCustomerDetails /> },
        { path: "/settings", element: <PrintSettings /> },
        { path: "/search", element: <SearchRecord /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ];

  const route = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
