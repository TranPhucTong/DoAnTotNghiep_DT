import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ButtonHire = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 transition-all duration-1000 ease-in-out hover:bg-[#10a37f]  hover:motion-safe:scale-110 text-white font-bold py-4 px-4 rounded-xl inline-flex items-center"
    >
      <span className="mr-2">{text}</span>
      <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
    </button>
  );
};

export default ButtonHire;
