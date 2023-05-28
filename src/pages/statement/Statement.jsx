import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import ListStatement from "./list-statement/ListStatement";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectContract } from "../../reducers/slices/contractSlice";
import statusContent from "../../utils/statusContent";
import { getContractById } from "../../reducers/actions/contractAction";

const Statement = () => {
  const contract = useSelector(selectContract);
  const {statements} = contract
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!contract) {
      dispatch(getContractById(id))
    }
  }, []);

  const turnRightPageHandle = () => {
    navigate(-1);
  };
  if(!contract) return (<div>Loading...</div>)
  return (
    
    <div className="p-20">
      <div className="flex justify-between text-slate-600">
        <div
          onClick={turnRightPageHandle}
          className="flex justify-center items-center hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
          <p className="ml-4">Trở lại</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="uppercase mr-2 border-r-2 pr-2">Mã đơn hàng {id}</p>
          <p className="text-green-500 font-bold">{statusContent(contract.status)}</p>
        </div>
      </div>
      <div className="mt-24">
        <ListStatement listStatement={statements} endStatement={statements.length} />
      </div>
    </div>
  );
};

export default Statement;
