import React from "react";

const LayoutAdmin = (props) => {
  return (
    <div className="w-full h-full ">
      <div className="w-2/5 bg-[#4F46E5] "></div>
      <div className="w-3/5">{props.children}</div>
    </div>
  );
};

export default LayoutAdmin;
