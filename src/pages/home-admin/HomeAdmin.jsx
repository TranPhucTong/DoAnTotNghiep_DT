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
import avtFB from "../../images/AVTFB.png"
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
                <h3 class="bottom text-fs22 font-semibold">{column.count}</h3>
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
  );
};

export default HomeAdmin;
