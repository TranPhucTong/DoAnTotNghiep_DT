import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faRightLong,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import { useNavigate } from "react-router-dom";

import Slider1 from "../../components/Slider/Slider1";
import EmployeeSlider from "../../components/SliderEmployee/EmployeeSlider";
import Field from "../../components/Field/Field";
import Freelancer from "../../components/Freelancer/Freelancer";
import Publication from "../../components/Publications/Publications";
import ReviewSlider from "../../components/SliderCustomer/ReviewSlider ";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { changeRoutesss, routeState } from "../../reducers/slices/routeSlice";
import { useDispatch, useSelector } from "react-redux";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Home = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSecondRoute = useSelector(routeState);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isSecondRoute == true) {
  //     dispatch(changeRoutesss(false));
  //   }
  // }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <Slider1 />
      </div>

      <div className="container mx-auto mt-8 px-20 mb-8">
        <EmployeeSlider />
      </div>

      <div className="container mx-auto mt-20 px-20 mb-8">
        <Field />
      </div>

      <div className="container mx-auto mt-20 px-20 mb-8">
        <Freelancer />
      </div>

      <div className="container mx-auto mt-20 px-20 mb-8">
        <Publication />
      </div>

      <div className="container mx-auto mt-20 px-20 mb-8">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Home;
