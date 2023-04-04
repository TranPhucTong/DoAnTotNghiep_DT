import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import imagePerson from "../../images/personHome2.png";
import vector from "../../images/vector.png";
import img3 from "../../images/illustration-1.png";
import group from "../../images/groupIT.png";
import love from "../../images/Love.png";
import programer from "../../images/PngItem2.png";
import { useNavigate } from "react-router-dom";

import "./Slider1.css";
import TypingEffect from "../TypingEffect/TypingEffect";


const Slider1 = () => {
  const navigate = useNavigate();
  const hireTeamHanlde = () => {
    navigate("/hireTeam");
  };
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 10000, // tự động chuyển slide sau 3 giây
      },
    });
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="swiper-container mt-[88px] overflow-hidden">
      <div className="swiper-wrapper">
        <div className="swiper-slide flex bg-blue-400 bg-opacity-5">
          <div className="w-[50%] pl-[80px] text-left mb-10">
            <h1 className="text-[80px] font-semibold mt-20">
              Code
              <span className="text-[80px] font-semibold mt-32 text-[#277cfb]">
                Hire
              </span>
            </h1>
            <h3 className="text-[50px] font-semibold text-[#10a37f]">
              Dịch vụ cầu nối 4.0
            </h3>
            <p className="text-[23px] leading-9 text-gray-500 font-medium mt-6">
              <TypingEffect
                text="Chúng tôi cung cấp dịch vụ cho thuê nhân lực công nghệ thông tin với giá cả hợp lý. Bạn có thể thuê một cá nhân để giải quyết các vấn đề kỹ thuật hoặc thuê đội ngũ để thực hiện các dự án lớn hơn."
                speed={20}
              />
            </p>
            <div
              className={`${
                isVisible
                  ? "opacity-1000 translate-y-0"
                  : "opacity-0 translate-y-2"
              } transition-all flex flex-wrap gap-8 duration-1000`}
            >
              <button
                className=" mt-8 px-7 py-4 bg-[#277cfb] hover:bg-[#10a37f] items-center justify-center text-white rounded-xl font-semibold 
              hover:motion-safe:scale-110  ease-linear  transition-all duration-300"
              >
                Thuê cá nhân
              </button>
              <button
                className=" mt-8 px-7 py-4 bg-gray-800 hover:bg-[#10a37f]  items-center justify-center text-white rounded-xl font-semibold 
              hover:motion-safe:scale-110  ease-linear  transition-all duration-300"
                onClick={hireTeamHanlde}
              >
                Thuê đội ngũ
              </button>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <img
              src={imagePerson}
              className="w-full max-h-[100%] object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="swiper-slide flex bg-blue-400 bg-opacity-5">
          <div className="w-[50%] pl-[80px] text-left mb-10">
            <h1 className="text-[80px] font-semibold mt-20">
              Code
              <span className="text-[80px] font-semibold mt-32 text-[#277cfb]">
                Hire
              </span>
            </h1>
            <h3 className="text-[50px] font-semibold text-[#10a37f]">
              Dịch vụ cầu nối 4.0
            </h3>
            <p className="text-[23px] leading-9 text-gray-500 font-medium mt-6">
              <TypingEffect
                text="Chúng tôi cung cấp dịch vụ cho thuê nhân lực công nghệ thông tin với giá cả hợp lý. Bạn có thể thuê một cá nhân để giải quyết các vấn đề kỹ thuật hoặc thuê đội ngũ để thực hiện các dự án lớn hơn."
                speed={20}
              />
            </p>
            <div
              className={`${
                isVisible
                  ? "opacity-1000 translate-y-0"
                  : "opacity-0 translate-y-2"
              } transition-all flex flex-wrap gap-8 duration-1000`}
            >
              <button
                className=" mt-8 px-7 py-4 bg-[#277cfb] hover:bg-[#10a37f] items-center justify-center text-white rounded-xl font-semibold 
              hover:motion-safe:scale-110  ease-linear  transition-all duration-300"
              >
                Thuê cá nhân
              </button>
              <button
                className=" mt-8 px-7 py-4 bg-gray-800 hover:bg-[#10a37f]  items-center justify-center text-white rounded-xl font-semibold 
              hover:motion-safe:scale-110  ease-linear  transition-all duration-300"
              >
                Thuê đội ngũ
              </button>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <img
              src={imagePerson}
              className="w-full max-h-[100%] object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="swiper-slide flex bg-blue-400 bg-opacity-5">
          <div className="w-[50%] pl-[80px] text-left mb-10">
            <h1 className="text-[80px] font-semibold mt-20">
              Code
              <span className="text-[80px] font-semibold mt-32 text-[#277cfb]">
                Hire
              </span>
            </h1>
            <h3 className="text-[50px] font-semibold text-[#10a37f]">
              Dịch vụ cầu nối 4.0
            </h3>
            <p className="text-[23px] leading-9 text-gray-500 font-medium mt-6">
              <TypingEffect
                text="Chúng tôi cung cấp dịch vụ cho thuê nhân lực công nghệ thông tin với giá cả hợp lý. Bạn có thể thuê một cá nhân để giải quyết các vấn đề kỹ thuật hoặc thuê đội ngũ để thực hiện các dự án lớn hơn."
                speed={20}
              />
            </p>
            <div
              className={`${
                isVisible
                  ? "opacity-1000 translate-y-0"
                  : "opacity-0 translate-y-2"
              } transition-all flex flex-wrap gap-8 duration-1000`}
            >
              <button
                className=" mt-8 px-7 py-4 bg-[#277cfb] hover:bg-[#10a37f] items-center justify-center text-white rounded-xl font-semibold 
              hover:motion-safe:scale-110  ease-linear  transition-all duration-300"
              >
                Thuê cá nhân
              </button>
              <button
                className=" mt-8 px-7 py-4 bg-gray-800 hover:bg-[#10a37f]  items-center justify-center text-white rounded-xl font-semibold 
              hover:motion-safe:scale-110  ease-linear  transition-all duration-300"
              >
                Thuê đội ngũ
              </button>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <img
              src={imagePerson}
              className="w-full max-h-[100%] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
