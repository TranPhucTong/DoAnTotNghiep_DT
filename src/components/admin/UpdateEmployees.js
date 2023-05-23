import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updateEmployee } from "../../reducers/slices/updateEmployeeSlice";
import employeeApii from "../../api/employeeApii";
import { useNavigate } from "react-router-dom";
import teamWorkApi from "../../api/teamWorkApi";
import { toast } from "react-toastify";

const UpdateEmployees = () => {
  const transiData = useSelector(updateEmployee);
  // const [idEm, setIdEm] = useState(transiData.id);
  const idEm = transiData.id;
  const [name, setName] = useState(transiData.name);
  const [email, setEmail] = useState(transiData.email);
  const [gender, setGender] = useState(transiData.gender);
  const [birthday, setBirthday] = useState(
    new Date(transiData.birthday).toLocaleDateString("en-CA")
  );

  // const [position, setPosition] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (name !== "" && email !== "" && gender !== "" && birthday !== "") {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [name, email, gender, birthday]);

  const clickUpdateEmployee = async () => {
    const employeeUpdate = {
      employeeId: idEm,
      name: name,
      gender: gender,
      birthDate: birthday,
      email: email,
    };
    try {
      const response = await employeeApii.updateEmployee(employeeUpdate);
      console.log(response);
      console.log(employeeUpdate.id);
      navigate("/admin/list-employees");
      toast.success("Cập nhật thành công")
    } catch {
      toast.error("Cập nhật thất bại")
    }
  };

  return (
    <div className="p-6 w-full  min-h-screen-except-header">
      <span className="text-2xl font-extrabold text-blue-500">
        Cập nhật nhân viên
      </span>
      <div className="mt-6 bg-white shadow-xl rounded-lg p-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {/* name  */}
          <div className="h-[2.875rem] relative flex items-center border border-solid focus-within:border-blue-500 transition-all ease-linear  border-gray-200 rounded-lg">
            <label className="absolute -top-1/4  left-2 px-2 bg-white text-blue-500 text-sm">
              Họ tên
            </label>
            <input
              className="text-sm  w-full border border-none outline-none px-4 py-2"
              type="text"
              formControlName="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Gender  */}
          <div className="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Giới tính
            </label>
            <select
              className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
              formControlName="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Vui lòng chọn</option>
              <option value="Nam">Nam</option>
              <option value="Nu">Nữ</option>
            </select>
          </div>

          {/* BirthDay  */}
          <div className="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Ngày sinh
            </label>
            <input
              className="text-sm  w-full border border-none outline-none px-4 py-2"
              type="date"
              formControlName="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          {/* email  */}
          <div className="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Email
            </label>
            <input
              className="text-sm  w-full border border-none outline-none px-4 py-2"
              type="text"
              formControlName="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Team */}
          {/* <div className="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Chức vụ
            </label>
            <select
              className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
              formControlName="gender"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Vui lòng chọn</option>
              <option value="leader">Trưởng nhóm</option>
              <option value="coder">Nhân viên lập trình</option>
            </select>
          </div> */}
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={clickUpdateEmployee}
            type="submit"
            className={`bg-blue-500 px-8 py-2 text-white font-semibold rounded-lg mt-12 hover:bg-blue-600 transition-colors ease-linear 
          ${isFormComplete ? "" : "opacity-50 pointer-events-none"}`}
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployees;
