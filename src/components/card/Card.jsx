import React from "react";

const Card = ({ children, active }) => {
  return (
    <div
      className={`transition-all duration-300  cursor-pointer relative my-10 w-full shadow-md border-2 rounded-lg min-h-[80px] px-8 py-4 ${
        active ? "min-h-[400px]" : ""
      } `}
    >
      {children}
    </div>
  );
};

export default Card;
