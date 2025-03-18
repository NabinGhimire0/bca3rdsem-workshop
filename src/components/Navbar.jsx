import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to={"/"} className="text-white font-bold text-2xl tracking-tight">
            JobFinder
          </NavLink>
          <div className="flex space-x-4">
            <NavLink
              to={"/"}
              className="text-gray-100 hover:bg-blue-700 px-3 py-2 rounded-md transition duration-200 ease-in-out font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to={"/favorites"}
              className="text-gray-100 hover:bg-blue-700 px-3 py-2 rounded-md transition duration-200 ease-in-out font-medium flex items-center"
            >
              Favorites
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                2
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
