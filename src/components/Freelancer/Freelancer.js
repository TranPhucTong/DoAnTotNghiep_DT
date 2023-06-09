import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import TypingEffect from "../TypingEffect/TypingEffect";
import ButtonHire from "../button/Button-Hire/ButtonHire";
import configRoutes from "../../config/configRouter";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerByPage } from "../../reducers/actions/employeeAction";
import {
  changeEmployee,
  listEmployee,
} from "../../reducers/slices/employeeSlice";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/themes/light.css";
export const freelancers = [
  {
    id: 1,
    imgBG: "https://qn.iuh.edu.vn/uploads/2021/04/CNTT.gif",
    imgAvt:
      "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mgeI5yjJ0kwAX8OAP-Q&_nc_ht=scontent-sin6-4.xx&oh=00_AfD38HRJcKiWjdDZxntm7C8-ZoLXBq9kDf8gk39Fs4kenA&oe=64288CFD",
    name: "Tong Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 2,
    imgBG:
      "https://cdn.baoquocte.vn/stores/news_dataimages/minhhoa/012020/03/10/in_article/nhung-cong-nghe-ngu-tri-nam-2020.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/322249286_708446770664814_2655483604596819168_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dHE2ogRZlJIAX_kmxxC&_nc_ht=scontent-sin6-2.xx&oh=00_AfBvhO7ctGjgnACWSe-TQoQrR9v6PToG3eYYpGoIqxBapw&oe=64287B3C",
    name: "Danh Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$130",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 3,
    imgBG: "https://csifac.mans.edu.eg/images/design/it.gif",
    imgAvt:
      "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/245431236_597079805039666_801776340192898134_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8rG5Km4HWgQAX_2hMwK&_nc_ht=scontent-sin6-3.xx&oh=00_AfBn4rN25oJ6hOotNyyeZki5k_JIuYxS2Nn2MfHe6F_mQw&oe=6428FC5F",
    name: "Chanh Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 4,
    imgBG:
      "https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/329130951_510650267785844_1747888420654964900_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yYZoTPJMpHoAX9SYSlC&_nc_ht=scontent-sin6-2.xx&oh=00_AfC0KksZYRw3VxVsKhVVrsyrepqwgJQG_jPuIiNGtEbpPQ&oe=642820A0",
    name: "Hoang Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$430",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
];

export const FreelancerCard = ({ freelancer }) => {
  const dispatch = useDispatch();
  const { phone, name } = freelancer.employeeId;
  const getFreelancerHandle = (freelancer) => {
    dispatch(changeEmployee(freelancer));
  };
  return (
    <Link
      to={`/freelancers/info/${phone}`}
      onClick={() => getFreelancerHandle(freelancer)}
      className="flex flex-col cursor-pointer border-[1px] rounded-xl border-gray-200 hover:shadow-xl transition-all duration-300 ease-out hover:text-[#00bdd6] shadow-md"
    >
      <div className="p-6">
        <div className="w-full h-[200px] mb-5">
          <img
            src={
              freelancer.spotlight[0]
                ? freelancer.spotlight[0]
                : "https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif"
            }
            className="rounded-lg w-full h-full object-cover"
            alt={freelancer.name}
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <img
            src={freelancer.avatar}
            className="w-8 h-8 rounded-full"
            alt={freelancer.name}
          />
          <h2 className="font-bold text-[22px] text-yellow-500">{name}</h2>
        </div>
        <p className="text-left mb-4">{freelancer.introduce}</p>
        <div className="flex justify-between items-center">
          <Tippy
            interactive={true}
            hideOnClick={false}
            trigger="mouseenter focus"
            theme="light"
            content={<span>{freelancer.totalReview}</span>}
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((rating) => (
                <FontAwesomeIcon
                  className={`font-semibold cursor-pointer ${
                    freelancer.totalRating > rating
                      ? "text-green-500"
                      : "text-gray-500"
                  } `}
                  icon={faStar}
                />
              ))}
            </div>
          </Tippy>
          <div className="text-[#00bdd6] font-bold text-base">
            {freelancer.rent_from}$ - {freelancer.rent_to}$
          </div>
        </div>
      </div>
    </Link>
  );
};

function Freelancer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listFreelancer = useSelector(listEmployee);
  let listRender = listFreelancer;
  if (listFreelancer.length) {
    listRender = listFreelancer.slice(0, 4);
  }
  useEffect(() => {
    if (!listFreelancer.length) {
      dispatch(getFreelancerByPage({ page: 1 }));
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Cộng đồng freelancer đang phát triển của chúng tôi
      </h1>
      <p className="text-xl font-thin tracking-wide text-gray-500 mb-8">
        <TypingEffect
          text=" Chúng tôi là một công ty tuyển chọn gắt gao các chuyên gia công nghệ
          thông tin tài năng và có kinh nghiệm, với mục tiêu giúp các doanh
          nghiệp phát triển các dự án công nghệ thông tin của họ một cách nhanh
          chóng và hiệu quả."
          speed={30}
        />
      </p>
      <div className="grid grid-cols-4 grid-rows-1 gap-10 mb-8">
        {listRender.map((freelancer) => (
          <div key={freelancer._id} className="col-span-1 row-span-1">
            <FreelancerCard freelancer={freelancer} />
          </div>
        ))}
      </div>
      <div className=" father flex pr-3 mb-6 justify-end cursor-pointer items-center hover:underline hover:text-blue-500 underline-thick">
        <p
          className="mr-2 font-semibold text-lg"
          onClick={() => navigate(configRoutes.freelancers)}
        >
          Xem thêm
        </p>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          className="icon text-green-500 text-xl  font-bold cursor-pointer"
        />
      </div>
      <ButtonHire
        text="Thuê cộng sự của bạn ngay bây giờ"
        onClick={() => navigate(configRoutes.freelancers)}
      />
    </div>
  );
}

export default Freelancer;
