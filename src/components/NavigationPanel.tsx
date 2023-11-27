import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const NavigationPanel = () => {
  return (
    <div className="flex">
      <div className="h-screen w-[15%] bg-slate-600 pl-4 pr-4 pt-8 text-2xl text-white">
        <Link to="/" className="m-6">
          Assayer Assist
        </Link>
        <div className="flex flex-row m-6 mt-10 ">
          <ul className="text-xl">
            <Link
              to="/dashboard"
              className="my-6 cursor-pointer flex text-center justify-start items-center"
            >
              <img
                width="30"
                height="30"
                className="mr-4"
                src="https://img.icons8.com/glyph-neue/30/EBEBEB/home--v1.png"
                alt="home--v1"
              />
              Dashboard
            </Link>
            <Link
              to="/print"
              className="my-6 cursor-pointer flex text-center justify-start items-center"
            >
              <img
                width="30"
                height="30"
                className="mr-4"
                src="https://img.icons8.com/ios-filled/30/EBEBEB/print.png"
                alt="print"
              />
              Print Record
            </Link>
            <Link
              to="/settings"
              className="my-6 cursor-pointer flex text-center justify-start items-center"
            >
              <img
                width="30"
                height="30"
                className="mr-4"
                src="https://img.icons8.com/ios-filled/30/EBEBEB/settings.png"
                alt="settings"
              />
              Print Settings
            </Link>
            <Link
              to="/search"
              className="my-6 cursor-pointer flex text-center justify-start items-center"
            >
              <img
                width="30"
                height="30"
                className="mr-4 my-auto"
                src="https://img.icons8.com/ios-filled/30/EBEBEB/search--v1.png"
                alt="search--v1"
              />
              Search
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-[85%] flex flex-col px-6">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationPanel;
