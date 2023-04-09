import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLong,
  faLeftLong,
  faArrowLeft,
  faCheckCircle,
  faCode,
  faUserTie,
  faChevronDown,
  faBars,
  faBell,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logoCompany.png";
const HomeAdmin = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    // { title: "Dashboard" },
    // { title: "Pages" },
    // { title: "Media", spacing: true },
    {
      title: "Employees",
      submenu: true,
      submenuItems: [
        { title: "Creat Employee" },
        { title: "List Employees" },
        // { title: "Submenu 3" },
      ],
    },
    // {
    //   title: "Customers",
    //   submenu: true,
    //   submenuItems: [
    //     { title: "Creat Customer" },
    //     { title: "List Customers" },
    //     // { title: "Submenu 3" },
    //   ],
    // },
    // { title: "Analytics" },
    // { title: "Inbox" },
    // { title: "Profile", spacing: true },
    // { title: "Setting" },
    // { title: "Logout" },
  ];
  const [bars, setBars] = useState(false);
  const handleBar = () => {
    setBars(!bars);
  };

  return (
    <div className="bg-gray-500 h-[100vh]">
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
      {/* <div class="sidebar z-[999]" style="overflow-y: overlay"> 
            
      </div> */}
      <div className="flex mt-20 text-left ">
        <div
          className={`bg-white h-screen p-5 pt-8 ${
            open ? "w-[360px]" : "w-20"
          } duration-300 relative`}
        >
          {/* <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => setOpen(!open)}
            className={`bg-white border border-dark-purple cursor-pointer px-[6px] py-[5px] text-dark-purple text-xl rounded-full absolute -right-4 duration-500 top-9 ${
              !open && "rotate-180"
            }`}
          /> */}
          {/* <div className="inline-flex">
            <FontAwesomeIcon
              className={`bg-white text-blue-500 text-3xl rounded-full mr-2 cursor-pointer block float-left duration-500 w-10 h-10 ${
                !open && "rotate-[360deg]"
              }`}
              icon={faCode}
            />
            <h1
              className={`text-white mt-1 origin-left font-medium text-2xl ${
                !open && "scale-0"
              } `}
            >
              Code Hire
            </h1>
          </div> */}
          {/* <div className="flex items-center rounded-md">
          <FontAwesomeIcon className="text-white" icon={faUserTie} />
        </div> */}
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-600 text-sm flex items-center ease-linear transition-colors duration-200 gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md`}
                >
                  <span className="text-2xl block float-left">
                    <FontAwesomeIcon icon={faUserTie} />
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && (
                    <FontAwesomeIcon
                      className={`${submenuOpen && "rotate-180"} ${
                        !open && "hidden"
                      }`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      icon={faChevronDown}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-600 px-5 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="p-7 bg-gray-400 w-full">
          <h1 className="text-2xl font-semibold">Home Page</h1>
        </div>
      </div>
      <div class="footer bg-light text-footer ml-[30%] translate-x-[-20%] text-sm leading-5 py-4">
        <div class="container ml-20">
          <span>COPYRIGHTS </span>
          <i class="fa-regular fa-copyright"></i>
          <span> 2022 DREAMGUYS.</span>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
