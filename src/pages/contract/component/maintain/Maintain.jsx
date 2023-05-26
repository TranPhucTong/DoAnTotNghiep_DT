import React from "react";
const Maintain = ({ onChangeEndDate, onChangeBudget }) => {
  return (
    <div>
      <div className="">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Giá thuê bạn mong muốn
          </label>
          <input
            className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={"number"}
            placeholder={"50"}
            onChange={(e) => onChangeBudget(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Ngày kết thúc
          </label>
          <div className="flex justify-center items-center">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              onChange={(e) => onChangeEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintain;
