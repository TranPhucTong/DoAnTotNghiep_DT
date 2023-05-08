import React from "react";
const activeStyle = "text-blue-500 font-bold";

const ItemNav = ({ active, value, label, onClick }) => {
  return (
    <li
      onClick={() => onClick(value)}
      className={`group py-6 relative flex-1  cursor-pointer hover:text-blue-500 hover:font-bold transition-all ${
        active === value ? activeStyle : ""
      }`}
    >
      {label}
      <span
        className={`group-hover:w-full transition-all duration-500 absolute bottom-0 left-0 h-1 bg-blue-500 ${
          active === value ? "w-full" : " w-0 "
        }`}
      ></span>
    </li>
  );
};

export default ItemNav;
