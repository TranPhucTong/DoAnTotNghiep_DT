import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAuthen from "../button/button-authen/ButtonAuthen";
import InputAuthen from "../input/InputAuthen";
import "./confirmOTP.scss";

const ConfirmOTP = (props) => {
  const username = props.username;

  const [OTP, setOTP] = useState("");
  const changeOTPHandle = (value) => {
    if (value.length > 6) return;
    setOTP(value);
  };
  const submitHandle = () => {
    props.onSubmit(OTP);
  };
  return (
    <div className="confirmOTP">
      <div className="confirmOTP__container">
        <div className="confirmOTP__title">
          <h3 className="confirmOTP__title__main">Xác nhận mã OTP</h3>
          <p className="confirmOTP__title__sub">
            Mã xác thực đã được gửi về số điện thoại {username}. Vui lòng xác
            thực để tiếp tục.
          </p>
        </div>
        <div className="confirmOTP__input">
          <InputAuthen
            label="Mã xác thực"
            type="text"
            placeholder="Nhập mã OTP"
            onInput={changeOTPHandle}
            value={OTP}
          />
        </div>

        <div className="button_authen__wrapper">
          <ButtonAuthen
            onClick={submitHandle}
            content="Xác nhận"
            isLoading={props.isLoading}
          />
        </div>
        <div className="confirmOTP__resend__link">
          <p>Không nhận được mã ? </p>
          <Link to="/confirmOTP" className="confirmOTP__resend__link__text">
            Gửi lại
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ConfirmOTP;
