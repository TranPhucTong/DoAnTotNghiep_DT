import React, { useCallback, useEffect, useRef, useState } from "react";
import orderTeamApi from "../../api/orderTeamApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarning,
  faListCheck,
  faXmark,
  faSpinner,
  faBan,
  faCheck,
  faCheckCircle,
  faChevronCircleRight,
  faBook,
  faBarsProgress,
  faFileCircleCheck,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import teamWorkApi from "../../api/teamWorkApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mainTainOrderApi from "../../api/mainTainOrderApi";

const OrderDetail = ({
  message,
  onClose,
  IdCustomer,
  customerName,
  customerPhone,
  customerEmail,
  idOder,
  orderDate,
  field,
  totalPersonnel,
  duration,
  workingTime,
  startTime,
  typeWork,
  budget,
  noSelect,
  cancel,
  team,
  done,
  maintains,
}) => {
  const [completeSelected, setCompleteSelected] = useState(noSelect);
  const [statusCancel, setStatusCancel] = useState(cancel);
  const [statusDone, setStatusDone] = useState(done);
  const [showHistory, setShowHistory] = useState(false);
  const [showInfoMaintain, setShowInfoMaintain] = useState(false);
  const navigate = useNavigate();

  // function getStatusClass(status) {
  //   let className = "";

  //   switch (status) {
  //     case "pending":
  //       className = "text-blue-500";
  //       break;
  //     case "accepted":
  //       className = "text-yellow-500";
  //       break;
  //     case "progress":
  //       className = "text-green-500";
  //       break;
  //     case "done":
  //       className = "text-purple-500";
  //       break;
  //     case "maintain-pending":
  //       className = "text-red-500";
  //       break;
  //     case "maintain-accepted":
  //       className = "text-orange-500";
  //       break;
  //     default:
  //       className = "";
  //   }

  //   return className;
  // }
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      <div className="bg-white relative z-30 shadow-xl rounded-lg p-6">
        <div className="flex flex-row justify-center items-center mb-4">
          <h1 className="text-3xl uppercase font-bold text-blue-500">
            {message}
          </h1>
          <FontAwesomeIcon
            className="text-2xl ml-2 text-green-400 p-2 rounded-full bg-sky-200 font-bold"
            icon={faListCheck}
          />
        </div>
        <div className="w-full my-10 flex flex-row gap-12">
          <div className="w-[40%]">
            <div className="font-semibold w-full text-center text-lg border-b border-gray-300 mb-4 text-orange-500">
              Thông tin khách hàng
            </div>
            <p className="text-lg font-semibold mb-2">
              Mã : <span className="font-thin">{IdCustomer}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Họ tên : <span className="font-thin">{customerName}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Số điện thoại : <span className="font-thin">{customerPhone}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Email : <span className="font-thin">{customerEmail}</span>
            </p>
          </div>
          <div className="w-[60%]">
            <div className="font-extrabold w-full text-center text-lg border-b border-gray-300 mb-4 text-violet-500">
              Thông tin đơn thuê
            </div>
            <div className="flex w-full gap-6">
              <div className="w-[40%]">
                <p className="text-lg font-semibold mb-2">
                  Mã đơn : <span className="font-thin">{idOder}</span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Thời gian đặt :{" "}
                  <span className="font-medium text-blue-500">
                    {" "}
                    {new Date(orderDate).toLocaleDateString("en-US")}
                  </span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Mảng làm việc :{" "}
                  <span className="font-medium text-yellow-500 uppercase">
                    {field}
                  </span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Số lượng nhân viên:{" "}
                  <span className="font-medium text-blue-500">
                    {totalPersonnel}
                  </span>
                </p>
                {maintains.length > 0 && (
                  <p className="text-lg font-semibold mb-2">
                    Thông tin gia hạn:
                    <div
                      onClick={() => setShowInfoMaintain(true)}
                      className="font-medium transition-colors duration-200 ease-linear text-blue-500 underline cursor-pointer hover:text-green-500"
                    >
                      Xem chi tiết{" "}
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </div>
                  </p>
                )}
              </div>
              <div className="w-[60%] ml-10">
                <p className="text-lg font-semibold mb-2">
                  Thời gian thực hiện :{" "}
                  <span className="font-medium text-blue-500">{duration}</span>
                </p>
                <p className="text-lg font-semibold mb-2 ">
                  Hình thức làm việc:{" "}
                  <span className="font-medium text-blue-500 capitalize">
                    {workingTime}
                  </span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Thời gian bắt đầu:{" "}
                  <span className="font-medium text-green-500">
                    {" "}
                    {new Date(startTime).toLocaleDateString("en-US")}
                  </span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Mô hình làm việc :{" "}
                  <span className="font-medium text-blue-500 capitalize">
                    {typeWork}
                  </span>
                </p>
                <p className="text-lg font-semibold mb-2">
                  Lương đáp ứng :{" "}
                  <span className="font-medium text-blue-500">{budget} $</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-gray-500 my-10 pb-10">
          {statusCancel ? (
            <div>
              <div className="mt-8 text-2xl font-bold text-gray-700 opacity-75">
                Đơn thuê đã bị hủy.
              </div>
              <div className="mt-3 text-xl font-semibold text-cyan-400">
                Lý do hủy : <span>"{team.reason}"</span>
              </div>
            </div>
          ) : statusDone ? (
            <div className="mt-8 text-green-600 text-xl font-bold">
              Dự án đã hoàn thành
            </div>
          ) : (
            <div className="mt-8 w-full flex">
              <span className="font-bold text-xl">Nhóm phụ trách dự án : </span>
              {completeSelected ? (
                <span className="font-medium text-xl ml-2 text-blue-500">
                  {team.team.name}
                </span>
              ) : (
                <span className="">
                  <span className="opacity-80 ml-2 italic text-sm text-red-400">
                    Chưa có nhóm phụ trách nào cho dự án của khách hàng. Vui
                    lòng xác nhận và chọn nhóm!!!
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setShowHistory(true);
          }}
          className=" father flex pr-3 mb-6 absolute left-6 bottom-2 justify-end cursor-pointer items-center hover:underline hover:text-blue-500 underline-thick"
        >
          <p className="mr-2 font-semibold text-lg">Lịch sử giao dịch</p>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="icon text-green-500 text-xl  font-bold cursor-pointer"
          />
        </div>
        <button
          className="bg-gray-700 absolute right-6 bottom-4 hover:bg-gray-500 transition-colors duration-150 ease-in-out text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
      {showHistory && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
          <div className="bg-white w-[1000px] h-[600px] overflow-auto flex flex-col relative z-30 shadow-xl rounded-lg p-6">
            <div className="flex flex-col items-center">
              {team.statements.map((sta, index) => (
                <div
                  key={index}
                  // className={`text-lg ${getStatusClass(sta.status)}`}
                >
                  <div>
                    {sta.status === "pending" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faBook}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                          <div className="h-16 w-1 bg-green-500"></div>
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đơn thuê đang chờ xác nhận
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "accepted" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                          <div className="h-16 w-1 bg-green-500"></div>
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đơn thuê đã được xác nhận
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "progress" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faBarsProgress}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                          <div className="h-16 w-1 bg-green-500"></div>
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đơn thuê đang trong tiến độ
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "maintain-pending" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faSpinner}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                          <div className="h-16 w-1 bg-green-500"></div>
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đơn thuê đang chờ xác nhận gia hạn
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "maintain-accepted" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faFileCircleCheck}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                          <div className="h-16 w-1 bg-green-500"></div>
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đơn thuê xác nhận gia hạn thành công
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "maintain-rejected" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faX}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                          <div className="h-16 w-1 bg-green-500"></div>
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đơn thuê đã bị hủy gia hạn
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "done" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Hoàn thành
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                    {sta.status === "cancel" && (
                      <div className="flex w-[400px]">
                        <div className="flex flex-col items-center w-[30%]">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                          />
                        </div>
                        <div className="w-[70%]">
                          <p className="text-lg font-medium text-blue-500">
                            Đã hủy
                          </p>
                          <p>
                            {"Thời gian: "}
                            {new Date(sta.time).toLocaleDateString("en-US")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div
              onClick={() => setShowHistory(false)}
              className="absolute cursor-pointer top-6 right-6"
            >
              <FontAwesomeIcon
                className="font-bold text-3xl hover:text-red-500"
                icon={faXmark}
              />
            </div>
          </div>
        </div>
      )}
      {showInfoMaintain && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
          <div className="bg-white flex flex-col w-[500px] h-[500px] relative justify-between items-center z-30 shadow-xl rounded-lg p-6">
            <div>
              <h1 className="text-3xl font-bold text-blue-500 mb-6">
                Thông tin gia hạn
              </h1>
              <div className="h-[320px] w-full overflow-auto">
                {maintains.map((item, index) => (
                  <div className="my-4 text-left" key={item._id}>
                    <h2 className="font-extrabold text-xl">
                      Lần gia hạn thứ {index + 1}
                    </h2>
                    <p>Thời gian gia hạn thêm : {item.duration}</p>
                    <p>Số tiền đáp ứng : {item.budget}</p>
                    <p>
                      Trạng thái :{" "}
                      <span className="text-green-500 capitalize">
                        {item.status}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="py-3 px-5 bg-blue-500 text-white rounded-xl mt-3"
              onClick={() => setShowInfoMaintain(false)}
            >
              Xong
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ListOrderCustomer = () => {
  const [dataAxiosListOrder, setDataAxiosListOrder] = useState([]);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [showSelectTeam, setShowSelectTeam] = useState(false);
  const [showReason, setShowReason] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();
  const [listTeamNoActive, setListTeamNoActive] = useState([]);
  const [isSure, setIsSure] = useState(false);
  const [selected, setSelected] = useState();
  const [idOder, setIdOrder] = useState("");
  const [idTeam, setIdTeam] = useState("");
  const [noSelect, setNoSelect] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [done, setDone] = useState(false);
  const [showInfoMaintain1, setShowInfoMaintain1] = useState(false);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const resTeamNoActive = await teamWorkApi.getIsTeamActive(false);
      setListTeamNoActive(resTeamNoActive.data);
    } catch (error) {
      console.log("Lỗi không get ra được list Team " + error);
    }

    try {
      const res = await orderTeamApi.getListOrder();
      setDataAxiosListOrder(res.data);
    } catch (error) {
      console.log("Lỗi không get ra được list Order " + error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const clickAddTeamToOrder = async (orderId, teamId) => {
    const dataAddTeamToOrder = {
      orderId: orderId,
      teamId: teamId,
    };
    try {
      const res = await orderTeamApi.addTeamToOrder(dataAddTeamToOrder);
      console.log(res);
      // alert("Thành công");
      toast.success("Thành công");
      fetchData();
    } catch (error) {
      // alert("Thất bại" + error);
      toast.error("Thất bại");
    }
    setShowOrderDetail(false);
    setShowSelectTeam(false);
  };
  const clickAcceptMaintain = async (maintainId, duration, budget) => {
    const maintainUpdate = {
      orderId: selectedOrder._id,
      maintainId: maintainId,
      duration: duration,
      budget: budget,
    };
    try {
      const res = await mainTainOrderApi.acceptedMaintain(maintainUpdate);
      console.log(res);
      // alert("Thành công");
      toast.success("Thành công");
      setShowInfoMaintain1(false);
      fetchData();
    } catch (error) {
      // alert("Thất bại" + error);
      toast.error("Thất bại");
    }
  };

  const rejectMaintain = async (maintainId) => {
    const maintainReject = {
      orderId: selectedOrder._id,
      maintainId: maintainId,
    };
    console.log(maintainReject);
    try {
      const res = await mainTainOrderApi.rejectMaintain(maintainReject);
      console.log(res);
      // alert("Thành công");
      toast.success("Đã hủy yêu cầu gia hạn của khách hàng.");
      setShowInfoMaintain1(false);
      fetchData();
    } catch (error) {
      // alert("Thất bại" + error);
      toast.error("Hủy yêu cầu gia hạn thất bại. Xin hãy thử lại.");
    }
  };

  const hanldeOpenOrderDetail = (order) => {
    setShowOrderDetail(true);
    setSelectedOrder(order);
    console.log(order);
    if (order.status === "pending") {
      setNoSelect(false);
      setCancel(false);
      setDone(false);
    } else if (order.status === "progress") {
      setNoSelect(true);
      setCancel(false);
    } else if (order.status === "cancel") {
      setCancel(true);
    } else if (order.status === "done") {
      setDone(true);
      setCancel(false);
    }
  };

  const hanldelOpenInfoMaintain = (order) => {
    setSelectedOrder(order);
    setShowInfoMaintain1(true);
  };

  const handleCloseOrderDetail = () => {
    setShowOrderDetail(false);
  };

  const onCloseSelectTeam = () => {
    setShowSelectTeam(false);
  };

  //Cancel
  const [reason, setReason] = useState("");

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmitReason = async () => {
    const dataCancel = {
      orderId: idOder,
      reason: reason,
    };
    try {
      const res = await orderTeamApi.cancelOrder(dataCancel);
      console.log(res);
      // alert("Thành công !!!");
      toast.success("Thành công !!!");
      setShowReason(false);
      fetchData();
    } catch (error) {
      // alert("Thất bại");
      toast.error("Thất bại!!!");
      console.log("Lỗi : ", error);
    }
  };

  const handleDoneOrder = async (selectIdOrder) => {
    console.log(selectIdOrder);
    const orderId = selectIdOrder;
    try {
      const res = await orderTeamApi.doneOrder(orderId);
      console.log(res);
      // alert("Thành công !!!");
      toast.success("Thành công !!!");
      fetchData();
    } catch (error) {
      // alert("Thất bại");
      toast.success("Thất bại. Vui lòng kiểm tra lại !!!");
      console.log("Lỗi : ", error);
    }
  };

  return (
    <div class="w-full min-h-screen-except-header">
      <span className="text-2xl font-extrabold text-blue-500">
        Quản lý đơn thuê của khách hàng
      </span>
      <div class="mt-6 flex w-full rounded-lg bg-white shadow-xl">
        <div class=" w-full overflow-x-auto">
          <table class="w-full text-sm mt-0 text-dark-purple transition-all duration-500 ease-in-out">
            <thead className="w-full">
              <tr className="border-b border-solid border-gray-400">
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Mã đơn thuê
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Họ tên khách hàng
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Thời gian đặt
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Thông tin
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Trạng thái
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Tùy chọn
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {dataAxiosListOrder.map((dt, index) => (
                <tr
                  key={index}
                  className={`border-t border-solid border-gray-200 ${
                    index % 2 === 0 ? "bg-sky-100" : "bg-white"
                  }`}
                >
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    {dt._id}
                  </td>
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    {dt.customer.name}
                  </td>
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    {new Date(dt.orderDate).toLocaleDateString("en-US")}
                  </td>
                  <td className=" px-[16px] py-[20px] cursor-pointer text-center min-w-[80px]">
                    <a
                      onClick={() => {
                        hanldeOpenOrderDetail(dt);
                      }}
                      className="underline hover:text-blue-500 text-green-500"
                    >
                      Xem chi tiết
                    </a>
                  </td>

                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    <span
                      class={`w-max inline-block font-bold capitalize ${
                        dt.status === "pending"
                          ? "text-yellow-600"
                          : `${
                              dt.status === "progress"
                                ? "text-cyan-600"
                                : `${
                                    dt.status === "cancel"
                                      ? "text-gray-400"
                                      : `${
                                          dt.status === "done"
                                            ? "text-lime-600"
                                            : ""
                                        }`
                                  }`
                            }`
                      }`}
                    >
                      {dt.status}
                    </span>
                    {dt.status === "pending" ? (
                      <span className="ml-2 text-yellow-600">
                        <FontAwesomeIcon icon={faWarning} />
                      </span>
                    ) : dt.status === "progress" ? (
                      <span className="ml-2 text-green-600">
                        <FontAwesomeIcon
                          className="rotate-180 font-extrabold text-xl"
                          icon={faSpinner}
                        />
                      </span>
                    ) : dt.status === "cancel" ? (
                      <span className="ml-2 text-gray-600">
                        <FontAwesomeIcon
                          className="font-extrabold text-xl"
                          icon={faBan}
                        />
                      </span>
                    ) : dt.status === "done" ? (
                      <span className="ml-2 text-lime-600">
                        <FontAwesomeIcon
                          className="font-extrabold text-xl"
                          icon={faCheck}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </td>

                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    {dt.status === "pending" ? (
                      <div class="flex justify-center items-center gap-2">
                        <button
                          onClick={() => {
                            setShowSelectTeam(true);
                            setIdOrder(dt._id);
                            setIsSure(false);
                          }}
                          className=" animate-bounce px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-sky-500 transition-all duration-150 ease-in-out"
                        >
                          Xác nhận
                        </button>
                        <button
                          onClick={() => {
                            setShowReason(true);
                            setIdOrder(dt._id);
                          }}
                          className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out"
                        >
                          Hủy
                        </button>
                      </div>
                    ) : dt.status === "progress" ? (
                      <div>
                        {dt.maintains.length > 0 ? (
                          <div key={dt.maintains[dt.maintains.length - 1]._id}>
                            {dt.maintains[dt.maintains.length - 1].status ===
                            "pending" ? (
                              <div>
                                <button
                                  onClick={() => hanldelOpenInfoMaintain(dt)}
                                  className="px-4 animate-pulse py-2 bg-orange-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out"
                                >
                                  Yêu cầu gia hạn
                                </button>
                              </div>
                            ) : (
                              <div class="flex justify-center items-center gap-2">
                                <button
                                  onClick={() => {
                                    handleDoneOrder(dt._id);
                                  }}
                                  className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out"
                                >
                                  Hoàn thành
                                </button>
                                <button
                                  onClick={() => {
                                    setShowReason(true);
                                    setIdOrder(dt._id);
                                  }}
                                  className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out"
                                >
                                  Hủy
                                </button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div class="flex justify-center items-center gap-2">
                            <button
                              onClick={() => {
                                handleDoneOrder(dt._id);
                              }}
                              className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out"
                            >
                              Hoàn thành
                            </button>
                            <button
                              onClick={() => {
                                setShowReason(true);
                                setIdOrder(dt._id);
                              }}
                              className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out"
                            >
                              Hủy
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showOrderDetail && (
        <OrderDetail
          message="chi tiết đơn thuê của khách hàng"
          onClose={handleCloseOrderDetail}
          IdCustomer={selectedOrder.customer._id}
          customerName={selectedOrder.customer.name}
          customerPhone={selectedOrder.customer.phone}
          customerEmail={selectedOrder.customer.email}
          idOder={selectedOrder._id}
          orderDate={selectedOrder.orderDate}
          field={selectedOrder.field}
          totalPersonnel={selectedOrder.totalPersonnel}
          duration={selectedOrder.duration}
          workingTime={selectedOrder.workingTime}
          startTime={selectedOrder.startTime}
          typeWork={selectedOrder.typeWork}
          budget={selectedOrder.budget}
          maintains={selectedOrder.maintains}
          noSelect={noSelect}
          cancel={cancel}
          done={done}
          team={selectedOrder}
        />
      )}
      {showSelectTeam && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
          <div className="bg-white relative z-30 shadow-xl rounded-lg p-6">
            <div className="absolute right-6 top-6">
              <FontAwesomeIcon
                onClick={() => setShowSelectTeam(false)}
                className="font-bold text-4xl text-gray-400 hover:text-red-400 cursor-pointer"
                icon={faXmark}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4">
              <h1 className="text-3xl uppercase font-bold text-blue-500">
                Chọn nhóm phù hợp với yêu cầu
              </h1>
              <div class="mt-6 w-full overflow-x-auto shadow-2xl rounded-lg">
                <table class="w-full text-sm mt-0 text-dark-purple transition-all duration-500 ease-in-out ">
                  <thead className="w-full bg-pink-500 text-white">
                    <tr className="border-b border-solid border-gray-400 ">
                      <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                        Tên nhóm
                      </th>
                      <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                        Mảng làm việc
                      </th>
                      <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                        Trưởng nhóm
                      </th>
                      <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                        Số lượng nhân viên
                      </th>
                      {/* <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    Thời gian làm việc
                  </th> */}
                      <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                        Hình thức làm việc
                      </th>
                      <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                        Tùy chọn
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {listTeamNoActive.length === 0 ? (
                      <div className="text-green-500 font-semibold p-4">
                        Không tìm thấy nhóm nào phù hợp. <br /> Vui lòng tạo
                        nhóm mới!!!
                      </div>
                    ) : (
                      listTeamNoActive.map((dt, index) => (
                        <tr
                          key={dt._id}
                          className={`border-t border-solid border-gray-200 ${
                            index % 2 === 0 ? "bg-sky-100" : "bg-white"
                          }`}
                        >
                          <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                            {dt.name}
                          </td>
                          <td className=" px-[16px] py-[20px] text-center min-w-[80px] uppercase">
                            {dt.field}
                          </td>
                          <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                            {dt.leader.name}
                          </td>
                          <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                            {dt.totalEmployee}
                          </td>
                          <td className=" px-[16px] py-[20px] text-center min-w-[80px] capitalize">
                            {dt.typeWork}
                          </td>
                          <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                            <button
                              onClick={() => {
                                setIsSure(true);
                                setSelected(dt);
                                setIdTeam(dt._id);
                              }}
                              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-sky-500 transition-all duration-150 ease-in-out"
                            >
                              Chọn
                            </button>
                          </td>
                          {isSure ? (
                            <div className="fixed w-full inset-0 z-[1000] flex items-center justify-center">
                              <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
                              <div className="bg-white w-[40%] relative z-30 shadow-xl rounded-lg p-6">
                                <div className="font-bold text-2xl">
                                  Bạn chắc chắn chọn nhóm{" "}
                                  <span className="text-green-500">
                                    {selected.name}
                                  </span>{" "}
                                  ?
                                </div>
                                <div className="flex w-full justify-center items-center gap-10 mt-5">
                                  <button
                                    onClick={() =>
                                      clickAddTeamToOrder(idOder, idTeam)
                                    }
                                    className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg"
                                  >
                                    Đồng ý
                                  </button>
                                  <button
                                    onClick={() => setIsSure(false)}
                                    className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg"
                                  >
                                    Hủy
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={() => navigate("/admin/create-team")}
                className="px-4 py-2 bg-blue-500 font-semibold rounded-xl text-white"
              >
                Tạo nhóm mới
              </button>
            </div>
          </div>
        </div>
      )}
      {showReason && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
          <div className="bg-white flex flex-col relative z-30 shadow-xl rounded-lg p-6">
            {/* <form onSubmit={handleSubmit} className="flex flex-col"> */}
            <label className="flex flex-col mb-8">
              <span className="text-xl font-bold text-blue-500">
                Lý do hủy đơn thuê :
              </span>
              <textarea
                placeholder="Nhập vào đây"
                className="w-[500px] h-48 mt-6 border-[2px] border-solid border-gray-500 rounded-lg cursor-text
                duration-200 transition-all ease-in-out focus:border-green-500 focus:outline-none px-4 py-2"
                value={reason}
                onChange={handleReasonChange}
              />
            </label>
            <button
              onClick={() => handleSubmitReason()}
              className="px-6 py-3 bg-blue-500 rounded-xl text-white text-xl hover:bg-blue-700 duration-200 transition-colors ease-in-out"
              type="submit"
            >
              Gửi
            </button>
            {/* </form> */}
            <div className="absolute right-6 top-4">
              <FontAwesomeIcon
                onClick={() => setShowReason(false)}
                className="font-bold text-4xl text-gray-400 hover:text-red-400 cursor-pointer"
                icon={faXmark}
              />
            </div>
          </div>
        </div>
      )}
      {showInfoMaintain1 && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
          <div className="bg-white  flex flex-col w-[500px] h-auto relative justify-center items-center z-30 shadow-xl rounded-lg p-6">
            <h1 className="text-3xl font-bold text-blue-500">
              Thông tin gia hạn
            </h1>
            <h2>Mã đơn : {selectedOrder._id}</h2>
            <h2>Khách hàng : {selectedOrder.customer.name}</h2>
            {selectedOrder.maintains.map((item, index) => {
              if (item.status === "pending") {
                return (
                  <div className="my-4 text-left" key={item._id}>
                    <p className="text-xl font-bold">
                      Thời gian gia hạn thêm:{" "}
                      <span className="text-blue-700 ml-2">
                        {item.duration}
                      </span>
                    </p>
                    <p className="text-xl font-bold">
                      Số tiền đáp ứng:
                      <span className="text-blue-700 ml-2">{item.budget}$</span>
                    </p>
                    <div className="flex gap-6 mt-4">
                      <button
                        className="py-3 px-5 bg-blue-500 text-white rounded-xl"
                        onClick={() =>
                          clickAcceptMaintain(
                            item._id,
                            item.duration,
                            item.budget
                          )
                        }
                      >
                        Xác nhận gia hạn
                      </button>
                      <button
                        className="py-3 px-5 bg-red-500 text-white rounded-xl"
                        onClick={() => rejectMaintain(item._id)}
                      >
                        Hủy gia hạn
                      </button>
                    </div>
                  </div>
                );
              }

              return null;
            })}

            <div className="absolute top-4 right-4 cursor-pointer">
              <FontAwesomeIcon
                onClick={() => setShowInfoMaintain1(false)}
                className="text-3xl font-bold hover:text-red-500 cursor-pointer"
                icon={faXmark}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListOrderCustomer;
