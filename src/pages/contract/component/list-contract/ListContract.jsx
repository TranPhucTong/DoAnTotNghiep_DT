import React, { useState } from "react";
import ItemContract from "../item-contract/ItemContract";
import { useDispatch, useSelector } from "react-redux";
import {
  listContractStore,
  listFilterContractStore,
} from "../../../../reducers/slices/contractSlice";
import Modal from "../../../../components/modal/Modal";
import noneContract from "../../../../assests/imgs/none-contract.png";
import { cancelContract } from "../../../../reducers/actions/contractAction";

const ListContract = ({ onOpenReview,onOpenMaintain }) => {
  let listContract = useSelector(listContractStore);
  const listFilterContract = useSelector(listFilterContractStore);
  if (listFilterContract) {
    listContract = listFilterContract;
  }
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const openModalHandle = (open) => setOpen(open);
    const cancelHandle = (contractId,reason)=>{
     dispatch(cancelContract({ contractId, reason }));
  }
  return (
    <div>
      <Modal open={open} onOpen={openModalHandle} onCancel = {cancelHandle}/>

      {listContract.length ? (
        listContract.map((item) => (
          <ItemContract
            onOpen={openModalHandle}
            onOpenMaintain = {onOpenMaintain}
            onOpenReview={onOpenReview}
            item={item}
            key={item._id}
          />
        ))
      ) : (
        <div className="mt-10">
          <h1 className="text-blue-500 font-bold text-2xl">
            Bạn chưa có hợp đồng nào
          </h1>
          <img
            src={noneContract}
            alt="none contract"
            className="w-1/2 mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ListContract;
