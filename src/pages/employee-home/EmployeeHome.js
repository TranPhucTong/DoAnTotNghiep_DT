import React, { useState } from "react";
import ListField from "../../components/list-field/ListField";
import avt from "../../images/avt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReactSlider, { ReactSliderProps } from "react-slider";
import cn from "classnames";
import RangeSlider from "../../components/range-slider/RangeSlider";
const EmployeeHome = () => {
  const [rentFrom, setRentFrom] = useState();
  const [rentTo, setRentTo] = useState();
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
          <img src={avt} alt="avt" className="h-20 w-20 rounded-full " />
          <div className="flex justify-center items-center mt-4">
            <p className="text-[#00BDD6] text-xs mr-2 font-bold">4.4 / 5</p>
            <FontAwesomeIcon icon={faStar} className="text-[#00BDD6] text-xs" />
          </div>
        </div>
        <div className="w-5/12 pl-20">
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Họ tên:</span>
            <p className="text-base">Tông</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Sinh nhật:</span>
            <p>07/03/2001</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Giới tính:</span>
            <p>Nam</p>
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
            <p>0965624881</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Email:</span>
            <p>tong@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Update Info */}
      <h2 className="text-left text-[#00BDD6] text-2xl uppercase m-10 font-bold">
        Cập nhật thông tin
      </h2>
      <div className="w-3/5">
        <div>
          <h4>Giá</h4>
          <RangeSlider className="w-40 h-3" defaultValue={[0, 100]} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
