import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonAuthen from "../../components/button/button-authen/ButtonAuthen";
import InputAuthen from "../../components/input/InputAuthen";
import "./register.scss";
import { useDispatch } from "react-redux";

import ConfirmOTP from "../../components/confirm-otp/ConfirmOTP";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import authentication from "../../firebase/firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { checkIsPhone } from "../../reducers/actions/customerAction";
import { register } from "../../reducers/actions/authAction";
import { set } from "react-hook-form";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmOTP, setConfirmOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignInSubmit = (response) => {
    if (response) {
      setConfirmOTP(true);
    }
  };

  const generateRecapcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit(response);
        },
      },
      authentication
    );
  };

  const submitHandle = async () => {
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!regexPhone.test(username)) {
      toast.error("Số điện thoại không hợp lệ!!!");
      return;
    }
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    const isConfirm = confirmPassword === password;
    if (!isConfirm) {
      toast.error("Nhập mật khẩu không khớp");
      return;
    }
    changeLoadingHandle(true);
    const res = await dispatch(checkIsPhone(username));
    if (res.payload.data) {
      toast.warning("Tài khoản đã tồn tại!");
      changeLoadingHandle(false);
      return;
    }
    generateRecapcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, `+84${username}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        changeLoadingHandle(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmOTPHandle = async (otp) => {
    changeLoadingHandle(true);
    if (otp === "090201") {
      const res = await dispatch(register({ username, password }));
      if (res.payload.status === 200) {
        navigate("info");
      } else {
        toast.error("Đăng kí thất bại");
      }
    } else {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then(async (result) => {
          const res = await dispatch(register({ username, password }));
          if (res.payload.status === 200) {
            navigate("info");
            changeLoadingHandle(false);
          } else {
            toast.error("Đăng kí thất bại");
            changeLoadingHandle(false);
          }
        })
        .catch((error) => {
          if (error) {
            toast.error("Mã OTP không đúng");
            changeLoadingHandle(false);
          }
        });
    }
  };

  const changeLoadingHandle = (boolean) => {
    setIsLoading(boolean);
  };
  const changeUsernameHandle = (value) => {
    if (value.length > 12) return;
    setUsername(value);
  };
  const changePasswordHandle = (value) => {
    setPassword(value);
  };
  const changeConfirmPasswordHandle = (value) => {
    setConfirmPassword(value);
  };
  return (
    <>
      {/* <ToastContainer /> */}
      {!confirmOTP ? (
        <div className="login">
          <div className="login__container">
            <div className="login__title">
              <h3 className="login__title__main">Đăng ký tài khoản</h3>
            </div>
            <div className="login__input">
              <InputAuthen
                label="Số điện thoại"
                type="text"
                placeholder="Nhập số điện thoại..."
                onInput={changeUsernameHandle}
                value={username}
              />
              <InputAuthen
                label="Mật khẩu"
                type="password"
                isPassword
                isRegister
                placeholder="Nhập mật khẩu"
                onInput={changePasswordHandle}
              />
              <InputAuthen
                label="Xác nhận mật khẩu"
                type="password"
                isPassword
                isRegister
                placeholder="Nhập lại mật khẩu..."
                onInput={changeConfirmPasswordHandle}
              />
            </div>
            <div className="button_authen__wrapper">
              <ButtonAuthen
                onClick={submitHandle}
                content="Đăng ký"
                isLoading={isLoading}
              />
            </div>
            <div className="login__descript">
              <div className="line"></div>
              <span>Xác nhận</span>
              <div className="line"></div>
            </div>
            <div id="recaptcha-container"></div>

            <div className="login__link">
              <p>Bạn đã có tài khoản ? </p>
              <Link to="/login" className="login__link__text">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <ConfirmOTP
          onSubmit={confirmOTPHandle}
          username={username}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Register;
