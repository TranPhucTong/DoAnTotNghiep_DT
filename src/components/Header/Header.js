import React, { useRef, useState } from "react";
import logoCompany from "../../images/logoCompany.png";
import { useNavigate } from "react-router";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/themes/light.css";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedIn,
  selectCustomer,
  setLogout,
} from "../../reducers/slices/customerSlice";
import { Link } from "react-router-dom";
import configRoutes from "../../config/configRouter";
import { getFreelancerByPage } from "../../reducers/actions/employeeAction";
const Header = () => {
  const isLogin = useSelector(isLoggedIn);
  const customer = useSelector(selectCustomer);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandle = () => {
    navigate("/login");
  };
  const registerHandle = () => {
    navigate("/register");
  };
  const findEmployeeHandle = () => {
    const search = searchRef.current.value;
    dispatch(getFreelancerByPage({ name: search }));
    navigate(`${configRoutes.freelancers}`);
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
            ref={searchRef}
            type="text"
            placeholder="Tìm ứng viên theo tên..."
            className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring text-black focus:ring-blue-500"
          />
          <button
            onClick={findEmployeeHandle}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg"
          >
            Search
          </button>
        </div>
        {!isLogin ? (
          <div>
            <button
              onClick={loginHandle}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
            >
              Đăng nhập
            </button>
            <button
              onClick={registerHandle}
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              Đăng kí
            </button>
          </div>
        ) : (
          <Tippy
            interactive={true}
            hideOnClick={false}
            trigger="mouseenter focus"
            animation="shift-away"
            theme="light"
            content={<Popover />}
          >
            <p>{customer.name}</p>
          </Tippy>
        )}
      </div>
    </div>
  );
};

export default Header;

const Popover = () => {
  const dispatch = useDispatch();
  const logOutHandle = () => {
    localStorage.removeItem("access_token");
    dispatch(setLogout());
  };
  return (
    <ul className="px-2 pr-12">
      <li className="my-4 text-base text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all">
        <Link to={configRoutes.profileCustomer}>Tài khoản</Link>
      </li>
      <li className="my-4 text-base text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all">
        <Link to={configRoutes.contract}> Đơn thuê</Link>
      </li>
      <li
        onClick={logOutHandle}
        className="my-4 text-base text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all"
      >
        Đăng xuất
      </li>
    </ul>
  );
};
