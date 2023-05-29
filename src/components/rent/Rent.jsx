import React from "react";
import RangeSlider from "../range-slider/RangeSlider";

const Rent = ({ rentFrom, rentTo, onChangeFrom, onChangeTo }) => {
  return (
    <div className="my-10">
      <div className="flex justify-center items-center">
        <div className="flex-1 flex justify-center items-center">
          <RangeSlider
            className="w-full h-2"
            defaultValue={[0, 100]}
            value={[rentFrom ? rentFrom : 0, rentTo ? rentTo : 100]}
            onChangeFrom={onChangeFrom}
            onChangeTo={onChangeTo}
          />
        </div>
      </div>
        <div className="w-full flex items-center mt-5">
        <h4 className="text-black font-bold text-base text-left mr-2">Giá: </h4>
          <p className="text-base font-bold text-[#00BDD6]">
            ${rentFrom} - ${rentTo}
          </p>
        </div>
    </div>
  );
};

export default Rent;
