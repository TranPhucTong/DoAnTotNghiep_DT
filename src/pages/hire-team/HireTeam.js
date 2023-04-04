import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faRightLong,
  faAnglesRight,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HireTeam = () => {
  const navigate = useNavigate();
  const hireTeamSizeHanlde = () => {
    navigate("/hireTeam/quiz/size-company");
  };
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answers = ["Lập trình web", "Ứng dụng di dộng", "Lập trình game","Khoa học dữ liệu", "Trí tuệ nhân tạo", "An ninh mạng"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected option: ${selectedAnswer}`);
  };
  return (
    <div className="flex flex-row items-center w-full h-[100vh]">
      <div className="p-16 w-[70%] h-full flex flex-col items-center justify-center">
        <img className="w-32 h-32 mb-6" src={logo} alt="" />
        <h2 className="text-3xl bg-[#edf1fd] p-3 rounded-lg font-medium mb-6">
          Bạn muốn thuê lĩnh vực gì ?
        </h2>
        <form
          className="w-full justify-center flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col space-y-4">
            {answers.map((answer, index) => (
              <label key={index} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name="answer"
                  value={answer}
                  onChange={() => setSelectedAnswer(answer)}
                  checked={selectedAnswer === answer}
                />
                <span className="ml-4 text-gray-700 text-xl font-semibold">
                  {answer}
                </span>
              </label>
            ))}
          </div>
          <div class="border border-t w-[70%] my-6 border-gray-400"></div>
          <button
            type="submit"
            disabled={!selectedAnswer}
            className="border-[1px] disabled:opacity-40 cursor-pointer shadow-xl px-10 py-2 hover:bg-blue-500 transition-colors duration-300 border-gray-400 bg-[#00bdd6] text-white rounded-xl "
            onClick={hireTeamSizeHanlde}
          >
            Bắt đầu
            <FontAwesomeIcon className="ml-6 " icon={faAnglesRight} />
          </button>
        </form>
      </div>

      <div className="w-[30%] h-full bg-[#2151a5] flex-col flex justify-center items-center">
        <h1 className="text-white font-bold text-3xl mb-28">
          Cảm ơn bạn đã quan tâm đến việc tuyển dụng thông qua Code
          <span className="text-[#1dd75b]">Hire</span>.
        </h1>
        <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[#10a37f]">
          <p className="text-2xl text-white font-semibold px-4">
            <TypingEffect
              text="Trước khi bắt đầu, chúng tôi muốn hỏi một vài câu hỏi để hiểu rõ hơn
            về nhu cầu của bạn."
              speed={30}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireTeam;
