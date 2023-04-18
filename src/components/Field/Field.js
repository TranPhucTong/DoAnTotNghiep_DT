import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faRightLong } from "@fortawesome/free-solid-svg-icons";
import ButtonHire from "../button/Button-Hire/ButtonHire";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeRoutesss, routeState } from "../../reducers/slices/routeSlice";

const fields = [
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/2362/2362366.png",
    name: "Lập trình Web",
    text: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png",
    name: "Ứng dụng di động",
    text: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
  },
  {
    id: 3,
    img: "https://static.thenounproject.com/png/2560030-200.png",
    name: "Lập trình Game",
    text: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
  },
  {
    id: 4,
    img: "https://cdn1.iconfinder.com/data/icons/cloud-72/64/platform-developer-programming-cloud-big-data-512.png",
    name: "Khoa học dữ liệu",
    text: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
  },
  {
    id: 5,
    img: "https://cdn-icons-png.flaticon.com/512/165/165406.png",
    name: "Trí tuệ nhân tạo",
    text: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
  },
  {
    id: 6,
    img: "https://cdn-icons-png.flaticon.com/512/3014/3014078.png",
    name: "An ninh mạng",
    text: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
  },
];

const FieldsCard = ({ field }) => (
  <div className="border-[1px] border-gray-400  bg-[#ebeced] hover:bg-[#38637b]  hover:border-yellow-300 transition-all duration-300 ease-linear hover:text-white">
    <div className="p-10 text-left">
      <div>
        <img src={field.img} alt={field.name} className="w-[25%] mb-5" />
      </div>
      <div className="font-bold leading-3 text-2xl text-[#277cfb] mb-4">
        <h2>{field.name}</h2>
      </div>
      <div className="text-sm leading-5 tracking-wides text-green-600 mb-4">
        <p>{field.text}</p>
      </div>
      <div className="flex text-[#ebeced] justify-between items-center">
        <a
          className="hover:border-b ease-in-out transition-all duration-1000 hover:text-white"
          href="#"
        >
          View Developers
        </a>
        <FontAwesomeIcon
          className="font-semibold cursor-pointer hover:text-[#277cfb]"
          icon={faRightLong}
        />
      </div>
    </div>
  </div>
);

function Field() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const hireTeamHanlde = () => {
    navigate("/hireTeam");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Đa dạng lĩnh vực</h1>
      <div className="grid grid-cols-3 grid-rows-2 mb-8">
        {fields.map((field) => (
          <div key={field.id} className="col-span-1 row-span-1">
            <FieldsCard field={field} />
          </div>
        ))}
      </div>
      <ButtonHire
        text="Thuê đội ngũ của bạn ngay bây giờ"
        onClick={hireTeamHanlde}
      />
    </div>
  );
}

export default Field;
