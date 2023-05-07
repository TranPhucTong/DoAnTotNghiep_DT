import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ButtonAuthen from "../../components/button/button-authen/ButtonAuthen";
import InputAuthen from "../../components/input/InputAuthen";
import "./login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authApi from "../../api/authApi";
import { login } from "../../reducers/actions/authAction";
import { selectCustomer } from "../../reducers/slices/customerSlice";
import configRoutes from "../../config/configRouter";
import { getCustomer } from "../../reducers/actions/customerAction";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector(selectCustomer);
  const accessToken = localStorage.getItem("access_token");
  useEffect(() => {
    if (customer) {
      navigate(configRoutes.home);
      return;
    }
    if (accessToken) {
      dispatch(getCustomer());
      customer && navigate(configRoutes.home);
      return;
    }
  }, []);

  const submitHandle = async () => {
    const res = await dispatch(login({ username, password }));
    if (res.payload.status === 201) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    if (res.payload.status === 402) {
      toast.error("Số điện thoại không tồn tại. Vui lòng đăng nhập lại!!!");
    }
    if (res.payload.status === 401) {
      toast.error("Mật khẩu không chính xác. Vui lòng đăng nhập lại!!!");
    }
  };

  const changeUsernameHandle = (value) => {
    setUsername(value);
  };
  const changePasswordHandle = (value) => {
    setPassword(value);
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">
          <h3 className="login__title__main">Đăng nhập để tiếp tục</h3>
        </div>
        <div className="login__input">
          <InputAuthen
            label="Số điện thoại"
            type="text"
            placeholder="Nhập số điện thoại"
            onInput={changeUsernameHandle}
          />
          <InputAuthen
            label="Mật khẩu"
            type="password"
            isPassword
            placeholder="Nhập mật khẩu"
            onInput={changePasswordHandle}
          />
          <div className="combo-check">
            <div className="checkbox-div">
              <input className="checkbox" type="checkbox"></input>
            </div>

            <label className="remember">Nhớ mật khẩu</label>
          </div>
        </div>
        <div className="button_authen__wrapper">
          <ButtonAuthen content="Đăng nhập" onClick={submitHandle} />
        </div>
        <ToastContainer />

        <div className="login__link">
          <p>Bạn chưa có tài khoản ? </p>
          <Link to="/register" className="login__link__text">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
