import React from "react";
import loginImg from "../../assests/imgs/login_admin.png";
import loginDuoi from "../../assests/imgs/admin_login_duoi.png";
import loginTren from "../../assests/imgs/admin_login_tren.png";
const AdminLogin = () => {
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
            <input className="px-3 w-[367px] h-8 rounded-3xl bg-transparent border-[1px] border-[#656ED3]" />
          </div>
          <div className="flex flex-col items-start mb-6">
            <label className="mb-3 text-xl">Mật khẩu:</label>
            <input
              type="password"
              className="px-3 w-[367px] h-8 rounded-3xl bg-transparent border-[1px] border-[#656ED3]"
            />
          </div>
          <div className="mt-6">
            <button className="w-[365px] rounded-3xl bg-[#656ED3] py-2 text-[#AFB3FFC9]">
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
