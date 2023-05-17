import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ButtonAuthen from "../../components/button/button-authen/ButtonAuthen";
import InputAuthen from "../../components/input/InputAuthen";
import "./login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../reducers/actions/authAction";
import { selectCustomer } from "../../reducers/slices/customerSlice";
import configRoutes from "../../config/configRouter";
import { getCustomer } from "../../reducers/actions/customerAction";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!regexPhone.test(username)) {
      toast.error("Số điện thoại không hợp lệ!!!");
      return;
    }
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự!!!");
      return;
    }
    changeLoadingHandle(true);
    const res = await dispatch(login({ username, password }));
    console.log(res);
    if (res.payload.status === 201) {
      setTimeout(() => {
        navigate(-1);
      }, 500);
    }
    if (res.payload.status === 402) {
      toast.error("Số điện thoại này chưa được đăng ký!!!");
    }
    if (res.payload.status === 400) {
      toast.error("Mật khẩu không chính xác.");
    }
    changeLoadingHandle(false);
  };

  const changeUsernameHandle = (value) => {
    if (value.length > 12) return;
    setUsername(value);
  };
  const changePasswordHandle = (value) => {
    setPassword(value);
  };
  const changeLoadingHandle = (value) => {
    setIsLoading(value);
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
            value={username}
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
          <ButtonAuthen
            content="Đăng nhập"
            onClick={submitHandle}
            isLoading={isLoading}
          />
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
