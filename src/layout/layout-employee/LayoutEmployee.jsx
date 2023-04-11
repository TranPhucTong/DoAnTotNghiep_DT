import React, { useState } from "react";
import NavEmployee from "./nav/NavEmployee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
const LayoutEmployee = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const changeActiveHandle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="w-full h-screen flex">
      <div
        className={`${
          isActive ? "w-[6%]" : " w-3/12"
        } bg-[#4F46E5] h-full px-5 py-10 transition-all group`}
      >
        {isActive && (
          <FontAwesomeIcon onClick={changeActiveHandle} icon={faBarsProgress} className="text-white cursor-pointer -translate-y-0 opacity-0 
          group-hover:-translate-y-3 group-hover:opacity-100 transition-all
          " />
        )}
        <NavEmployee isActive={isActive} onChangeActive={changeActiveHandle} />
      </div>
      <div className="flex-1 h-screen overflow-y-scroll py-10 ">{children}</div>
    </div>
  );
};

export default LayoutEmployee;
