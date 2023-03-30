import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalf,
  faStar,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgAVT1 from "../../images/avt.png";
import { Autoplay } from "swiper";
import TypingEffect from "../TypingEffect/TypingEffect";

const ReviewSlider = () => {
  const [active, setActive] = useState(null);
  const Reviewer = [
    {
      id: 1,
      imgAVT: ImgAVT1,
      name: "John Deo",
      content:
        "Tôi rất hài lòng về sản phẩm của bạn, tuy trong quá trình làm gặp nhiều khó khăn nhưng tôi rất vui khi được đồng hành cùng những cộng sự giỏi.",
    },
    {
      id: 2,
      imgAVT: ImgAVT1,
      name: "John Deo",
      content:
        "Tôi rất hài lòng về sản phẩm của bạn, tuy trong quá trình làm gặp nhiều khó khăn nhưng tôi rất vui khi được đồng hành cùng những cộng sự giỏi.",
    },
    {
      id: 3,
      imgAVT: ImgAVT1,
      name: "John Deo",
      content:
        "Tôi rất hài lòng về sản phẩm của bạn, tuy trong quá trình làm gặp nhiều khó khăn nhưng tôi rất vui khi được đồng hành cùng những cộng sự giỏi.",
    },
    {
      id: 4,
      imgAVT: ImgAVT1,
      name: "John Deo",
      content:
        "Tôi rất hài lòng về sản phẩm của bạn, tuy trong quá trình làm gặp nhiều khó khăn nhưng tôi rất vui khi được đồng hành cùng những cộng sự giỏi.",
    },
    {
      id: 5,
      imgAVT: ImgAVT1,
      name: "John Deo",
      content:
        "Tôi rất hài lòng về sản phẩm của bạn, tuy trong quá trình làm gặp nhiều khó khăn nhưng tôi rất vui khi được đồng hành cùng những cộng sự giỏi.",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Phản hồi từ khách hàng của chúng tôi.
      </h1>
      <p className="text-xl tracking-wide text-green-500 mb-4 uppercase font-bold">
        <TypingEffect text="Họ đã nói gì?" speed={100} />
      </p>
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[1355px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={(cur) => setActive(cur.realIndex)}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
          >
            {Reviewer.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="border-[1px] shadow-xl border-gray-400 rounded-lg py-8 px-10">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <div className="flex justify-between items-center">
                        <img
                          src={review.imgAVT}
                          alt=""
                          className="w-14 h-14 rounded-full object-cover mr-3"
                        />
                        <div className="">
                          <h1 className="text-left font-semibold text-2xl mb-2">
                            {review.name}
                          </h1>
                          <div className="flex">
                            <FontAwesomeIcon
                              className="font-semibold cursor-pointer text-green-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="font-semibold cursor-pointer text-green-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="font-semibold cursor-pointer text-green-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="font-semibold cursor-pointer text-green-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="font-semibold cursor-pointer text-green-500"
                              icon={faStarHalf}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <FontAwesomeIcon
                        className="font-semibold cursor-pointer text-[60px] opacity-60 text-gray-500"
                        icon={faQuoteRight}
                      />
                    </div>
                  </div>
                  <div className="text-justify text-justify-inter inline-block mt-6">
                    <p className="text-lg font-medium">{review.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
