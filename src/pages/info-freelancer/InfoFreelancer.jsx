import { useState } from "react";

import listProject from "../../assests/imgs";
import ListProjectPhoto from "./list-project-photo/ListProjectPhoto";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import ProductInfo from "./product-info/ProductInfo";
const product = {
  name: "Danh",
  gmail: "thdanh2001@gmail.com",
  age: "22",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Freelancer", href: "#" },
    { id: 2, name: "Web", href: "#" },
  ],
  images: [
    {
      src: listProject.fivver,
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: listProject.total,
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: listProject.project,
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: listProject.project,
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng',
  highlights: [
    "HTML",
    "React",
    "SCSS",
    "NodeJs",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};


export default function InfoFreelancer() {
 
  return (
    <div className="bg-white">
      <div className="pt-6">
       <Breadcrumb product={product}/>
        <ListProjectPhoto images={product.images} />

        {/* Product info */}
       <ProductInfo product={product}/>
      </div>
    </div>
  );
}
