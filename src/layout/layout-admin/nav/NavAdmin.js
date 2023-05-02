import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChevronDown,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavAdmin = (props) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpenTeam, setSubMenuOpenTeam] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (title) => {
    if (title === "Creat Employee") {
      navigate("/admin/create-employees");
    } else if (title === "List Employees") {
      navigate("/admin/list-employees");
    } else if (title === "Creat Team") {
      navigate("/admin/create-team");
    } else if (title === "List Team") {
      navigate("/admin/list-team");
    }
  };
  const Menus = [
    {
      title: "Employees",
      submenu: true,
      submenuItems: [{ title: "Creat Employee" }, { title: "List Employees" }],
    },
  ];
  const MenusTeam = [
    {
      title: "Team",
      submenu: true,
      submenuItems: [{ title: "Creat Team" }, { title: "List Team" }],
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
    </div>
  );
};

export default NavAdmin;
