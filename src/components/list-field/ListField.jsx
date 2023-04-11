import React from "react";
import ItemField from "../item-field/ItemField";
const listField = [
  {
    value: "web",
    label: "Web",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "app",
    label: "App",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "game",
    label: "Game",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "khdl",
    label: "Khoa học dữ liệu",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "ai",
    label: "AI",
    title: "Lập trình website Cân cả Front-end, và Back-end",
  },
  {
    value: "network",
    label: "An ninh mạng",
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
