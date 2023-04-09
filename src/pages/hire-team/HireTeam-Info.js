import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faRightLong, faLeftLong, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateRequire9 } from "../../reducers/slices/hireTeamSlice";


const NotificationLayer = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      <div className="bg-white z-30 shadow-xl rounded-lg p-6">
        <div className="flex flex-row justify-center items-center mb-4">
          <h1 className="text-3xl font-bold text-blue-500">{message}</h1>
          <FontAwesomeIcon className="text-2xl ml-3 text-green-500 font-bold" icon={faCheckCircle} />
        </div>

        <p className="text-xl font-semibold mb-2">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</p>
        <p className="text-xl font-medium mb-4">
          Vui lòng check mail, giữ liên lạc. Chúng tôi sẽ liên hệ trong
          vài giờ tới !
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

const HireTeamInfo = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [addressWork, setAddressWork] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);


  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();
  const handleCloseNotification = () => {
    setShowNotification(false);
    navigate("/admin/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, phone, jobTitle, addressWork };
    console.log(formData);
    setShowNotification(true);
    dispatch(updateRequire9(formData))
  };
  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      jobTitle !== "" &&
      addressWork !== ""
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [name, email, phone, jobTitle, addressWork]);
  

  return (
    <div className="flex flex-row items-center w-full h-[100vh]">
      <div className="p-16 w-[70%] h-full flex flex-col items-center justify-center">
        <img className="w-32 h-32 mb-6" src={logo} alt="" />
        <h2 className="text-3xl bg-[#edf1fd] p-3 rounded-lg font-medium mb-6">
          Xin mời nhập thông tin doanh nghiệp của bạn !
        </h2>
        <form onSubmit={handleSubmit} className="w-[60%]">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-left text-blue-500 font-semibold mb-1"
            >
              Tên{" "}
              <i className="text-sm text-green-400">
                *(Tên cá nhân hoặc tên doanh nghiệp của bạn)
              </i>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-left font-semibold text-blue-500 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-left text-blue-500 font-semibold mb-1"
            >
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="job-title"
              className="block text-left text-blue-500 font-semibold mb-1"
            >
              Chức vụ của bạn trong công ty
            </label>
            <input
              type="text"
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="job-address"
              className="block text-left font-semibold text-blue-500 mb-1"
            >
              Địa chỉ làm việc{" "}
              <i className="text-sm text-green-400">
                *(Địa chỉ đội ngũ của chúng tôi sẽ đến làm việc với bạn)
              </i>
            </label>
            <textarea
              id="job-address"
              value={addressWork}
              onChange={(e) => setAddressWork(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <button
            type="submit"
            disabled={!isFormComplete} // Disable button nếu form chưa được điền đầy đủ
            className={`border-[1px] disabled:opacity-40 cursor-pointer shadow-xl px-10 py-2 hover:bg-blue-500 transition-colors duration-300 border-gray-400 bg-[#00bdd6] text-white rounded-xl ${
              isFormComplete ? "" : "opacity-50 pointer-events-none"
            }`}
          >
            Thuê ngay bây giờ
          </button>
          {showNotification && (
            <NotificationLayer
              message="Thuê thành công"
              onClose={handleCloseNotification}
            />
          )}
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
export default HireTeamInfo;
