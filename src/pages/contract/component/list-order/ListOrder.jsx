import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import noneContract from "../../../../assests/imgs/none-contract.png";
import { listFilterOrderStore, listOrderStore } from "../../../../reducers/slices/orderSlice";
import ItemOrder from "../item-order/ItemOrder";
import Modal from "../../../../components/modal/Modal";
import { cancelOrder } from "../../../../reducers/actions/orderAction";

const ListOrder = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const openModalHandle = (open) => setOpen(open);
  let listOrder = useSelector(listOrderStore);
  const listFilterOrder = useSelector(listFilterOrderStore);
  if (listFilterOrder) {
    listOrder = listFilterOrder;
  }
  const cancelHandle = (orderId,reason)=>{
     dispatch(cancelOrder({ orderId, reason }));
  }

  return (
    <div>
      <Modal open={open} onOpen={openModalHandle} onCancel = {cancelHandle}/>

      {listOrder.length ? (
        listOrder.map((item) => (
          <ItemOrder
            onOpen={openModalHandle}
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

export default ListOrder;
