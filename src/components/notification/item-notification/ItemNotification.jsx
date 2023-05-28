import {
  faBan,
  faCheck,
  faFile,
  faRepeat,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { typeNotification } from "../../../common/typeNotification";
import formatBirthDate from "../../../utils/convertDate";
import { useDispatch } from "react-redux";
import { seenNotification } from "../../../reducers/actions/notificationAction";
const renderNotificationHandle = (type, sender) => {
  switch (type) {
    case typeNotification.CONTRACT:
      return { icon: faFile, title: `${sender.name} gửi yêu cầu tạo hợp đồng` };
    case typeNotification.MAINTAIN:
      return { icon: faRepeat, title: `${sender.name} gửi yêu cầu gia hạn` };
    case typeNotification.RATING:
      return { icon: faStar, title: `${sender.name} đã đánh giá` };
    case typeNotification.CANCEL:
      return { icon: faBan, title: `Hợp đồng bị hủy` };
    case typeNotification.DONE:
      return { icon: faCheck, title: `Hợp đồng đã hoàn thành` };
    case typeNotification.ACCEPTED:
      return { icon: faCheck, title: `Hợp đồng đã được chấp nhận` };
    default:
      break;
  }
};

const ItemNotification = ({ item }) => {
  const { isSeen, content, createdAt, type, customer } = item;
  const noti = renderNotificationHandle(type, customer);
  const { icon, title } = noti;
  const dispatch = useDispatch();
  const seenNotificationHandle = () => {
    dispatch(seenNotification(item._id));
  };
  return (
    <div
      className={`${
        isSeen ? "opacity-50 " : " hover:cursor-pointer"
      } hover:opacity-100 transition-all duration-300 my-10`}
      onClick={seenNotificationHandle}
    >
      <div className={`flex items-center`}>
        <FontAwesomeIcon className="w-1/12 mr-2 text-green-500" icon={icon} />
        <h3 className="w-8/12 mr-2 text-left text-base font-bold text-slate-950">
          {title}
        </h3>
        <p className="w-3/12 text-sm text-slate-700">
          {formatBirthDate(createdAt)}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-slate-900 text-left text-[14px] pl-10 leading-6">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ItemNotification;
