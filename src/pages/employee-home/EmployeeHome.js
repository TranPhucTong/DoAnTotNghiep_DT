import React from "react";
import ListField from "../../components/list-field/ListField";

const EmployeeHome = () => {
  return (
    <div className="h-full w-full py-10 ">
      {/* Title */}
      <h2 className="text-left text-xl font-medium text-[#171A1F] px-10 mb-6">
        Home
      </h2>
      {/* Field */}
      <div className="bg-[#F9FAFB] px-10 py-4">
        <h3 className="text-left text-[#323842]">Mảng lập trình</h3>
      </div>
      <div className="my-10 mx-[5%]">
        <ListField />
      </div>
    </div>
  );
};

export default EmployeeHome;
