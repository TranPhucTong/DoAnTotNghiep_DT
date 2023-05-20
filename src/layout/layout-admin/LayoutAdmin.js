import React, { useState } from "react";
import HeaderAdmin from "./header/HeaderAdmin";
import FooterAdmin from "./footer/FooterAdmin";
import NavAdmin from "./nav/NavAdmin";

const LayoutAdmin = (props) => {
  const [open, setOpen] = useState(true);
  function handleButtonClick() {
    setOpen(!open);
  }
  return (
    <div>
      <HeaderAdmin onButtonClick={handleButtonClick} />
      <div className="flex mt-[90px] text-left ">
        <div
          className={`bg-white h-screen p-5 ${
            open ? "w-[360px]" : "w-20"
          } duration-300 relative`}
        >
          <NavAdmin open={open} />
        </div>
        <div className="p-6 w-full bg-[#f7f7fa] min-h-screen-except-header">
          {props.children}
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
