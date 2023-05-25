import React from "react";

import ItemStatement from "../item-statement/ItemStatement";
const ListStatement = ({ listStatement,endStatement }) => {
  return (
    <div className="flex justify-between items-center flex-col mx-80">
      {listStatement.map((item,index) => (
        <ItemStatement isFinal = {endStatement === index + 1} id = {item.id} item={item}/>
      ))}
    </div>
  );
};

export default ListStatement;
