import React from "react";
import "./ButtonAuthen.scss";
import Loading from "../../loading/Loading";

const ButtonAuthen = (props) => {
  let inputButtonSkip = "";
  if (props.isSkip) {
    inputButtonSkip += "inputButtonSkip";
  }
  return (
    <button
      type="button"
      className={`login_btn ${inputButtonSkip} ${
        props.isLoading && "opacity-50"
      }`}
      onClick={props.onClick}
      disabled={props.isLoading}
    >
      {props.isLoading ? <Loading /> : <>{props.content}</>}
    </button>
  );
};

export default ButtonAuthen;
