import React from "react";
import ItemNotification from "../item-notification/ItemNotification";
import noNotification from "../../../assests/imgs/no-notification.png";
import '../notification.scss'
const ListNotification = ({ listNotification }) => {
  return (
    <div className="">
      {listNotification && listNotification.length > 0 ? (
        listNotification.map((item) => (
          <ItemNotification key={item.id} item={item} />
        ))
      ) : (
        <div className="flex justify-center items-center flex-col">
          <img src={noNotification} alt="iomg" />
          <h2 className="mt-4 font-bold text-xl no-notification bg-gradient-to-r from-cyan-500 to-blue-500">Bạn chưa có thông báo nào</h2>
        </div>
      )}
    </div>
  );
};

export default ListNotification;
