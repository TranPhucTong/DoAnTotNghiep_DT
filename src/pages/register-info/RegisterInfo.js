import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonAuthen from "../../components/button/ButtonAuthen";
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
  const [gmail, setGmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sCustomer = useSelector(selectCustomer);

  const submitHandle = async () => {
    console.log(sCustomer);
    const info = {
      phone: sCustomer.customer.phone,
      name,
      birthDate: birthDay,
      gender,
      gmail,
    };
    const res = await dispatch(registerInfo(info));
    console.log(res);
    if (res.payload.status === 201) {
      // Đăng kí thành công
      navigate("/");
    } else {
      // Đăng kí thất bại
      toast.error("Đăng kí thất bại!!");
    }
  };

  const changeNameHandle = (value) => {
    setName(value);
  };
  const changeBirthDayHandle = (value) => {
    setBirthDay(value);
  };

  const changeGmailHandle = (value) => {
    setGmail(value);
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
            label="Gmail"
            type="text"
            placeholder="Nhập gmail"
            onInput={changeGmailHandle}
          />

          <div className="button_authen__wrapper">
            <ButtonAuthen content="Cập nhật" onClick={submitHandle} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterInfo;
