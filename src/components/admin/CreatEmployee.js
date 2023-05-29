import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import employeeApii from "../../api/employeeApii";
import { toast } from "react-toastify";

const CreatEmployee = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isCompleteCre, setIsCompleteCre] = useState(false);
  const [isUname, setIsUname] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassWord] = useState("");
  // const [type, setType] = useState("");
  // const [position, setPosition] = useState("");
  const handleUname = () => {
    setIsUname(true);
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (name !== "" && email !== "" && gender !== "" && birthday !== "") {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
    if (phone !== "" && password !== "") {
      setIsCompleteCre(true);
    } else {
      setIsCompleteCre(false);
    }
  }, [name, email, gender, birthday, phone, password]);
  const navigate = useNavigate();
  const clickCreateEmployee = async () => {
    const employee = {
      email: email,
      password: password,
      name: name,
      phone: phone,
      birthDate: birthday,
      gender: gender,
      type: "team",
    };

    try {
      const response = await employeeApii.createEmployee(employee);
      console.log(response);
      console.log(name);
      navigate("/admin/list-employees");
      toast.success("Tạo nhân viên thành công");
    } catch (error) {
      toast.error("Trùng số điện thoại. Vui lòng nhập lại!!!");
      console.log(error);
    }
  };
  return (
    <div className="p-6 w-full  min-h-screen-except-header">
      <h4
        className={`font-medium text-xl md:text-2xl ${
          !isUname ? "text-center" : " "
        }`}
      >
        <span className="text-2xl font-extrabold text-blue-500">
          Tạo nhân viên mới
        </span>
      </h4>
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

          {/* số điện thoại  */}
          <div className="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Số điện thoại
            </label>
            <input
              className="text-sm  w-full border border-none outline-none px-4 py-2"
              type="text"
              formControlName="email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={clickCreateEmployee}
            type="submit"
            className={`bg-blue-500 px-8 py-2 text-white font-semibold rounded-lg mt-12 hover:bg-blue-600 transition-colors ease-linear 
          ${isFormComplete ? "" : "opacity-50 pointer-events-none"}`}
          >
            Hoàn thành
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatEmployee;
