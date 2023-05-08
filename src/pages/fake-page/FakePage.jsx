import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  isLoggedIn,
  selectCustomer,
} from "../../reducers/slices/customerSlice";
import configRoutes from "../../config/configRouter";
import { getCustomer } from "../../reducers/actions/customerAction";
import { getContracts } from "../../reducers/actions/contractAction";

const FakePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector(selectCustomer);
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
