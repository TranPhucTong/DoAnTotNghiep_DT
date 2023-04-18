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
  faSearch,
  faList,
  faBorderAll,
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logoCompany.png";
import ListEmployees from "../../components/admin/ListEmployees";
import { Switch } from "@headlessui/react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import CreatEmployee from "../../components/admin/CreatEmployee";
import imgDashIcon1 from "../../images/icon/dash-icon-01.svg";
import imgDashIcon2 from "../../images/icon/dash-icon-02.svg";
import imgDashIcon3 from "../../images/icon/dash-icon-03.svg";
import imgDashIcon4 from "../../images/icon/dash-icon-04.svg";
import { PieChart, Pie, Tooltip } from "recharts";
import { Chart } from "react-google-charts";

const HomeAdmin = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const columns = [
    {
      id: 1,
      title: "Employees",
      count: "1000",
      img: imgDashIcon1,
    },
    {
      id: 2,
      title: "Awards",
      count: "50+",
      img: imgDashIcon2,
    },
    {
      id: 3,
      title: "Departments",
      count: "30+",
      img: imgDashIcon3,
    },
    {
      id: 4,
      title: "Revenue",
      count: "$505",
      img: imgDashIcon4,
    },
  ];
  const Menus = [
    {
      title: "Employees",
      submenu: true,
      submenuItems: [{ title: "Creat Employee" }, { title: "List Employees" }],
    },
  ];

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const dataCol = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  const options = {
    title: "My Daily Activities",
  };

  const [bars, setBars] = useState(false);
  const [cremployee, setCrEmployee] = useState(false);
  const handleBar = () => {
    setBars(!bars);
  };

  const createEm = () => {
    setCrEmployee(true);
  };

  const navigate = useNavigate();
  const handleMenuClick = (title) => {
    if (title === "Creat Employee") {
      navigate("/admin/create-employees");
    } else if (title === "List Employees") {
      navigate("/admin/list-employees");
    }
  };

  return (
    <div className="bg-[#f7f7fa] h-[100vh]">
      {/* Header  */}
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
          <div
            onClick={() => setOpen(!open)}
            class="grow-0 lg:grow flex justify-center items-center ml-8 order-1 lg:order-2 mx-5 lg:mx-0"
          >
            <button class="btn px-4 py-2 ml-6 text-white font-semibold bg-blue-500 icon primary rounded-lg">
              <FontAwesomeIcon icon={faBars} />
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

          <div
            onClick={handleBar}
            class="h-full flex items-center cursor-pointer group"
          >
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

      {/* Content  */}
      <div className="flex mt-[90px] text-left ">
        <div
          className={`bg-white h-screen fixed p-5 ${
            open ? "w-[360px]" : "w-20"
          } duration-300 relative`}
        >
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  key={index}
                  className={`text-gray-600 text-sm flex items-center ease-linear transition-colors duration-200 gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md`}
                >
                  <span className="text-2xl block float-left">
                    <FontAwesomeIcon icon={faUserTie} />
                  </span>
                  <span
                    className={`text-xl font-semibold flex-1 ${
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
                      icon={faChevronDown}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        tabIndex="0"
                        key={index}
                        onClick={() => handleMenuClick(submenuItem.title)}
                        className="text-gray-600 w-full bg-white px-5 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 transition-all ease-in duration-200 hover:text-gray-600 rounded-md focus:outline-none focus:bg-blue-500 focus:text-white"
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

        <div class="p-6 w-full bg-[#f7f7fa] min-h-screen-except-header">
          <h3 class="text-2xl font-medium pb-8">Welcome Admin!</h3>
          <div class="row flex items-center box-border mb-8">
            {columns.map((column, index) => (
              <div
                key={index}
                class="columns-3xs w-full bg-white rounded-lg box-border p-6 mr-6"
              >
                <div class="item flex items-center justify-between">
                  <div class="text">
                    <h6 class="top text-fs14 text-footer">{column.title}</h6>
                    <h3 class="bottom text-fs22 font-semibold">
                      {column.count}
                    </h3>
                  </div>
                  <div class="border rounded-lg bg-[#edf4ff]">
                    <img className="" src={column.img} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="row flex items-center justify-between mb-8">
            <div class="columns-lg bg-white rounded-lg box-border p-6 mr-6">
              <div class="item">
                <div class="top flex items-center justify-between pb-3">
                  <h5 class="text-xl font-semibold">Number of Employees</h5>
                  <i class="fa-solid fa-ellipsis-vertical w-6 h-8 leading-8 bg-lightgray rounded-md text-center cursor-pointer"></i>
                </div>
                <div class="bottom">
                  <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                  />
                </div>
              </div>
            </div>
            <div class="columns-lg bg-white rounded-lg box-border p-6 mr-6">
              <div class="item">
                <div class="top flex items-center justify-between pb-3">
                  <h5 class="text-xl font-semibold">Overview</h5>
                  <i class="fa-solid fa-ellipsis-vertical w-6 h-8 leading-8 bg-lightgray rounded-md text-center cursor-pointer"></i>
                </div>
                <div class="bottom">
                  <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={dataCol}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="footer bg-light text-footer ml-[30%] translate-x-[-20%] text-sm leading-5 py-4">
        <div class="container ml-20">
          <span>COPYRIGHTS </span>
          <span> 2022 DREAMGUYS.</span>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
