import React from "react";

const ButtonContract = ({ onClick, content }) => {
  return (
    <button
      onClick={onClick}
      className="max-w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded"
    >
      {content}
    </button>
  );
};

export default ButtonContract;
