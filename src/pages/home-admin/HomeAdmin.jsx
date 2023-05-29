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
import avtFB from "../../images/AVTFB.png";
// import { PieChart, Pie, Tooltip } from "recharts";
import { Chart } from "react-google-charts";
import employeeApii from "../../api/employeeApii";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
} from "chart.js";
import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";
import axios from "axios";
import orderTeamApi from "../../api/orderTeamApi";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title
);

const HomeAdmin = () => {
  const [numElementsAll, setNumElementsAll] = useState(0);
  const [numElementsNoActive, setNumElementsNoActive] = useState(0);
  const [teams, setTeams] = useState([]);
  const [orders, setOrders] = useState([]);
  const test = [];

  const [numWeb, setNumWeb] = useState(0);
  const [numApp, setNumApp] = useState(0);
  const [numGame, setNumGame] = useState(0);
  const [numData, setNumData] = useState(0);
  const [numAI, setNumAI] = useState(0);
  const [numNet, setNumNet] = useState(0);

  const [numPending, setNumPending] = useState(0);
  const [numProgress, setNumProgress] = useState(0);
  const [numDone, setNumDone] = useState(0);
  const [numCancel, setNumCancel] = useState(0);

  const [dataEmployeeActive, setDataEmoloyeeActive] = useState();
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await employeeApii.getEmplees();
      const resActive = await employeeApii.getIsEmployeeActive();

      const newData = res.data;
      setNumElementsAll(newData.length);

      const newDataNoActive = resActive.data;
      setNumElementsNoActive(newDataNoActive.length);
    };
    fetchData();

    axios
      .get("https://doan-be-git-dev-danh-lofi.vercel.app/teams")
      .then((response) => {
        setTeams(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("https://doan-be-git-dev-danh-lofi.vercel.app/orders")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    timMangLamViec();
    timTrangThaiOrder();
  }, [teams]);

  const mangWeb = [];
  const mangApp = [];
  const mangGame = [];
  const mangKHDL = [];
  const mangAI = [];
  const mangNetWork = [];

  const timMangLamViec = () => {
    for (let i = 0; i < teams.length; i++) {
      const phanTu = teams[i];
      if (phanTu.field === "web") {
        mangWeb.push(phanTu);
        setNumWeb(mangWeb.length);
      } else if (phanTu.field === "app") {
        mangApp.push(phanTu);
        setNumApp(mangApp.length);
      } else if (phanTu.field === "game") {
        mangGame.push(phanTu);
        setNumGame(mangGame.length);
      } else if (phanTu.field === "khdl") {
        mangKHDL.push(phanTu);
        setNumData(mangKHDL.length);
      } else if (phanTu.field === "network") {
        mangNetWork.push(phanTu);
        setNumNet(mangNetWork.length);
      } else if (phanTu.field === "ai") {
        mangAI.push(phanTu);
        setNumAI(mangAI.length);
      }
    }
  };

  const statusPending = [];
  const statusDone = [];
  const statusCancel = [];
  const statusProgress = [];
  const timTrangThaiOrder = () => {
    for (let i = 0; i < orders.length; i++) {
      const phanTu = orders[i];
      if (phanTu.status === "pending") {
        statusPending.push(phanTu);
        setNumPending(statusPending.length);
      } else if (phanTu.status === "done") {
        statusDone.push(phanTu);
        setNumDone(statusDone.length);
      } else if (phanTu.status === "progress") {
        statusProgress.push(phanTu);
        setNumProgress(statusProgress.length);
      } else if (phanTu.status === "cancel") {
        statusCancel.push(phanTu);
        setNumCancel(statusCancel.length);
      }
    }
  };

  // const data = [
  //   ["Task", "Hours per Day"],
  //   ["Nhân viên đang không có nhóm", numElementsNoActive],
  //   ["Nhân viên đã có nhóm", numElementsAll - numElementsNoActive],
  // ];

  // Chart Nhân viên
  const data = {
    labels: ["Nhân viên đã có nhóm", "Nhân viên không có nhóm làm việc"],
    datasets: [
      {
        label: "Số lượng nhân viên",
        data: [numElementsAll - numElementsNoActive, numElementsNoActive],
        backgroundColor: ["#3b82f6", "#19c37d"],
        borderColor: ["#19c37d", "#3b82f6"],
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    title: "Tình trạng của nhân viên",
  };

  // Chart Team

  const dataTeam = {
    labels: ["Web", "App", "Game", "Data", "AI", "NetWork"],
    datasets: [
      {
        label: "Số lượng nhóm",
        data: [numWeb, numApp, numGame, numData, numAI, numNet],
        backgroundColor: [
          "#efb0c9",
          "#f4c2d7",
          "#fbdae9",
          "#b9d6f3",
          "#a1c9f1",
          "#f1ebd9",
        ],
        borderColor: "white",
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const optionTeam = {};

  //  Chart Đơn thuê đội ngũ
  const dataOrder = {
    labels: ["Chờ xác nhận", "Đang trong tiến trình", "Hoàn thành", "Đã hủy"],
    datasets: [
      {
        label: "Số lượng đơn thuê",
        data: [numPending, numProgress, numDone, numCancel],
        backgroundColor: "#3b82f6",
        borderColor: "#19c37d",
        pointBorderColor: "#3b82f6",
        pointBorderWidth: 6,
        tension: 0.5,
      },
    ],
  };
  const optionOrders = {};

  // Chart tiếp theo
  const dataCoun = {
    labels: [
      "Work",
      "Hobby",
      "Family",
      "Personal growth",
      "Friend",
      "Health",
      "Relationship",
      "Finace",
      "Journey",
    ],
    datasets: [
      {
        label: "#",
        data: [1, 7, 8, 9, 10, 12, 14, 17, 12],
        backgroundColor: [
          "rgba(68, 138, 255, 0.85)",
          "rgba(21, 101, 192, 0.85)",
          "rgba(0, 150, 136, 0.85)",
          "rgba(92, 154, 50, 0.85)",
          "rgba(255, 193, 7, 0.85)",
          "rgba(255, 152, 0, 0.85)",
          "rgba(244, 67, 54, 0.85)",
          "rgba(173, 20, 87, 0.85)",
          "rgba(161, 17, 172, 0.85)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const optionCou = {};

  return (
    <div className="px-6 py-1 w-full bg-[#f7f7fa] min-h-screen-except-header">
      <h3 className="text-2xl font-medium pb-8">Welcome Admin!</h3>
      <div className="row flex items-center box-border mb-8">
        {columns.map((column, index) => (
          <div
            key={index}
            className="columns-3xs w-full bg-white rounded-lg box-border p-6 mr-6"
          >
            <div className="item flex items-center justify-between">
              <div className="text">
                <h6 className="top text-fs14 text-footer">{column.title}</h6>
                <h3 className="bottom text-fs22 font-semibold">
                  {column.count}
                </h3>
              </div>
              <div className="border rounded-lg bg-[#edf4ff]">
                <img className="" src={column.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row flex items-center justify-between mb-8">
        <div className="columns-lg bg-white rounded-lg box-border p-6 mr-6">
          <div className="item">
            <div className="top flex items-center justify-between pb-3">
              <h5 className="text-xl font-semibold">
                Số lượng và tình trạng nhân viên
              </h5>
            </div>
            {/* <div className="bottom"> */}
            {/* <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
              /> */}
            {/* </div> */}

            <div className="w-full p-4">
              <div className="w-[70%] flex justify-center items-center max-w-md mx-auto">
                <Doughnut data={data} options={options}></Doughnut>
              </div>
            </div>
          </div>
        </div>
        <div className="columns-lg bg-white rounded-lg box-border p-6 mr-6">
          <div className="item">
            <div className="top flex items-center justify-between pb-3">
              <h5 className="text-xl font-semibold">Nhóm làm việc theo mảng</h5>
              <i className="fa-solid fa-ellipsis-vertical w-6 h-8 leading-8 bg-lightgray rounded-md text-center cursor-pointer"></i>
            </div>
            {/* <div className="bottom">
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={dataCol}
              />
            </div> */}
            <div className="w-full p-4 h-[320px] ">
              <div className="w-full flex justify-center items-center h-[330px] max-w-md mx-auto">
                <Bar data={dataTeam} options={optionTeam}></Bar>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row flex items-center justify-between mb-8">
        <div className="columns-lg bg-white rounded-lg box-border p-6 mr-6">
          <div className="item">
            <div className="top flex items-center justify-between pb-3">
              <h5 className="text-xl font-semibold">
                Thống kê đơn thuê đội ngũ
              </h5>
            </div>

            <div className="w-full p-4">
              <div className="w-full h-[320px] flex justify-center items-center max-w-md mx-auto">
                <Line data={dataOrder} options={optionOrders}></Line>
              </div>
            </div>
          </div>
        </div>
        <div className="columns-lg bg-white rounded-lg box-border p-6 mr-6">
          <div className="item">
            <div className="top flex items-center justify-between pb-3">
              <h5 className="text-xl font-semibold">Nhóm làm việc theo mảng</h5>
              <i className="fa-solid fa-ellipsis-vertical w-6 h-8 leading-8 bg-lightgray rounded-md text-center cursor-pointer"></i>
            </div>
            <div className="w-full p-4 h-[320px] ">
              <div className="w-full flex justify-center items-center h-[330px] max-w-md mx-auto">
                <PolarArea data={dataCoun} options={optionCou}></PolarArea>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-white rounded-lg box-border mb-8 mr-6">
        <div className="p-6 mr-6">
          <div className="top flex items-center justify-between pb-3">
            <h5 className="text-xl font-semibold">Thống kê đơn thuê đội ngũ</h5>
            <i className="fa-solid fa-ellipsis-vertical w-6 h-8 leading-8 bg-lightgray rounded-md text-center cursor-pointer"></i>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex justify-center items-center h-[330px]">
              <Line data={dataOrder} options={optionOrders}></Line>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
