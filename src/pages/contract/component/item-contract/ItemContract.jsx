import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faMarsAndVenus,
  faPhone,
  faEnvelope,
  faDollarSign,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../../../components/card/Card";
import formatGender from "../../../../utils/convertGender";
import formatBirthDate from "../../../../utils/convertDate";
import Modal from "../../../../components/modal/Modal";
import { useDispatch } from "react-redux";
import { setSelectContract } from "../../../../reducers/slices/contractSlice";
import { Link, useNavigate } from "react-router-dom";
import configRoutes from "../../../../config/configRouter";
import statusContent from "../../../../utils/statusContent";
const TypeExpiry = {
  NEW: "green",
  REGULAR: "yellow",
  EMERGENCY: "red",
};

const ItemContract = ({ item, onOpen, onOpenReview }) => {
  const {
    employee,
    nameProject,
    startDate,
    endDate,
    budget,
    description,
    createdDate,
    status,
    _id,
  } = item;
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const changeActiveHandle = () => setActive(!active);
  const dispatch = useDispatch();
  const statusRender = statusContent(status);
  const cancelHandle = () => {
    onOpen(true);
    dispatch(setSelectContract(item));
  };

  const changeToStatementHandle = () => {
    navigate(`${configRoutes.contract}/${_id}`);
    dispatch(setSelectContract(item));
  };
  return (
    <Card active={active}>
      <div
        onClick={changeActiveHandle}
        className={`${
          active ? " border-b-2 pb-4" : ""
        } flex justify-between items-center  border-neutral-400`}
      >
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faIdBadge} className="mr-2" />
            <p className="text-base text-neutral-700 font-medium">
              {employee.name}
            </p>
          </div>
          <div className="flex items-center my-1">
            <FontAwesomeIcon icon={faMarsAndVenus} className="mr-2" />
            <p className="text-sm font-normal text-neutral-700">
              {formatGender(employee.gender)}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mx-2 bg-transparent border px-4 py-2 rounded-lg border-slate-700 cursor-pointer text-sm">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {employee.phone}
          </div>
          <div className="mx-2 bg-transparent border px-4 py-2 rounded-lg border-slate-700 cursor-pointer text-sm">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {employee.email}
          </div>
        </div>
      </div>
      {active ? (
        <div className="flex">
          <div className="flex-1">
            <div className="text-left">
              <h3 className={"my-5 font-bold text-[#4069E5] text-lg"}>
                {nameProject}
              </h3>
              <div className="flex items-center text-neutral-900 my-3">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className=" mr-2 text-neutral-600"
                />
                <p className="font-normal text-sm">{budget}$</p>
              </div>
              <div className="flex items-center text-neutral-900 my-3">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className=" mr-2 text-neutral-600"
                />
                <p className="font-normal text-sm">
                  {formatBirthDate(startDate)} - {formatBirthDate(endDate)}
                </p>
              </div>
              <div className="flex text-neutral-900 my-3">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className=" mr-2 text-neutral-600"
                />
                <p className="font-normal text-sm h-[100px] w-full">
                  {description}
                </p>
              </div>
              <div className=" text-neutral-900 my-3">
                {status === "cancel" && (
                  <>
                    <p className="mr-2 w-20 text-neutral-600">Lí do:</p>
                    <p className="mt-2 font-normal text-sm h-[100px] w-full">
                      {item.reason}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-left font-bold text-green-500">
                {statusRender}
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-between pt-5 items-end flex-col ">
            <p
              onClick={changeToStatementHandle}
              className="underline text-right text-slate-700 hover:text-primary transition-all"
            >
              Lịch sử giao dịch
            </p>

            {status === "pending" && (
              <button
                onClick={cancelHandle}
                className="max-w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded"
              >
                Hủy
              </button>
            )}
            {status === "done" && !item.isRating && (
              <button
                onClick={() =>
                  onOpenReview({
                    isOpen: true,
                    employee: employee._id,
                    contract: item,
                  })
                }
                className="max-w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded"
              >
                Đánh giá
              </button>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ItemContract;
