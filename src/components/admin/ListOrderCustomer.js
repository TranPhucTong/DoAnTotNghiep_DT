import React, { useEffect, useState } from "react";
import orderTeamApi from "../../api/orderTeamApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarning,
  faCheckCircle,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const OrderDetail = ({ message, onClose, IdCustomer, idOder, orderDate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      <div className="bg-white z-30 shadow-xl rounded-lg p-6">
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
          <div className="w-[50%]">
            <div className="font-semibold w-full text-center text-lg border-b border-gray-300 mb-4">
              Thông tin khách hàng
            </div>
            <p className="text-lg font-semibold mb-2">
              Mã : <span className="font-thin">{IdCustomer}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Họ tên : <span className="font-thin">Đỗ Thành Danh</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Số điện thoại : <span className="font-thin">0337175348</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Email : <span className="font-thin">thDanh@gmail.com</span>
            </p>
          </div>
          <div className="w-[50%]">
            <div className="font-semibold w-full text-center text-lg border-b border-gray-300 mb-4">
              Thông tin đơn thuê
            </div>
            <p className="text-lg font-semibold mb-2">
              Mã đơn : <span className="font-thin">{idOder}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Thời gian đặt :{" "}
              <span className="font-thin">
                {" "}
                {new Date(orderDate).toLocaleDateString("en-US")}
              </span>
            </p>
          </div>
        </div>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

const ListOrderCustomer = () => {
  const [dataAxiosListOrder, setDataAxiosListOrder] = useState([]);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await orderTeamApi.getListOrder();
        setDataAxiosListOrder(res.data);
      } catch (error) {
        console.log("Lỗi: " + error);
      }
    };
    fetchData();
  }, []);

  const hanldeOpenOrderDetail = (order) => {
    setShowOrderDetail(true);
    setSelectedOrder(order);
  };

  const handleCloseOrderDetail = () => {
    setShowOrderDetail(false);
  };

  return (
    <div class="w-full min-h-screen-except-header">
      <span className="text-2xl font-extrabold text-blue-500">
        Quản lý đơn thuê của khách hàng
      </span>
      <div class="mt-6 flex w-full rounded-lg bg-white shadow-xl">
        <div class=" w-full overflow-x-auto">
          <table class="w-full text-sm mt-5 text-dark-purple transition-all duration-500 ease-in-out">
            <thead className="w-full">
              <tr className="border-b border-solid border-gray-400">
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Mã khách hàng
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Thời gian
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
                  key={dt._id}
                  className={`border-t border-solid border-gray-200 ${
                    index % 2 === 0 ? "bg-sky-100" : "bg-white"
                  }`}
                >
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    {dt.customerId}
                  </td>
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    {new Date(dt.orderDate).toLocaleDateString("en-US")}
                  </td>
                  <td className=" px-[16px] py-[20px] cursor-pointer text-center min-w-[80px]">
                    <a
                      onClick={() => hanldeOpenOrderDetail(dt)}
                      className="underline hover:text-blue-500 text-green-500"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    <span class="w-max text-yellow-600 inline-block">
                      {dt.status}
                    </span>
                    <span className="ml-2 text-yellow-600">
                      <FontAwesomeIcon icon={faWarning} />
                    </span>
                  </td>
                  <td className=" px-[16px] py-[20px] text-center min-w-[80px]">
                    <div class="flex justify-center items-center gap-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-sky-500 transition-all duration-150 ease-in-out">
                        Xác nhận
                      </button>
                      <button className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-slate-400 transition-all duration-150 ease-in-out">
                        Hủy
                      </button>
                    </div>
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
          IdCustomer={selectedOrder.customerId}
          idOder={selectedOrder._id}
          orderDate={selectedOrder.orderDate}
        />
      )}
    </div>
  );
};

export default ListOrderCustomer;
