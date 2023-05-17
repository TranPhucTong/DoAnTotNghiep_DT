import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonAuthen from "../../components/button/button-authen/ButtonAuthen";
import InputAuthen from "../../components/input/InputAuthen";
import "./register-info.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomer } from "../../reducers/slices/customerSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerInfo } from "../../reducers/actions/authAction";

const RegisterInfo = (props) => {
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sCustomer = useSelector(selectCustomer);

  const submitHandle = async () => {
    if (name.length < 2) {
      toast.error("Họ tên ít nhất 2 kí tự!!");
      return;
    }
    // Valid birthDay > 18
    if (birthDay === "") {
      toast.error("Ngày sinh không được để trống!!");
      return;
    }
    const today = new Date();
    const birthDate = new Date(birthDay);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      toast.error("Bạn chưa đủ 18 tuổi!!");
      return;
    }
    // valid email
    if (email === "") {
      toast.error("Email không được để trống!!");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Email không hợp lệ!!");
      return;
    }

    const info = {
      phone: sCustomer.phone,
      name,
      birthDate: birthDay,
      gender,
      email,
    };
    changeLoadingHandle(true);
    const res = await dispatch(registerInfo(info));
    if (res.payload.status === 201) {
      // Đăng kí thành công
      navigate("/");
      changeLoadingHandle(false);
    } else {
      // Đăng kí thất bại
      toast.error("Đăng kí thất bại!!");
      changeLoadingHandle(false);
    }
  };

  const changeNameHandle = (value) => {
    setName(value);
  };
  const changeBirthDayHandle = (value) => {
    setBirthDay(value);
  };

  const changeEmailHandle = (value) => {
    setEmail(value);
  };

  const changeLoadingHandle = (value) => {
    setIsLoading(value);
  };

  return (
    <div className="login">
      <ToastContainer />
      <div className="login__container">
        <div className="login__title">
          <h3 className="login__title__main">Thông tin tài khoản</h3>
        </div>
        <div className="login__input">
          <InputAuthen
            label="Họ và tên"
            type="text"
            placeholder="Nhập vào họ tên"
            onInput={changeNameHandle}
          />

          <InputAuthen
            label="Ngày sinh"
            type="text"
            isDateTime
            onInput={changeBirthDayHandle}
          />

          <div className="input-authen">
            <label className="input-authen__label input-authen__gender">
              Giới tính
            </label>
            <select
              className="input-authen__input"
              onChange={(option) => setGender(option.target.value)}
              name="gender"
            >
              <option value="">Chọn giới tính</option>
              <option value="female">Nữ</option>
              <option value="male">Nam</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <InputAuthen
            label="Email"
            type="text"
            placeholder="Nhập email"
            onInput={changeEmailHandle}
          />

          <div className="button_authen__wrapper">
            <ButtonAuthen
              content="Cập nhật"
              onClick={submitHandle}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterInfo;
