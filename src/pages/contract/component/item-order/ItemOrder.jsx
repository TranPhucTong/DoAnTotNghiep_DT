import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faFileLines,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faChevronCircleRight,
  faContactBook,
  faFileContract,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../../../components/card/Card";
import formatGender from "../../../../utils/convertGender";
import formatBirthDate from "../../../../utils/convertDate";
import Modal from "../../../../components/modal/Modal";
import { useDispatch } from "react-redux";
import { setSelectContract } from "../../../../reducers/slices/contractSlice";
import { useNavigate } from "react-router-dom";
import mainTainOrderApi from "../../../../api/mainTainOrderApi";
import { toast } from "react-toastify";
const TypeExpiry = {
  NEW: "green",
  REGULAR: "yellow",
  EMERGENCY: "red",
};

const statusContent = (status) => {
  switch (status) {
    case "pending":
      return "Chờ xác nhận";
    case "progress":
      return "Đang trong tiến độ";
    case "done":
      return "Hoàn thành";
    case "cancel":
      return "Đã hủy";
  }
};
const ItemOrder = ({ item, onOpen }) => {
  const {
    employee,
    team,
    field,
    totalPersonnel,
    duration,
    workingTime,
    startTime,
    typeWork,
    budget,
    status,
    orderDate,
    reason,
    _id,
    statements,
    maintains,
  } = item;

  const [active, setActive] = useState(false);
  const changeActiveHandle = () => setActive(!active);
  const dispatch = useDispatch();
  const statusRender = statusContent(status);
  const cancelHandle = () => {
    onOpen(true);
    dispatch(setSelectContract(item));
  };

  const navigate = useNavigate();
  const [showMaintain, setShowMaintain] = useState(false);
  const [showInfoMaintain, setShowInfoMaintain] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [cost, setCost] = useState(0);
  const [maintained, setMaintained] = useState(false);
  const [maintainAccept, setMaintainAccept] = useState(false);
  useEffect(() => {
    if (selectedOption === "1 tháng") {
      setCost(2000);
    } else if (selectedOption === "6 tháng") {
      setCost(12000);
    } else if (selectedOption === "1 năm") {
      setCost(24000);
    } else if (selectedOption === "2 năm") {
      setCost(48000);
    } else if (selectedOption === "3 năm") {
      setCost(72000);
    } else {
      setCost(0);
    }

    const hasItem = maintains.some((item) => item.status === "pending");
    const hasItemAccept = maintains.some((item) => item.status === "accepted");
    console.log(_id + hasItemAccept);
    if (hasItem === true) {
      setMaintained(true);
    } else if (hasItemAccept === true) {
      setMaintainAccept(true);
    }
  }, [selectedOption, statements]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const createMaintain = async () => {
    const maintain = {
      order: _id,
      duration: selectedOption,
      budget: cost,
    };

    try {
      const res = await mainTainOrderApi.createMaintain(maintain);
      console.log(res);
      toast.success("Gửi yêu cầu gia hạn thành công !!!");
    } catch (error) {
      console.log(error);
      toast.success("Gửi yêu cầu gia hạn thất bại. Vui lòng thử lại !!!");
    }
  };
  return (
    <Card active={active}>
      <div
        onClick={changeActiveHandle}
        className={`${
          active ? " border-b-2 pb-4" : ""
        } flex justify-between items-center  border-neutral-400 mt-[10px]`}
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faIdBadge}
            className="text-2xl text-neutral-600 mr-2"
          />
          <h3 className="font-bold text-lg text-neutral-900">
            Mã đơn thuê : {_id}
          </h3>
        </div>
      </div>
      {active ? (
        <>
          <div className="flex flex-row justify-between">
            <div>
              <div className="text-left">
                <div
                  className={
                    "my-5 font-bold text-[#4069E5] text-lg flex items-center"
                  }
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  <p className="ml-2 uppercase">{field}</p>
                </div>
                <div className="flex items-center text-neutral-900 my-3">
                  <p className="font-normal text-sm">Ngân sách: {budget}$</p>
                </div>
                <div className="flex items-center text-neutral-900 my-3">
                  <p className="font-normal text-sm">
                    Ngày bắt đầu: {formatBirthDate(startTime)}
                  </p>
                </div>
                <div className="flex text-neutral-900 my-3">
                  <p className="font-normal text-sm w-full">
                    Số lượng nhân lực: {totalPersonnel}
                  </p>
                </div>
                <div className="flex text-neutral-900 my-3">
                  <p className="font-normal text-sm w-full">
                    Thời lượng thuê: {duration}
                  </p>
                </div>
                <div className="flex text-neutral-900 my-3">
                  <p className="font-normal text-sm w-full">
                    Giờ làm việc: {workingTime}
                  </p>
                </div>
                <div className="flex text-neutral-900 my-3">
                  <p className="font-normal text-sm w-full">
                    Hình thức làm việc: {typeWork}
                  </p>
                </div>

                <div className=" text-neutral-900 mt-8 mb-4">
                  {status === "cancel" && (
                    <>
                      <p className="mr-2 w-20 text-[#4069E5] text-lg font-bold">
                        Lí do:
                      </p>
                      <p className="mt-2 font-normal text-sm h-[100px] w-full ">
                        {reason}
                      </p>
                    </>
                  )}
                  {status === "progress" && (
                    <span className="mr-2 w-20 text-[#4069E5] text-base font-bold">
                      Đội ngũ: {team.name}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <p className="text-left font-bold text-green-500">
                  {statusRender}
                </p>
                {status === "pending" && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded"
                    onClick={cancelHandle}
                  >
                    Hủy
                  </button>
                )}
              </div>
            </div>
            <div className=" father w-[400px] relative flex pr-3 justify-end cursor-pointer items-center">
              <div
                onClick={() => {
                  navigate(`/history-order?id=${_id}`);
                }}
                className="absolute top-3 right-3 flex justify-center items-center"
              >
                <p className="mr-2 font-semibold text-lg underline hover:text-blue-500 duration-150 transition-colors ease-in-out">
                  Lịch sử giao dịch
                </p>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className="icon text-green-500 text-xl font-bold cursor-pointer"
                />
              </div>
              {status === "progress" &&
                (maintained ? (
                  <div className="absolute bottom-3 right-3 font-bold">
                    <FontAwesomeIcon
                      icon={faWarning}
                      className="text-yellow-500 mr-2"
                    />
                    Hợp đồng đang chờ xác nhận gia hạn
                    <div
                      onClick={() => setShowInfoMaintain(true)}
                      className="underline font-light text-blue-400 hover:text-green-400 duration-200 ease-in-out transition-all mt-3"
                    >
                      Xem thông tin gia hạn
                    </div>
                  </div>
                ) : maintainAccept ? (
                  <div className="absolute bottom-3 right-3">
                    <div className=" font-bold">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mr-2"
                      />
                      Hợp đồng xác nhận gia hạn thành công
                    </div>

                    <div className="flex gap-5 mt-6">
                      <div
                        onClick={() => setShowMaintain(true)}
                        className="px-4 py-2 rounded-xl text-white font-bold bg-blue-500 
                hover:opacity-90
                "
                      >
                        Gia hạn hợp đồng
                        <FontAwesomeIcon
                          className="ml-2"
                          icon={faFileContract}
                        />
                      </div>
                      <div
                        onClick={() => setShowInfoMaintain(true)}
                        className="underline font-light text-blue-400 hover:text-green-400 duration-200 ease-in-out transition-all mt-3"
                      >
                        Xem thông tin gia hạn
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setShowMaintain(true)}
                    className="absolute px-4 py-2 rounded-xl text-white font-bold bg-blue-500 bottom-3 right-3 
                hover:opacity-90
                "
                  >
                    Gia hạn hợp đồng
                    <FontAwesomeIcon className="ml-2" icon={faFileContract} />
                  </div>
                ))}
            </div>
            {showMaintain && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
                <div className="bg-white flex flex-col relative justify-center items-center z-30 shadow-xl rounded-lg p-6">
                  <h1 className="text-3xl font-bold text-blue-500">
                    Gia hạn hợp đồng đội ngũ
                  </h1>
                  <h2 className="mt-4 text-2xl font-bold">
                    Bạn muốn gia hạn hợp đồng thêm bao nhiêu lâu?
                  </h2>
                  <div class="relative w-[60%] justify-center flex items-center mt-10">
                    <select
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className="px-4 py-2 focus-within:border-blue-500 focus-within:text-blue-500 font-bold transition-all duration-200 ease-linear w-full border-solid m-0 rounded-lg outline-none border-[2px] border-gray-300"
                    >
                      <option value="">Chọn thời gian gia hạn</option>
                      <option value="1 tháng">1 tháng</option>
                      <option value="6 tháng">6 tháng</option>
                      <option value="1 năm">1 năm</option>
                      <option value="2 năm">2 năm</option>
                      <option value="3 năm">3 năm</option>
                    </select>
                  </div>
                  <div className="mt-5">
                    <p className="italic font-bold text-green-700">
                      Giá thuê ứng với thời gian gia hạn :{" "}
                    </p>
                    <span className="text-xl">{cost} $</span>
                  </div>
                  <div className="flex gap-6 mt-10">
                    <button
                      onClick={() => {
                        createMaintain();
                        setShowMaintain(false);
                      }}
                      className="px-4 py-2 bg-blue-500 rounded-xl hover:bg-blue-700 text-white"
                    >
                      Đồng ý
                    </button>
                    <button
                      onClick={() => setShowMaintain(false)}
                      className="px-4 py-2 bg-gray-500 rounded-xl hover:bg-gray-600 text-white"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            )}
            {showInfoMaintain && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
                <div className="bg-white flex flex-col w-[500px] h-[500px] relative justify-between items-center z-30 shadow-xl rounded-lg p-6">
                  <div>
                    <h1 className="text-3xl font-bold text-blue-500 mb-10">
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
                    className="py-3 px-5 bg-blue-500 text-white rounded-xl"
                    onClick={() => setShowInfoMaintain(false)}
                  >
                    Xong
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ItemOrder;
