import React from "react";
import logoCompany from "../../images/logoCompany.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const loginHandle = () => {
    navigate("/login");
  };
  const registerHandle = () => {
    navigate("/register");
  };
  return (
    <div className="bg-gray-900 text-white fixed top-0 left-0 right-0 w-full z-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            className="h-8 w-auto mr-2 rounded-lg"
            src={logoCompany}
            alt="Logo"
          />
          <span className="text-xl font-semibold">CodeHire</span>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="relative">
              <a href="#" className="hover:text-gray-400">
                Products
              </a>
              <ul className="absolute top-full left-0 bg-gray-900 text-white w-48 py-2 mt-2 rounded-lg shadow-lg hidden">
                <li>
                  <a href="#" className="hover:text-gray-400 block px-4 py-2">
                    Product 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 block px-4 py-2">
                    Product 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 block px-4 py-2">
                    Product 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring text-black focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg">
            Search
          </button>
        </div>
        <div>
          <button
            onClick={loginHandle}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
          >
            Log in
          </button>
          <button
            onClick={registerHandle}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
