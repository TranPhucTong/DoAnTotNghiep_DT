import React, { useState } from "react";
import logo from "../../images/logo.png";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faRightLong,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateRequire6 } from "../../reducers/slices/hireTeamSlice";

const HireTeamWorkStart = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSaveDate = () => {
    dispatch(updateRequire6(date));
    console.log(`Selected date is: ${date}`);

    navigate("/hireTeam/quiz/work-form");
  };
  const navigate = useNavigate();
  const hireTeam = () => {
    navigate("/hireTeam/quiz/work-week");
  };
  return (
    <div className="flex flex-row items-center w-full h-[100vh]">
      <div className="p-16 w-[70%] h-full flex flex-col items-center justify-center">
        <img className="w-32 h-32 mb-6" src={logo} alt="" />
        <h2 className="text-3xl bg-[#edf1fd] p-3 rounded-lg font-medium mb-6">
          Thời gian bạn muốn bắt đầu với đội ngũ của chúng tôi ?
        </h2>
        <input
          type="date"
          id="date-input"
          className="rounded-lg border-gray-200 font-semibold text-blue-500 tracking-widest shadow-xl border-2 w-[50%] text-2xl px-14 py-6"
          onChange={handleDateChange}
          value={date}
          checked = {date}
        />
        {/* <button
          className="bg-blue-500 text-white rounded-lg p-2"
          onClick={handleSaveDate}
        >
          Save date
        </button> */}
        <div class="border border-t w-[70%] my-6 border-gray-400"></div>
        <div className="flex flex-row justify-between w-[70%] items-center">
          <button
            type="submit"
            className="border-[1px] cursor-pointer shadow-xl px-10 py-2 hover:bg-gray-500 transition-colors duration-300 border-gray-400 bg-gray-400 text-white rounded-xl "
            onClick={hireTeam}
          >
            <FontAwesomeIcon className="mr-6" icon={faLeftLong} />
            Quay lại
          </button>

          <button
            type="submit"
            disabled={!date}
            onClick={handleSaveDate}
            className="border-[1px] disabled:opacity-40 cursor-pointer shadow-xl px-10 py-2 hover:bg-blue-500 transition-colors duration-300 border-gray-400 bg-[#00bdd6] text-white rounded-xl "
          >
            Tiếp tục
            <FontAwesomeIcon className="ml-6 " icon={faRightLong} />
          </button>
        </div>
      </div>
      <div className="w-[30%] h-full bg-[#2151a5] flex-col flex justify-center items-center">
        <h1 className="text-white font-bold text-3xl mb-28">
          Cảm ơn bạn đã quan tâm đến việc tuyển dụng thông qua Code
          <span className="text-[#1dd75b]">Hire</span>.
        </h1>
        <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[#10a37f]">
          <p className="text-2xl text-white font-semibold px-4">
            Trước khi bắt đầu, chúng tôi muốn hỏi một vài câu hỏi để hiểu rõ hơn
            về nhu cầu của bạn.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HireTeamWorkStart;
