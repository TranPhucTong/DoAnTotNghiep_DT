import React, { useEffect, useState } from "react";
import ItemNav from "./ItemNav";
import { useDispatch } from "react-redux";
import { getContracts } from "../../../../reducers/actions/contractAction";
import { getListOrderByCustomer } from "../../../../reducers/actions/orderAction";
const listNav = [
  { id: 1, label: "Tất cả", value: "all" },
  { id: 2, label: "Chờ xác nhận", value: "pending" },
  { id: 3, label: "Đang trong tiến độ", value: "progress" },
  { id: 4, label: "Hoàn thành", value: "done" },
  { id: 5, label: "Đã hủy", value: "cancel" },
];
const Nav = ({isContract}) => {
  const [active, setActive] = useState("all");
  const dispatch = useDispatch();

  const handleActive = (value) => {
    setActive(value);
    // filter contract by type contract 
    isContract ?
        dispatch(getContracts(value))

    :
    dispatch(getListOrderByCustomer(value))
  };

  useEffect(() => {
    isContract ?
    dispatch(getContracts("all"))
    :
    dispatch(getListOrderByCustomer("all"))
    setActive("all")
  }, [isContract]);
  return (
    <ul className="text-neutral-900 w-full flex justify-between items-center border border-neutral-300 ">
      {listNav.map((item) => (
        <ItemNav
          onClick={handleActive}
          active={active}
          key={item.id}
          label={item.label}
          value={item.value}
        />
      ))}
    </ul>
  );
};

export default Nav;
