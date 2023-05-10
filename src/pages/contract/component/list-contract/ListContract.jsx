import React, { useState } from "react";
import ItemContract from "../item-contract/ItemContract";
import { useSelector } from "react-redux";
import { listContractStore, listFilterContractStore } from "../../../../reducers/slices/contractSlice";
import Modal from "../../../../components/modal/Modal";
import noneContract from "../../../../assests/imgs/none-contract.png";

const ListContract = () => {
  let listContract = useSelector(listContractStore);
  const listFilterContract = useSelector(listFilterContractStore);
  if(listFilterContract){
    listContract = listFilterContract;
  }
  const [open,setOpen] = useState(false);
  const openModalHandle = (open)=> setOpen(open);
  return (
    <div>
      <Modal open={open} onOpen={openModalHandle} />

      {
      listContract.length ?
      listContract.map((item) => (
        <ItemContract onOpen={openModalHandle} item={item} key={item._id} />
      ))
    :
    <div className="mt-10">
      <h1 className="text-blue-500 font-bold text-2xl">
        Bạn chưa có hợp đồng nào
      </h1>
    <img src = {noneContract} alt = "none contract" className = "w-1/2 mx-auto"/>
    </div>}
    </div>
  );
};

export default ListContract;
