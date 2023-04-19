import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const CreatEmployee = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [team, setTeam] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isCompleteCre, setIsCompleteCre] = useState(false);
  const [isUname, setIsUname] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassWord] = useState("");
  const [type, setType] = useState("");
  const handleUname = () => {
    setIsUname(true);
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      gender !== "" &&
      birthday !== "" &&
      team !== ""
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
    if (phone !== "" && type !== "" && password !== "") {
      setIsCompleteCre(true);
    } else {
      setIsCompleteCre(false);
    }
  }, [name, email, gender, birthday, team, phone, type, password]);
  const navigate = useNavigate();
  const Click = () => {
    alert("tạo thành công!");
    navigate("/admin/list-employees");
  };
  return (
    <div class="p-6 w-full  min-h-screen-except-header">
      <h4
        class={`font-medium text-xl md:text-2xl ${
          !isUname ? "text-center" : " "
        }`}
      >
        <span>Create Employee</span>
      </h4>
      {isUname ? (
        <form class="mt-6 bg-white shadow-xl rounded-lg p-8 pt-10">
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
                <option value="male">Male</option>
                <option value="female">Female</option>
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

            {/* gmail  */}
            <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
              <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
                Gmail
              </label>
              <input
                className="text-sm  w-full border border-none outline-none px-4 py-2"
                type="text"
                formControlName="gmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Team */}
            <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
              <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
                Nhóm làm việc
              </label>
              <select
                className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
                formControlName="gender"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              >
                <option value="">Vui lòng chọn</option>
                <option value="angular">Angular</option>
                <option value="reactJs">ReactJs</option>
                <option value="legato">Legato</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={Click}
              type="submit"
              class={`bg-blue-500 px-8 py-2 text-white font-semibold rounded-lg mt-12 hover:bg-blue-600 transition-colors ease-linear 
          ${isFormComplete ? "" : "opacity-50 pointer-events-none"}`}
            >
              Hoàn thành
            </button>
          </div>
        </form>
      ) : (
        <div className="w-full flex justify-center items-center">
          <form class="mt-6 w-[50%] bg-white shadow-xl rounded-lg p-8 pt-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Điện thoại
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="phone"
                id="phone"
                name="phone"
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
                  className="border border-gray-400 p-2 w-full pr-10"
                  type={showPassword ? "text" : "password"}
                  id="password"
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
                    className="w-6 h-6 absolute right-6 text-gray-400 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="w-6 h-6 absolute right-6 text-gray-400 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                )}
              </div>
            </div>
            <div className="mb-4">
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
            </div>
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
