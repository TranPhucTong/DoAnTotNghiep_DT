import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import employeeApi from "../../api/employeeApi";
import employeeApii from "../../api/employeeApii";
import { useLocation } from "react-router-dom";

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

    const response = await employeeApii.createEmployee(employee);
    console.log(response);
    console.log(name);
    navigate("/admin/list-employees");
  };
  return (
    <div class="p-6 w-full  min-h-screen-except-header">
      <h4
        class={`font-medium text-xl md:text-2xl ${
          !isUname ? "text-center" : " "
        }`}
      >
        <span className="text-2xl font-extrabold text-blue-500">
          Tạo nhân viên mới
        </span>
      </h4>
      {isUname ? (
        <div class="mt-6 bg-white shadow-xl rounded-lg p-8 pt-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {/* name  */}
            <div class="h-[2.875rem] relative flex items-center border border-solid focus-within:border-blue-500 transition-all ease-linear  border-gray-200 rounded-lg">
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
            <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
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
            <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
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
            <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
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
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={clickCreateEmployee}
              type="submit"
              class={`bg-blue-500 px-8 py-2 text-white font-semibold rounded-lg mt-12 hover:bg-blue-600 transition-colors ease-linear 
          ${isFormComplete ? "" : "opacity-50 pointer-events-none"}`}
            >
              Hoàn thành
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <form class="mt-6 w-[50%] bg-white shadow-xl rounded-lg p-8 pt-10">
            <div className="text-left mb-4 italic text-green-500 font-bold">
              *Tạo tài khoản làm việc cho nhân viên
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Tài khoản
              </label>
              <input
                className="border shadow focus:shadow-blue-500 focus:shadow-sm focus:border-blue-500 focus:outline-none ease-linear duration-100 transition-colors border-gray-400 rounded-xl p-2 w-full"
                type="phone"
                placeholder="Xin mời nhập số điện thoại"
                id="phone"
                name="phone"
                defaultValue={phone}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <div className="relative flex items-center">
                <input
                  className="border shadow focus:shadow-blue-500 focus:shadow-sm focus:border-blue-500 focus:outline-none ease-linear duration-100 transition-colors border-gray-400 rounded-xl p-2 w-full"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Nhập mật khẩu"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassWord(e.target.value);
                  }}
                  required
                />
                {showPassword ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={toggleShowPassword}
                    // Thêm lớp CSS cho biểu tượng FontAwesomeIcon
                    className={`w-6 h-6 absolute right-6 cursor-pointer ${
                      password.length > 0 ? "text-blue-500" : "text-gray-400"
                    } ${
                      password.length > 0
                        ? "focus:text-blue-500"
                        : "focus:text-gray-400"
                    }`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={toggleShowPassword}
                    // Thêm lớp CSS cho biểu tượng FontAwesomeIcon
                    className={`w-6 h-6 absolute right-6 cursor-pointer ${
                      password.length > 0 ? "text-blue-500" : "text-gray-400"
                    } ${
                      password.length > 0
                        ? "focus:text-blue-500"
                        : "focus:text-gray-400"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="role"
              >
                Loại
              </label>
              <select
                className="border border-gray-400 p-2 w-full"
                id="role"
                name="role"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                required
              >
                <option value="">Chọn loại nhân viên</option>
                <option value="employee">Nhân viên đội ngũ</option>
                <option value="freelancer">Nhân viên tự do</option>
              </select>
            </div> */}
            <div className="text-center">
              <button
                onClick={handleUname}
                class={`bg-blue-500 px-8 py-2 text-white font-semibold rounded-lg mt-12 hover:bg-blue-600 transition-colors ease-linear 
           ${isCompleteCre ? "" : "opacity-50 pointer-events-none"}`}
                type="submit"
              >
                Tạo tài khoản
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatEmployee;
