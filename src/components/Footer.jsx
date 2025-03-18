import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">JobFinder</span>
            <p className="text-gray-400 text-sm mt-1">Find your dream job today</p>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;