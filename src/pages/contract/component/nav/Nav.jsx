import React, { useEffect, useState } from "react";
import ItemNav from "./ItemNav";
import { useDispatch } from "react-redux";
import { getContracts } from "../../../../reducers/actions/contractAction";
const listNav = [
  { id: 1, label: "Tất cả", value: "all" },
  { id: 2, label: "Chờ xác nhận", value: "pending" },
  { id: 3, label: "Đang trong tiến độ", value: "progress" },
  { id: 4, label: "Hoàn thành", value: "done" },
  { id: 5, label: "Đã hủy", value: "cancel" },
];
const Nav = () => {
  const [active, setActive] = useState("all");
  const dispatch = useDispatch();

  const handleActive = (value) => {
    setActive(value);
    dispatch(getContracts(value));
  };

  useEffect(() => {
    dispatch(getContracts("all"));
  }, []);
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
