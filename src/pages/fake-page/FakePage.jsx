import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../../reducers/slices/customerSlice";

import { getCustomer } from "../../reducers/actions/customerAction";

const FakePage = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(isLoggedIn);
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (!isLogin) {
      if (accessToken) {
        dispatch(getCustomer());
      }
    }
  }, []);
  return <></>;
};

export default FakePage;
