import React from "react";
import logo from "../../../images/logoCompany.png";
import avt from "../../../images/avt.png";
import point from "../../../assests/imgs/point.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faMagnifyingGlass,
  faHome,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.scss";
import { useSelector } from "react-redux";
import { selectAccountEmployee, selectEmployee } from "../../../reducers/slices/employeeSlice";
const NavEmployee = ({ onChangeActive, isActive }) => {
  const employee = useSelector(selectEmployee);
  const accountEmployee = useSelector(selectAccountEmployee);

  return (
    <>
      {/* Header */}
      <div className="flex  items-center">
        <img src={logo} alt="" className="w-[44px] hover:cursor-pointer" />
        {!isActive && (
          <>
            <h3 className="text-white text-base ml-3 font-bold">CodeHire</h3>
            <div className="flex-1 text-right" onClick={onChangeActive}>
              <FontAwesomeIcon
                className="text-[#B8C0FA] text-xl hover:text-white hover:cursor-pointer transition-all"
                icon={faBarsProgress}
              />
            </div>
          </>
        )}
      </div>
      {/* profile */}
      <div className="my-8 flex items-center">
        <img
          className="border-2 border-[#71C38C] w-[44px] rounded-full hover:cursor-pointer"
          src={employee.avatar}
          alt=""
        />
        {!isActive && (
          <div className="ml-5">
            <p className="text-white text-left text-base leading-4">{employee.name}</p>
            <p className="text-[#B8C0FA] text-base ">{accountEmployee}</p>
          </div>
        )}
      </div>
      {/* search */}
      {isActive ? (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-400 mr-2 text-lg hover:cursor-pointer" 
        />
      ) : (
        <div className="flex items-center w-full py-2 px-4 bg-white rounded-lg ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-400 mr-2 "
          />
          <input
            type="text"
            className="text-gray-400 text-sm w-full border-none outline-none"
            placeholder="Tìm kiếm..."
          />
        </div>
      )}

      {/* List Nav */}
      <div className={`${isActive && 'flex flex-col     ' }my-8`}>
        {isActive ? (
          <div className="my-2"><FontAwesomeIcon icon={faHome} className="text-white text-lg hover:cursor-pointer" /></div>
        ) : (
          <div className="hover:cursor-pointer transition-all flex items-center w-full px-5 py-2 nav-active bg-[#4338CA] rounded-lg my-4">
            <FontAwesomeIcon icon={faHome} className="text-white text-sm" />
            <p className="text-white text-base ml-3 ">Home</p>
          </div>
        )}

        {isActive ? (
         <div className="my-2"> <FontAwesomeIcon icon={faFolder} className="text-white text-lg hover:cursor-pointer" /></div>
        ) : (
          <div className="hover:cursor-pointer transition-all flex items-center w-full px-5 py-2 rounded-lg my-4 hover:bg-[#4338CA] hover:">
            <FontAwesomeIcon icon={faFolder} className="text-white text-sm" />
            <p className="text-white text-base ml-3 ">Tasks</p>
          </div>
        )}
      </div>

      {/* Teams */}
      {isActive? 
      <div className="my-8">
        <h3 className="text-[#9095A0] mb-5 text-left text-sm">Đội ngũ</h3>
        <div className="flex items-center justify-center my-5">
          <div className="h-3 w-3 rounded-full hover:cursor-pointer bg-[#10A37F] mr-3"></div>
        </div>
        <div className="flex items-center justify-center my-5">
          <div className="h-3 w-3 rounded-full hover:cursor-pointer bg-[#ED7D2D] mr-3"></div>
        </div>
        <div className="flex items-center justify-center my-5">
          <div className="h-3 w-3 rounded-full hover:cursor-pointer bg-[#8353E2] mr-3"></div>
        </div>
      </div>
      :
      <div className="my-8">
        <h3 className="text-[#9095A0] mb-5 text-left">Đội ngũ</h3>
        <div className="flex items-center my-4">
          <div className="h-2 w-2 rounded-full hover:cursor-pointer bg-[#10A37F] mr-3"></div>
          <h3 className="text-white text-base">Đội ngũ 1</h3>
        </div>
        <div className="flex items-center my-4">
          <div className="h-2 w-2 rounded-full hover:cursor-pointer bg-[#ED7D2D] mr-3"></div>
          <h3 className="text-white text-base">Đội ngũ 1</h3>
        </div>
        <div className="flex items-center my-4">
          <div className="h-2 w-2 rounded-full hover:cursor-pointer bg-[#8353E2] mr-3"></div>
          <h3 className="text-white text-base">Đội ngũ 1</h3>
        </div>
      </div>
      }
      
    </>
  );
};

export default NavEmployee;
