import React, { useEffect, useState } from "react";
import orderTeamApi from "../../api/orderTeamApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarning,
  faCheckCircle,
  faListCheck,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import teamWorkApi from "../../api/teamWorkApi";

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
}) => {
  const [completeSelected, setCompleteSelected] = useState(false);
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
          <div className="mt-8 w-full flex">
            <span className="font-bold text-xl">Nhóm phụ trách dự án : </span>
            {completeSelected ? (
              <span className="font-medium text-xl ml-2 text-blue-500">
                Legato Web
              </span>
            ) : (
              <button
                onClick={() => setCompleteSelected(true)}
                className="bg-blue-500 text-white ml-4 px-2 py-1  rounded-lg hover:bg-blue-800 transition-colors duration-150 ease-in-out"
              >
                Xác nhận
              </button>
            )}
          </div>
          <div>
            {completeSelected ? (
              ""
            ) : (
              <span className="">
                <span className="opacity-80 italic text-sm text-red-400">
                  Chưa có nhóm phụ trách cho dự án của khách hàng. Vui lòng xác
                  nhận để chọn nhóm!!!
                </span>
              </span>
            )}
          </div>
        </div>
        <button
          className="bg-gray-700 absolute right-6 bottom-4 hover:bg-gray-500 transition-colors duration-150 ease-in-out text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

const SelectTeam = ({ onClose }) => {
  const [listTeamNoActive, setListTeamNoActive] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resTeamNoActive = await teamWorkApi.getIsTeamActive(false);
        setListTeamNoActive(resTeamNoActive.data);
      } catch (error) {
        console.log("Lỗi: " + error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      <div className="bg-white relative z-30 shadow-xl rounded-lg p-6">
        <div className="absolute right-6 top-6">
          <FontAwesomeIcon
            onClick={onClose}
            className="font-bold text-4xl text-gray-400 hover:text-red-400 cursor-pointer"
            icon={faXmark}
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-3xl uppercase font-bold text-blue-500">
            Chọn nhóm phù hợp với yêu cầu
          </h1>
          <div class=" w-full overflow-x-auto shadow-2xl rounded-lg">
            <table class="w-full text-sm mt-5 text-dark-purple transition-all duration-500 ease-in-out ">
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
                {listTeamNoActive.map((dt, index) => (
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
                        // onClick={() => {
                        //   setShowSelectTeam(true);
                        //   console.log(dt.customer.name);
                        // }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-sky-500 transition-all duration-150 ease-in-out"
                      >
                        Chọn
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListOrderCustomer = () => {
  const [dataAxiosListOrder, setDataAxiosListOrder] = useState([]);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [showSelectTeam, setShowSelectTeam] = useState(false);
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
    console.log(order.customer._id);
  };

  const handleCloseOrderDetail = () => {
    setShowOrderDetail(false);
  };

  const onCloseSelectTeam = () => {
    setShowSelectTeam(false)
  }
 
  console.log(dataAxiosListOrder);

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
                  Mã đơn thuê
                </th>
                <th className=" px-[16px] py-[20px] text-center min-w-[80px]">
                  Họ tên khách hàng
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
                      <button
                        onClick={() => {
                          setShowSelectTeam(true);
                          console.log(dt.customer.name);
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-sky-500 transition-all duration-150 ease-in-out"
                      >
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
        />
      )}
      {showSelectTeam && <SelectTeam onClose={onCloseSelectTeam} />}
    </div>
  );
};

export default ListOrderCustomer;
