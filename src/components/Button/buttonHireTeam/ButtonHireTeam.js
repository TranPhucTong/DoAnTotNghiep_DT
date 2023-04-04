import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

const ButtonHireTeam = (props, { onclick, disabled }) => {
  <div>
    {props.isNext ? (
      <button
        type="submit"
        disabled={disabled}
        className="border-[1px] cursor-pointer shadow-xl px-10 py-2 hover:bg-blue-500 transition-colors duration-300 border-gray-400 bg-[#00bdd6] text-white rounded-xl "
        onclick={onclick}
      >
        Tiếp tục
        <FontAwesomeIcon className="ml-6 " icon={faRightLong} />
      </button>
    ) : (
      <button
        type="submit"
        className="border-[1px] cursor-pointer shadow-xl px-10 py-2 hover:bg-gray-500 transition-colors duration-300 border-gray-400 bg-gray-400 text-white rounded-xl "
        onClick={onclick}
      >
        <FontAwesomeIcon className="mr-6" icon={faLeftLong} />
        Quay lại
      </button>
    )}
  </div>;
};

export default ButtonHireTeam;
