import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChevronDown,
  faPeopleGroup,
  faUsersViewfinder,
  faPersonCircleQuestion,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavAdmin = (props) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpenTeam, setSubMenuOpenTeam] = useState(false);
  const [submenuOpenCustomer, setSubMenuOpenCustomer] = useState(false);
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (title) => {
    if (title === "Tạo nhân viên mới") {
      navigate("/admin/create-employees");
    } else if (title === "Danh sách nhân viên") {
      navigate("/admin/list-employees");
    } else if (title === "Tạo nhóm làm việc") {
      navigate("/admin/create-team");
    } else if (title === "Quản lý nhóm") {
      navigate("/admin/list-team");
    } else if (title === "Yêu cầu của khách hàng") {
      navigate("/admin/list-order");
    }
    setFocus(true);
  };
  const Menus = [
    {
      title: "Nhân viên",
      submenu: true,
      submenuItems: [{ title: "Tạo nhân viên mới" }, { title: "Danh sách nhân viên" }],
    },
  ];
  const MenusTeam = [
    {
      title: "Nhóm làm việc",
      submenu: true,
      submenuItems: [{ title: "Tạo nhóm làm việc" }, { title: "Quản lý nhóm" }],
    },
  ];
  const CustomerRequest = [
    {
      title: "Khách hàng",
      submenu: true,
      submenuItems: [{ title: "Yêu cầu của khách hàng" }],
    },
  ];
  return (
    <div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <li
              onClick={() => setSubmenuOpen(!submenuOpen)}
              key={index}
              className={`text-gray-600 text-sm flex items-center ease-linear transition-colors duration-200 gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md`}
            >
              <span className="text-2xl block float-left">
                <FontAwesomeIcon icon={faUserTie} />
              </span>
              <span
                className={`text-xl font-semibold flex-1 ${
                  !props.open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenu && (
                <FontAwesomeIcon
                  className={`${submenuOpen && "rotate-180"} ${
                    !props.open && "hidden"
                  }`}
                  icon={faChevronDown}
                />
              )}
            </li>
            {menu.submenu && submenuOpen && props.open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    tabIndex="0"
                    key={index}
                    onClick={() => handleMenuClick(submenuItem.title)}
                    className="text-gray-600 w-full bg-white px-5 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 transition-all ease-in duration-200 hover:text-gray-600 rounded-md focus:outline-none focus:bg-blue-500 focus:text-white"
                  >
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
      <ul className="pt-2">
        {MenusTeam.map((menu, index) => (
          <>
            <li
              onClick={() => setSubMenuOpenTeam(!submenuOpenTeam)}
              key={index}
              className={`text-gray-600 text-sm flex items-center ease-linear transition-colors duration-200 gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md`}
            >
              <span className="text-2xl block float-left">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </span>
              <span
                className={`text-xl font-semibold flex-1 ${
                  !props.open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenu && (
                <FontAwesomeIcon
                  className={`${submenuOpenTeam && "rotate-180"} ${
                    !props.open && "hidden"
                  }`}
                  icon={faChevronDown}
                />
              )}
            </li>
            {menu.submenu && submenuOpenTeam && props.open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    tabIndex="0"
                    key={index}
                    onClick={() => handleMenuClick(submenuItem.title)}
                    className="text-gray-600 w-full bg-white px-5 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 transition-all ease-in duration-200 hover:text-gray-600 rounded-md focus:outline-none focus:bg-blue-500 focus:text-white"
                  >
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
      <ul className="pt-2">
        {CustomerRequest.map((menu, index) => (
          <>
            <li
              onClick={() => setSubMenuOpenCustomer(!submenuOpenCustomer)}
              key={index}
              className={`text-gray-600 text-sm flex items-center ease-linear transition-colors duration-200 gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md`}
            >
              <span className="text-2xl block float-left">
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
              </span>
              <span
                className={`text-xl font-semibold flex-1 ${
                  !props.open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenu && (
                <FontAwesomeIcon
                  className={`${submenuOpenCustomer && "rotate-180"} ${
                    !props.open && "hidden"
                  }`}
                  icon={faChevronDown}
                />
              )}
            </li>
            {menu.submenu && submenuOpenCustomer && props.open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    tabIndex="0"
                    key={index}
                    onClick={() => handleMenuClick(submenuItem.title)}
                    className="text-gray-600 w-full bg-white px-5 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 transition-all ease-in duration-200 hover:text-gray-600 rounded-md focus:outline-none focus:bg-blue-500 focus:text-white"
                  >
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default NavAdmin;
