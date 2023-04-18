import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faBell,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logoCompany.png";

const HeaderAdmin = () => {
  const [bars, setBars] = useState(false);
  const handleBar = () => {
    setBars(!bars);
  };
  const [open, setOpen] = useState(true);
  return (
    <div class="fixed top-0 bg-white left-0 right-0 z-[999] flex h-header items-center justify-between bg-light">
      <div class="header-logo order-2 lg:order-1 flex-1 lg:flex-none px-0 lg:px-5 flex w-auto lg:w-sidebar justify-start transition-all duration-200 ease-in-out">
        <img
          class="header-full-logo w-[120px] h-auto object-cover opacity-100 block"
          src={logo}
          alt=""
        />
        <div className="flex justify-center items-center">
          <h3 className="text-3xl font-semibold">CodeHire</h3>
        </div>
        <div class="grow-0 lg:grow flex justify-center items-center ml-8 order-1 lg:order-2 mx-5 lg:mx-0">
          <button class="btn px-4 py-2 ml-6 text-white font-semibold bg-blue-500 icon primary rounded-lg">
            <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faBars} />
          </button>
        </div>
      </div>
      <div class="h-full flex items-center px-6 order-3 relative select-none">
        <button class="btn bg-gray-200 py-2 px-3 text-gray-500 icon secondary rounded-full border-transparent mr-2">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button class="btn bg-gray-200 py-2 px-3 text-gray-500 icon secondary rounded-full border-transparent mr-4 hidden lg:block">
          <FontAwesomeIcon icon={faMaximize} />
        </button>

        <div class="h-full flex items-center cursor-pointer group">
          <div class="w-[40px] h-[40px] rounded-full p-[0.125rem] border-2 border-secondary mr-0 md:mr-2 group-hover:border-primary transition duration-200 ease-in-out">
            <img
              class="w-full rounded-full"
              src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dGFHlbHly-YAX8_lDwe&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfD7M2OZbyD_7o3sQwUI0YnRMp9f_DY7yhMS_VjwGkyxFA&oe=643664BD"
              alt=""
            />
          </div>
          <div class="mr-2 hidden text-left lg:block">
            <p class="text-dark text-sm font-medium">Tran Phuc Tong</p>
            <p class="text-active text-xs font-medium">Administrator</p>
          </div>
          <span class="hidden lg:block">
            <FontAwesomeIcon onClick={handleBar} icon={faChevronDown} />
          </span>
        </div>
        <div
          className={`absolute top-full right-[20px] w-[200px] border border-solid border-gray-300 transition-200-ease-in-out ${
            bars
              ? "visible translate-y-0 opacity-100"
              : "opacity-0 translate-y-4 invisible"
          }`}
        >
          <div class="flex items-center gap-2 bg-[#f9f9f9] px-4 py-2">
            <img
              class="w-[40px] h-[40px] rounded-full"
              src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dGFHlbHly-YAX8_lDwe&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfD7M2OZbyD_7o3sQwUI0YnRMp9f_DY7yhMS_VjwGkyxFA&oe=643664BD"
              alt=""
            />
            <div class="grow">
              <p class="text-dark text-base font-medium">Tran Phuc Tong</p>
              <p class="text-sidebar text-sm">Administrator</p>
            </div>
          </div>
          <ul class="text-sm text-dark text-left flex flex-col bg-white cursor-pointer">
            <li class="px-4 py-3 border-t border-solid border-secondary hover:text-active hover:bg-[#e9ecef] transition-200-ease-in-out">
              My Profile
            </li>
            <li class="px-4 py-3 border-t border-solid border-secondary hover:text-active hover:bg-[#e9ecef] transition-200-ease-in-out">
              Inbox
            </li>
            <li class="px-4 py-3 border-t border-solid border-secondary hover:text-active hover:bg-[#e9ecef] transition-200-ease-in-out">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderAdmin;
