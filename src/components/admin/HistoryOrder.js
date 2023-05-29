import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { listOrderStore } from "../../reducers/slices/orderSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faBook,
  faBarsProgress,
  faFileCircleCheck,
  faTrashCan,
  faLeftLong,
  faX
} from "@fortawesome/free-solid-svg-icons";

const HistoryOrder = () => {
  const location = useLocation();
  let listOrder = useSelector(listOrderStore);
  const [foundItem, setFoundItem] = useState(null);
  const navigate = useNavigate()



  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const found = listOrder.find((item) => item._id === id);
    setFoundItem(found);
  }, [location, listOrder]);
  return (
    <div className="flex flex-col relative items-center pt-20">
      {foundItem &&
        foundItem.statements.map((item) => (
          <div key={item._id}>
            <div className="text-left">
              {item.status === "pending" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "accepted" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "progress" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "maintain-pending" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "maintain-accepted" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "maintain-rejected" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "done" && (
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
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
              {item.status === "cancel" && (
                <div className="flex w-[400px]">
                  <div className="flex flex-col items-center w-[30%]">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="p-3 rounded-full text-green-500 border-green-500 border-[5px]"
                    />
                  </div>
                  <div className="w-[70%]">
                    <p className="text-lg font-medium text-blue-500">Đã hủy</p>
                    <p>
                      {"Thời gian: "}
                      {new Date(item.time).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      <div
        onClick={() => navigate("/contract")}
        className="px-8 py-3 rounded-xl absolute left-4 -bottom-16 bg-blue-500 cursor-pointer mt-14 text-white"
      >
        <FontAwesomeIcon icon={faLeftLong} className="mr-2" />
        Quay lại
      </div>
    </div>
  );
};

export default HistoryOrder;
