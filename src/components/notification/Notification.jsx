import React from "react";
import ListNotification from "./list-notification/ListNotification";
import { typeNotification } from "../../common/typeNotification";
import "./notification.scss";

const DATA = [
  {
    id: 1,
    customer: {
      name: "Danh",
    },
    content:
      "Dự án xây dựng landing page với giá 80$, thời gian 27/05/2023 - 30/05/2023",
    isSeen: false,
    createdAt: "27/05/2023",
    type: typeNotification.CONTRACT,
  },
  {
    id: 2,
    customer: {
      name: "Danh",
    },
    content: "Dự án: abc được gia hạn đến 21/12/2022, với lương thêm: 100$",
    isSeen: true,
    createdAt: "27/05/2023",
    type: typeNotification.MAINTAIN,
  },
  {
    id: 3,
    customer: {
      name: "Danh",
    },
    content: "Danh đã giá cho bạn 5*",
    isSeen: false,
    createdAt: "27/05/2023",
    type: typeNotification.RATING,
  },
];
const Notification = ({listNotification}) => {
  return (
    <div
      id="journal-scroll"
      className="p-10 min-w-[500px] max-h-[550px] overflow-y-scroll  bg-transparent "
    >
      <ListNotification listNotification={listNotification} />
    </div>
  );
};

export default Notification;
