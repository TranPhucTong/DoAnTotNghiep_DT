import React from "react";
import ItemCategory from "./ItemCategory";

const categories = [
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/2362/2362366.png",
    name: "Web",
    value: "web",
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png",
    name: "Di động",
    value: "app",
  },
  {
    id: 3,
    img: "https://static.thenounproject.com/png/2560030-200.png",
    name: "Game",
    value: "game",
  },
  {
    id: 4,
    img: "https://cdn1.iconfinder.com/data/icons/cloud-72/64/platform-developer-programming-cloud-big-data-512.png",
    name: "Khoa học dữ liệu",
    value: "khdl",
  },
  {
    id: 5,
    img: "https://cdn-icons-png.flaticon.com/512/165/165406.png",
    name: "AI",
    value: "ai",
  },
  {
    id: 6,
    img: "https://cdn-icons-png.flaticon.com/512/3014/3014078.png",
    name: "An ninh mạng",
    value: "network",
  },
];

const ListCategory = ({ onChangeCategory,categoryActive }) => {
  return (
    <div className=" py-2 flex-col overflow-hidden">
      {categories.map((category) => (
        <ItemCategory
          key={category.id}
          category={category}
          onChangeCategory={onChangeCategory}
          categoryActive = {categoryActive}
        />
      ))}
    </div>
  );
};

export default ListCategory;
