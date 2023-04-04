import React, { useState } from "react";
import logo from "../../images/logo.png";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

const HireTeamWorkWeek = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answers = ["Full Time (Thứ 2-Thứ 6)", "PartTime", "Hourly"];
  const navigate = useNavigate();
  const hireTeam = () => {
    navigate("/hireTeam/quiz/work-length");
  };
  const workLength = () => {
    navigate("/hireTeam/quiz/work-skill");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected option: ${selectedAnswer}`);
  };
  return (
    <div className="flex flex-row items-center w-full h-[100vh]">
      <div className="p-16 w-[70%] h-full flex flex-col items-center justify-center">
        <img className="w-32 h-32 mb-6" src={logo} alt="" />
        <h2 className="text-3xl bg-[#edf1fd] p-3 rounded-lg font-medium mb-6">
          Thời gian làm việc trong tuần ?
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
              disabled={!selectedAnswer}
              onClick={workLength}
              className="border-[1px] disabled:opacity-40 cursor-pointer shadow-xl px-10 py-2 hover:bg-blue-500 transition-colors duration-300 border-gray-400 bg-[#00bdd6] text-white rounded-xl "
            >
              Tiếp tục
              <FontAwesomeIcon className="ml-6 " icon={faRightLong} />
            </button>
          </div>
        </form>
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
export default HireTeamWorkWeek;
