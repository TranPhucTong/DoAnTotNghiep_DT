import React from "react";
import ItemContract from "../item-contract/ItemContract";
import { useSelector } from "react-redux";
import { listContractStore } from "../../../../reducers/slices/contractSlice";


const ListContract = () => {
  const listContract = useSelector(listContractStore);

  return (
    <div>
      {listContract.map((item) => (
        <ItemContract item={item} key={item._id} />
      ))}
    </div>
  );
};

export default ListContract;
