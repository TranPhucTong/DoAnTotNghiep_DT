import React, { useEffect, useState } from "react";
import logo from "../../../images/logoCompany.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faBell,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import avtAdmin from "../../../assests/imgs/avtAdmin.jpg";
import Tippy from "@tippyjs/react";
import Notification from "../../../components/notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import {
  notifications,
  totalNotificationNotSeen,
} from "../../../reducers/slices/adminSlice";
import { getNotificationsOfAdmin } from "../../../reducers/actions/notificationAction";

const HeaderAdmin = (props) => {
  const listNotification = useSelector(notifications);
  const totalNotification = useSelector(totalNotificationNotSeen);
  const dispatch = useDispatch();
  function handleClick() {
    props.onButtonClick();
  }
  // const [open, setOpen] = useState(true);
  const [bars, setBars] = useState(false);
  const handleBar = () => {
    setBars(!bars);
  };
  const navigator = useNavigate();
  useEffect(() => {
    dispatch(getNotificationsOfAdmin());
  });
  return (
    <div className="fixed top-0 bg-white left-0 right-0 z-[999] flex h-header items-center justify-between bg-light">
      <div className="header-logo order-2 lg:order-1 flex-1 lg:flex-none px-0 lg:px-5 flex w-auto lg:w-sidebar justify-start transition-all duration-200 ease-in-out">
        <img
          onClick={() => navigator("/admin/home")}
          className="header-full-logo w-[120px] h-auto object-cover opacity-100 block cursor-pointer"
          src={logo}
          alt=""
        />
        <div
          onClick={() => navigator("/admin/home")}
          className="flex justify-center items-center cursor-pointer"
        >
          <h3 className="text-3xl font-semibold">CodeHire</h3>
        </div>
        <div
          onClick={handleClick}
          className="grow-0 lg:grow flex justify-center items-center ml-8 order-1 lg:order-2 mx-5 lg:mx-0"
        >
          <button className="btn px-4 py-2 ml-6 text-white font-semibold bg-blue-500 icon primary rounded-lg">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <div className="h-full flex items-center px-6 order-3 relative select-none">
        <Tippy
          animateFill={false}
          interactive={true}
          hideOnClick={false}
          trigger="mouseenter focus"
          placement="left-end"
          theme="light"
          content={<Notification listNotification={listNotification} />}
        >
          <div className="relative btn bg-gray-200 py-2 px-3 text-gray-500 icon secondary rounded-full border-transparent mr-2">
            <FontAwesomeIcon icon={faBell} />
            {totalNotification === 0 ? null : (
              <div className="absolute -top-[5px] -right-[5px] text-[10px] font-bold h-4 w-4 bg-red-500 text-white rounded-full flex justify-center items-center">
                {totalNotification}
              </div>
            )}
          </div>
        </Tippy>
        <button className="btn bg-gray-200 py-2 px-3 text-gray-500 icon secondary rounded-full border-transparent mr-4 hidden lg:block">
          <FontAwesomeIcon icon={faMaximize} />
        </button>

        <div
          onClick={handleBar}
          className="h-full flex items-center cursor-pointer group"
        >
          <div className="w-[40px] h-[40px] rounded-full p-[0.125rem] border-2 border-secondary mr-0 md:mr-2 group-hover:border-primary transition duration-200 ease-in-out">
            <img className="rounded-full w-full h-full" src={avtAdmin} alt="" />
          </div>
          <div className="mr-2 hidden text-left lg:block">
            <p className="text-dark text-sm font-medium">Tran Phuc Tong</p>
            <p className="text-active text-xs font-medium">Quản trị viên</p>
          </div>
          <span className="hidden lg:block">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        <div
          className={`absolute top-full right-[20px] w-[200px] border border-solid border-gray-300 transition-200-ease-in-out ${
            bars
              ? "visible translate-y-0 opacity-100"
              : "opacity-0 translate-y-4 invisible"
          }`}
        >
          <div className="flex items-center gap-2 bg-[#f9f9f9] px-4 py-2">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={avtAdmin}
              alt=""
            />
            <div className="grow">
              <p className="text-dark text-base font-medium">Tran Phuc Tong</p>
              <p className="text-sidebar text-sm">Quản trị viên</p>
            </div>
          </div>
          <ul className="text-sm text-dark text-left flex flex-col bg-white cursor-pointer">
            <li
              onClick={() => navigator("/")}
              className="px-4 py-3 border-t border-solid border-secondary hover:text-active hover:bg-[#e9ecef] transition-200-ease-in-out"
            >
              Đăng xuất
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
