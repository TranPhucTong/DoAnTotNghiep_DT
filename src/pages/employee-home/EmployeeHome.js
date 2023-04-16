import React, { useState } from "react";
import ListField from "../../components/list-field/ListField";
import avt from "../../images/avt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReactSlider, { ReactSliderProps } from "react-slider";
import cn from "classnames";
import RangeSlider from "../../components/range-slider/RangeSlider";
import { useSelector } from "react-redux";
import { selectEmployee } from "../../reducers/slices/employeeSlice";
import { formatBirthDate } from "../../utils/convertDate";
const EmployeeHome = () => {
  const employee = useSelector(selectEmployee);
  const [rentFrom, setRentFrom] = useState(employee.rent_from);
  const [rentTo, setRentTo] = useState(employee.rent_to);
  const changeRentFromHandle = (value) => {
    setRentFrom(value);
  };

  const changeRentToHandle = (value) => {
    setRentTo(value);
  };
  return (
    <div className="h-full w-full">
      {/* Title */}
      <h2 className="text-left text-xl font-medium text-[#171A1F] px-10 mb-6">
        Home
      </h2>
      {/* Field */}
      <div className="bg-[#F9FAFB] px-10 py-4">
        <h3 className="text-left text-[#323842]">Mảng lập trình</h3>
      </div>
      <div className="my-10 mx-[5%]">
        <ListField />
      </div>
      {/* Info */}
      <div className="bg-[#F9FAFB] px-10 py-4 my-12">
        <h3 className="text-left text-[#323842] ">Thông tin cá nhân</h3>
      </div>
      <div className="flex justify-between items-center px-10">
        <div className="w-1/6 flex flex-col justify-center items-center">
          <h4 className="text-slate-500 text-base mb-5">Ảnh đại diện</h4>
          <img
            src={employee.avatar}
            alt="avt"
            className="h-20 w-20 rounded-full cursor-pointer hover:opacity-50 transition-all"
          />
          <div className="flex justify-center items-center mt-4">
            <p className="text-[#00BDD6] text-xs mr-2 font-bold">4.4 / 5</p>
            <FontAwesomeIcon icon={faStar} className="text-[#00BDD6] text-xs" />
          </div>
        </div>
        <div className="w-5/12 pl-20">
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Họ tên:</span>
            <p className="text-base">{employee.name}</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Sinh nhật:</span>
            <p>{formatBirthDate(employee.birthDate)}</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Giới tính:</span>
            <p>{employee.gender}</p>
          </div>
        </div>
        <div className="w-5/12">
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Địa chỉ:</span>
            <p>TP.HCM</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">
              Số điện thoại:
            </span>
            <p>{employee.phone}</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Email:</span>
            <p>{employee.gmail}</p>
          </div>
        </div>
      </div>
      {/* Update Info */}
      <div className="py-10">
        <h2 className="text-left text-[#00BDD6] text-2xl uppercase m-10 font-bold">
          Cập nhật thông tin
        </h2>
        <div className="w-3/5 mx-auto">
          <div className="flex justify-center items-center px-10">
            <h4 className="text-slate-400 text-lg w-1/12 text-left">Giá: </h4>
            <div className="flex-1 flex justify-center items-center">
              <RangeSlider
                className="w-full h-2 mx-6"
                defaultValue={[0, 100]}
                value={[rentFrom, rentTo]}
                onChangeFrom={changeRentFromHandle}
                onChangeTo={changeRentToHandle}
              />
            </div>
            <div className="flex justify-center items-center w-1/6">
              <p className="text-sm">
                ${rentFrom} - ${rentTo}
              </p>
            </div>
          </div>
          <div className="px-10 pt-10">
            <h4 className="text-slate-400 text-lg text-left ">
              Giới thiệu bản thân:
            </h4>
            <textarea
              className="border-2 w-full rounded-lg my-5 border-neutral-500 p-5"
              value={employee.introduce}
            ></textarea>
          </div>
          <div className="px-10 pt-10">
            <h4 className="text-slate-400 text-lg text-left ">Các sản phẩm:</h4>
            <div className="flex justify-center items-center my-5">
              <img
                className="w-1/4 mx-2 rounded-sm hover:opacity-50 transition-all cursor-pointer"
                alt="img"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />
              <img
                className="w-1/4 mx-2 rounded-sm hover:opacity-50 transition-all cursor-pointer"
                alt="img"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />
              <img
                className="w-1/4 mx-2 rounded-sm hover:opacity-50 transition-all cursor-pointer"
                alt="img"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />
              <img
                className="w-1/4 mx-2 rounded-sm hover:opacity-50 transition-all cursor-pointer"
                alt="img"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
