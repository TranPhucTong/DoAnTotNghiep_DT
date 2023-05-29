import React from "react";
import {
  faCheck,
  faRepeat,
  faStar,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileLines, faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import formatBirthDate from "../../../utils/convertDate";
const RenderStatement = (item) => {
  switch (item.status) {
    case "pending":
      return {
        title: "Đơn thuê đang chờ xác nhận",
        icon: faFileLines,
      };
    case "maintain-pending":
      return {
        title: "Gia hạn đơn thuê đang chờ xác nhận",
        icon: faRepeat,
      };
    case "maintain-accepted":
      return {
        title: "Gia hạn được xác nhận",
        icon: faCheck,
      };
    case "maintain-rejected":
      return {
        title: "Gia hạn bị từ chối",
        icon: faBan,
      };
    case "accepted":
      return {
        title: "Đơn thuê đã được xác nhận",
        icon: faCheck,
      };

    case "progress":
      return {
        title: "Đơn thuê đang trong tiến độ",
        icon: faCodepen,
      };
    case "maintain":
      return {
        title: "Đơn thuê được duy trì",
        icon: faRepeat,
      };
    case "done":
      return {
        title: "Đơn thuê đã hoàn thành",
        icon: faCreditCard,
      };
    case "cancel":
      return {
        title: "Đơn thuê đã bị hủy",
        icon: faBan,
      };
    case "rating":
      return {
        title: "Đơn thuê đã được đánh giá",
        icon: faStar,
      };

    default:
      break;
  }
};
const ItemStatement = ({ item, isFinal }) => {
  console.log("🚀 ~ file: ItemStatement.jsx:72 ~ ItemStatement ~ item:", item)
  const statement = RenderStatement(item);
  const isFinish = isFinal;
  return (
    <div className="flex w-2/3">
      <div className="flex flex-col justify-center items-center">
        <div
          className={`flex justify-center items-center border-4 border-green-500 rounded-full h-16 w-16 ${
            item.status === "cancel" ||
            (item.status === "maintain-rejected" && "border-red-500")
          }`}
        >
          <FontAwesomeIcon
            icon={statement.icon}
            className={`text-2xl text-green-500 ${
              item.status === "cancel" ||
              (item.status === "maintain-rejected" && "text-red-500")
            }`}
          />
        </div>
        {!isFinish && <div className={`h-36 w-1 bg-green-500 `}></div>}
      </div>
      <div className="ml-12 mt-2 flex-1 text-left">
        <h3
          className={`text-xl font-bold text-primary ${
            item.status === "cancel" ||
            (item.status === "maintain-rejected" && "text-red-500")
          }`}
        >
          {statement.title}
        </h3>
        <p className="text-slate-500">
          Thời gian: {formatBirthDate(item.time)}
        </p>
      </div>
    </div>
  );
};

export default ItemStatement;
