import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

const NavigationPanel = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
    setIsNavOpen(!isMobileView);
  }, []);
  return (
    <div className="flex">
      <div className="absolute top-3 lg:hidden">
        <button
          onClick={toggleNav}
          className="text-black p-2 focus:outline-none"
        >
          {isNavOpen ? (
            <img
              width="50"
              height="50"
              src="/assets/multiply.png"
              alt="multiply"
            />
          ) : (
            <img width="40" height="40" src="/assets/menu.png" alt="menu--v1" />
          )}
        </button>
      </div>
      {isNavOpen && (
        <div className="h-screen w-[60%] md:w-[20%] bg-slate-600 pl-4 pr-4 pt-36 md:pt-8 text-2xl text-white">
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
                  src="/assets/home.png"
                  alt="home--v1"
                />
                Dashboard
              </Link>
              <Link
                to="/print"
                className="hidden my-6 cursor-pointer md:flex text-center justify-start items-center"
              >
                <img
                  width="30"
                  height="30"
                  className="mr-4"
                  src="/assets/print-nav.png"
                  alt="print"
                />
                Print Record
              </Link>
              <Link
                to="/settings"
                className="hidden my-6 cursor-pointer md:flex text-center justify-start items-center"
              >
                <img
                  width="30"
                  height="30"
                  className="mr-4"
                  src="/assets/settings.png"
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
                  src="/assets/search.png"
                  alt="search--v1"
                />
                Search
              </Link>
            </ul>
          </div>
        </div>
      )}
      <div className="w-[40%] md:w-[80%] flex flex-col">
        <Header />
        <div className="px-1 md:px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavigationPanel;
