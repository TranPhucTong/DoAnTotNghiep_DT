import React, { useState } from "react";
import logo from "../../images/logo.png";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faRightLong,
  faLeftLong,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { hireTeam, updateRequire8 } from "../../reducers/slices/hireTeamSlice";
import orderTeamApi from "../../api/orderTeamApi";

const NotificationSure = ({ send, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      <div className="bg-white z-30 shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-500">Thông báo !!!</h1>
        <p className="text-xl font-semibold mt-2 mb-4 text-green-600 italic">
          Bạn có chắc muốn gửi những thông tin này cho chúng tôi chứ ?
        </p>
        <div className="flex gap-4 w-full justify-center items-center">
          <button
            className="bg-gray-400 font-bold hover:bg-gray-800 transition-colors duration-150 ease-linear text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            className="bg-blue-800 font-bold hover:bg-blue-500 transition-colors duration-150 ease-linear text-white px-5 py-2 rounded-lg"
            onClick={send}
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

const NotificationLayer = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      <div className="bg-white z-30 shadow-xl rounded-lg p-6">
        <div className="flex flex-row justify-center items-center mb-4">
          <h1 className="text-3xl font-bold text-blue-500">{message}</h1>
          <FontAwesomeIcon
            className="text-2xl ml-3 text-green-500 font-bold"
            icon={faCheckCircle}
          />
        </div>

        <p className="text-xl font-semibold mb-2">
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
        </p>
        <p className="text-xl font-medium mb-4">
          Vui lòng check mail, giữ liên lạc. Chúng tôi sẽ liên hệ trong vài giờ
          tới !
        </p>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Kết thúc
        </button>
      </div>
    </div>
  );
};

const HireTeamWage = () => {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answers = [
    { budget: 10000, text: "Dưới 10.000$" },
    { budget: 50000, text: "Trên 50.000$" },
    { budget: 100000, text: "Trên 100.000$" },
  ];
  const navigate = useNavigate();
  const hireTeamWorkForm = () => {
    navigate("/hireTeam/quiz/work-form");
  };

  const reduxDataHireTeam = useSelector(hireTeam);
  const workLength = async () => {
    dispatch(updateRequire8(selectedAnswer));
    setShowNotificationSure(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected option: ${selectedAnswer}`);
  };

  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationSure, setShowNotificationSure] = useState(false);
  const handleCloseNotification = async () => {
    setShowNotification(false);
    navigate("/");
  };

  const handleCloseNotificationSure = () => {
    setShowNotificationSure(false);
  };

  const sendInfo = async () => {
    const order = {
      customerId: "64244cffc68971f42ad5d13a",
      field: reduxDataHireTeam.field,
      totalPersonnel: reduxDataHireTeam.totalPersonnel,
      duration: reduxDataHireTeam.duration,
      workingTime: reduxDataHireTeam.workingTime,
      startTime: reduxDataHireTeam.startTime,
      typeWork: reduxDataHireTeam.typeWork,
      budget: reduxDataHireTeam.budget,
    };

    try {
      const response = await orderTeamApi.createOrder(order);
      setShowNotificationSure(false);
      setShowNotification(true);
      console.log(order);
    } catch (erorr) {
      console.log("Lỗi" + erorr);
      alert("Lỗi");
    }
  };
  return (
    <div className="flex flex-row items-center w-full h-[100vh]">
      <div className="p-16 w-[70%] h-full flex flex-col items-center justify-center">
        <img className="w-32 h-32 mb-6" src={logo} alt="" />
        <h2 className="text-3xl bg-[#edf1fd] p-3 rounded-lg font-medium mb-6">
          Ngân sách của bạn làm việc với đội ngũ của chúng tôi ?
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
                  value={answer.budget}
                  onChange={() => setSelectedAnswer(answer.budget)}
                  checked={selectedAnswer === answer.budget}
                />
                <span className="ml-4 text-gray-700 text-xl font-semibold">
                  {answer.text}
                </span>
              </label>
            ))}
          </div>
          <div className="border border-t w-[70%] my-6 border-gray-400"></div>
          <div className="flex flex-row justify-between w-[70%] items-center">
            <button
              type="submit"
              className="border-[1px] cursor-pointer shadow-xl px-10 py-2 hover:bg-gray-500 transition-colors duration-300 border-gray-400 bg-gray-400 text-white rounded-xl "
              onClick={hireTeamWorkForm}
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
              Hoàn thành
              <FontAwesomeIcon className="ml-6 " icon={faRightLong} />
            </button>
            {showNotification && (
              <NotificationLayer
                message="Thuê thành công"
                onClose={handleCloseNotification}
              />
            )}
            {showNotificationSure && (
              <NotificationSure
                onClose={handleCloseNotificationSure}
                send={sendInfo}
              />
            )}
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
export default HireTeamWage;
