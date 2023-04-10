import React from "react";
import ItemField from "../item-field/ItemField";
const listField = [
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
];
const ListField = () => {
  return (
    <div className="grid grid-cols-3  gap-4">
      {listField.map((field) => (
        <ItemField field={field} />
      ))}
    </div>
  );
};

export default ListField;
