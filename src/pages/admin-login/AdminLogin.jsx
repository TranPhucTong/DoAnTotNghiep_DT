import React, { useState } from "react";
import loginImg from "../../assests/imgs/login_admin.png";
import loginDuoi from "../../assests/imgs/admin_login_duoi.png";
import loginTren from "../../assests/imgs/admin_login_tren.png";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../reducers/actions/authAction";
import configRoutes from "../../config/configRouter";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AdminLogin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeUsernameHandle = (value) => {
    setUsername(value);
  };

  const changePasswordHandle = (value) => {
    setPassword(value);
  };
  const submitHandle = async () => {
    try {
      const res = await dispatch(loginAdmin({ username, password }));
      res.payload.status === 201
        ? navigate(configRoutes.employeeHome)
        : toast.error(res.payload.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-row h-screen w-100">
      <div className="w-3/5 bg-[#EBEFFF]">
        <div>
          <img src={loginDuoi} className="absolute bottom-0" />
          <img src={loginTren} className="absolute bottom-0" />
        </div>
        <div className="flex justify-center items-center h-full flex-col mr-16">
          <h2 className="text-3xl mb-8 font-bold">Login</h2>
          <div className="flex flex-col items-start mb-6">
            <label className="mb-3 text-xl">Tài khoản:</label>
            <input
              className="px-3 w-[367px] h-8 rounded-3xl bg-transparent border-[1px] border-[#656ED3]"
              onChange={(e) => changeUsernameHandle(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mb-6">
            <label className="mb-3 text-xl">Mật khẩu:</label>
            <input
              type="password"
              onChange={(e) => changePasswordHandle(e.target.value)}
              className="px-3 w-[367px] h-8 rounded-3xl bg-transparent border-[1px] border-[#656ED3]"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={submitHandle}
              className="w-[365px] rounded-3xl bg-[#656ED3] py-2 text-[#AFB3FFC9]"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-[#AFB3FF]">
        <img src={loginImg} className="-translate-x-1/2" />
      </div>
    </div>
  );
};

export default AdminLogin;
