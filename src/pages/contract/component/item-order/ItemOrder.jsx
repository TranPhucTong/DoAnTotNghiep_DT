import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faMarsAndVenus,
  faPhone,
  faEnvelope,
  faDollarSign,
  faCalendar,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../../../components/card/Card";
import formatGender from "../../../../utils/convertGender";
import formatBirthDate from "../../../../utils/convertDate";
import Modal from "../../../../components/modal/Modal";
import { useDispatch } from "react-redux";
import { setSelectContract } from "../../../../reducers/slices/contractSlice";
import statusContent from "../../../../utils/statusContent";
const TypeExpiry = {
  NEW: "green",
  REGULAR: "yellow",
  EMERGENCY: "red",
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
  } = item;

  const [active, setActive] = useState(false);
  const changeActiveHandle = () => setActive(!active);
  const dispatch = useDispatch();
  const statusRender = statusContent(status);
  const cancelHandle = () => {
    onOpen(true);
    dispatch(setSelectContract(item));
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
            <p className="text-left font-bold text-green-500">{statusRender}</p>
            {status === "pending" && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded"
                onClick={cancelHandle}
              >
                Hủy
              </button>
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
