import React, { useRef } from "react";
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
  notifications,
  selectCustomer,
  setLogout,
  totalNotificationNotSeen,
} from "../../reducers/slices/customerSlice";
import { Link } from "react-router-dom";
import configRoutes from "../../config/configRouter";
import { getFreelancerByPage } from "../../reducers/actions/employeeAction";
import { changeTypeContract } from "../../reducers/slices/contractSlice";
import Notification from "../../components/notification/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const isLogin = useSelector(isLoggedIn);
  const customer = useSelector(selectCustomer);
  let listNotification = [];
  let totalNotification = 0;
  if (customer) {
    totalNotification = customer.totalNotificationNotSeen;
    listNotification = customer.notifications;
  }
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
              <a href="/" className="hover:text-gray-400">
                Trang chủ
              </a>
            </li>
            <li className="relative">
              <a href="#" className="hover:text-gray-400">
                Sản phẩm
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
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Liên hệ
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
            Tìm kiếm
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
          <>
            <Tippy
              interactive={true}
              hideOnClick={false}
              trigger="mouseenter focus"
              animation="shift-away"
              theme="light"
              content={<Popover />}
            >
              <p>{customer.name ? customer.name : "Customer"}</p>
            </Tippy>
            <Tippy
              animateFill={false}
              interactive={true}
              hideOnClick={false}
              trigger="mouseenter focus"
              placement="left-end"
              theme="light"
              content={<Notification listNotification={listNotification} />}
            >
              <div className="relative">
                <FontAwesomeIcon
                  className="text-white text-xl hover:animate-[wiggle_1s_ease-in-out_infinite] cursor-pointer transition-all"
                  icon={faBell}
                />
                {totalNotification === 0 ? null : (
                  <div className="absolute -top-[5px] -right-[5px] text-[10px] font-bold h-4 w-4 bg-red-500 text-white rounded-full flex justify-center items-center">
                    {totalNotification}
                  </div>
                )}
              </div>
            </Tippy>
          </>
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
  const changeTypeContractHandle = (type) => {
    dispatch(changeTypeContract(type));
  };
  return (
    <ul className="px-2 pr-12">
      <li className="w-full my-4 text-base text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all">
        <Link to={configRoutes.profileCustomer}>Tài khoản</Link>
      </li>
      <li className="w-full my-4 text-base text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all">
        <Tippy
          interactive={true}
          hideOnClick={false}
          trigger="mouseenter focus"
          animation="shift-away"
          theme="light"
          placement="right"
          // animateFill={true}
          // arrow={false}
          content={
            <ul className="px-2 pr-8">
              <li className="w-full my-1 text-sm font-normal text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all">
                <Link
                  onClick={() => changeTypeContractHandle("freelancer")}
                  to={configRoutes.contract}
                >
                  Ứng viên
                </Link>
              </li>
              <li className="w-full my-1 text-sm font-normal text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all">
                <Link
                  onClick={() => changeTypeContractHandle("contract")}
                  to={configRoutes.contract}
                >
                  Đội ngũ
                </Link>
              </li>
            </ul>
          }
        >
          <Link> Đơn thuê</Link>
        </Tippy>
      </li>
      <li
        onClick={logOutHandle}
        className="w-full my-4 text-base text-black hover:text-blue-600 hover:font-bold cursor-pointer transition-all"
      >
        Đăng xuất
      </li>
    </ul>
  );
};
