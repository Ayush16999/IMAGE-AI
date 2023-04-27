import React from "react";
import newlogo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  return (
    <header className="w-full sticky top-0 flex justify-between items-center z-20 bg-white sm:px-8 px-4 py-4 border-b-4 border-purple-600 shadow-xl">
      <Link to="/">
        <img src={newlogo} alt="logo" className="w-28 object-contain" />
      </Link>

      {location.pathname === "/create-post" ? (
        <div className=" bg-purple-600 text-white px-4 py-2 rounded-2xl max-xs:text-[12px] max-xs:px-2">
          <Link to={'/'} className="flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
            <button>Go Back</button>
          </Link>
        </div>
      ) : (
        <Link
          to="/create-post"
          className="font-inter font-medium bg-purple-600 text-white px-4 py-2 rounded-2xl flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Create <span className="max-xs:hidden">an Image</span>
        </Link>
      )}
    </header>
  );
};

export default Navbar;
