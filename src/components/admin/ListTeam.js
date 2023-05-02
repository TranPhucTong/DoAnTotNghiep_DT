import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faUserFriends,
  faGroupArrowsRotate,
  faChevronDown,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ListTeam = () => {
  const [type, setType] = useState();
  const navigate = useNavigate();
  const addTeam = () => {
    navigate("/admin/create-team");
  };

  const nameTeams = [
    {
      id: 1,
      name: "Legato Web",
    },
    {
      id: 2,
      name: "Legato IoT",
    },
    {
      id: 3,
      name: "Legato App",
    },
    {
      id: 4,
      name: "Legato AI",
    },
    {
      id: 5,
      name: "Legato IT",
    },
  ];
  return (
    <div class="py-6 px-8">
      <div class="flex justify-between">
        <h1 class="font-medium text-[1.2rem]">Team : {type}</h1>
        <p class="text-[0.9rem] text-gray-500 font-medium">
          <span class="text-black">Dashboard</span> / Team{" "}
        </p>
      </div>
      <div class="mt-16 py-6 px-4 flex items-center bg-white">
        <div class="flex w-[30%] space-x-4">
          <div class="relative w-full flex items-center">
            <select
              className="px-4 py-2 focus-within:border-blue-500 focus-within:text-blue-500 font-bold transition-all duration-200 ease-linear w-full border-solid m-0 rounded-lg outline-none border-[2px] border-gray-300"
              name=""
              id=""
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option>Xin mời chọn nhóm</option>
              {nameTeams.map((nameTeam, index) => (
                <option key={index}>{nameTeam.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-6 border-b border-b-gray-200 items-center">
        <div class="flex space-x-9 px-4">
          <p
            class="font-bold py-3 cursor-pointer
           border-b-2 border-blue-600 text-blue-600"
          >
            Nhân viên trong nhóm
          </p>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faEdit}
            class="text-sm w-5 text-blue-700 hover:text-blue-800 mr-8 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrash}
            class="text-xl w-5 text-red-600 hover:text-red-700 mr-8 cursor-pointer"
          />
          <a
            onClick={addTeam}
            class="py-4 px-6 text-white bg-blue-500 flex rounded-lg font-bold cursor-pointer hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faPlus} class="text-white w-5 mr-2" />
            Tạo team mới
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListTeam;
