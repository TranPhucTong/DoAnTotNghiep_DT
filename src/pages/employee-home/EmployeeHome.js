import React, { useEffect, useRef, useState } from "react";
import ListField from "../../components/list-field/ListField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "../../components/range-slider/RangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployee } from "../../reducers/slices/employeeSlice";
import { formatBirthDate } from "../../utils/convertDate";
import { getProfileEmployee, updateSpotlightEmployee } from "../../reducers/actions/employeeAction";
import { updateProfileEmployee } from "../../reducers/actions/employeeAction";
const EmployeeHome = () => {
  // Redux
  const dispatch = useDispatch();
  const employee = useSelector(selectEmployee);
  // State
  const [rentFrom, setRentFrom] = useState(employee.rent_from);
  const [rentTo, setRentTo] = useState(employee.rent_to);
  const [introduce, setIntruduce] = useState(employee.introduce);
  const [avatar, setAvatar] = useState(employee.avatar);
  const [type, setType] = useState();
  const [fileName, setFileName] = useState();
  const [spotlight,setSpotlight] = useState();
  const [selectSpotlight, setSelectSpotlight] = useState();
  //Ref
  const inputRef = useRef();
  const inputSpotlightRef = useRef();
  //
  useEffect(() => {
    !employee.id && dispatch(getProfileEmployee());

    const updateStateSpotlight = () => {
      let arr = [];
      employee.spotlight.forEach((item) => {
        arr.push({ value: item });
      });
      setSpotlight(arr);
    };
    // !spotlight && employee.spotlight && updateStateSpotlight();
  }, []);

  const changeRentFromHandle = (value) => {
    setRentFrom(value);
  };

  const changeRentToHandle = (value) => {
    setRentTo(value);
  };

  const changeIntroduceHandle = (value) => {
    setIntruduce(value);
  };

  const changeSpotlightHandle = (e)=>{
    console.log(selectSpotlight);
    const name = e.target.files[0].name;
    const lastDot = name.lastIndexOf(".");
    const fileName = name.substring(0, lastDot);
    const type = name.substring(lastDot + 1);
    
    let value;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      value = reader.result;
       const spotlightChange = {
         fileName,
         type,
         value,
       };
       spotlight[selectSpotlight] = spotlightChange;
       setSpotlight(spotlight);
       console.log("spotlight: ",spotlight);
    };
   
  }

  const changeAvatarHandle = (e) => {
    const name = e.target.files[0].name;
    const lastDot = name.lastIndexOf(".");
    const fileName = name.substring(0, lastDot);
    const type = name.substring(lastDot + 1);
    setFileName(fileName);
    setType(type);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  const submitHandle = () => {
    const profile = {
      rent_from: rentFrom,
      rent_to: rentTo,
      introduce: introduce ? introduce : employee.introduce,
      avatar: avatar ? avatar : employee.avatar,
      fileName,
      type,
    };
    dispatch(updateSpotlightEmployee(spotlight));
    if (
      rentFrom === employee.rent_from ||
      rentTo === employee.rent_to ||
      introduce === employee.introduce ||
      avatar === employee.avatar
    ) {
      return;
    }
    console.log("call");
    dispatch(updateProfileEmployee(profile));
  };

  return (
    <div className="h-full w-full">
      {/* Title */}
      <h2 className="text-left text-xl font-medium text-[#171A1F] px-10 mb-6">
        Home
      </h2>
      {/* Field */}
      <div className="bg-[#F9FAFB] px-10 py-4">
        <h3 className="text-left text-[#323842]">Mảng lập trình</h3>
      </div>
      <div className="my-10 mx-[5%]">
        <ListField />
      </div>
      {/* Info */}
      <div className="bg-[#F9FAFB] px-10 py-4 my-12">
        <h3 className="text-left text-[#323842] ">Thông tin cá nhân</h3>
      </div>
      <div className="flex justify-between items-center px-10">
        <div className="w-1/6 flex flex-col justify-center items-center">
          <h4 className="text-slate-500 text-base mb-5">Ảnh đại diện</h4>
          <img
            src={avatar ? avatar : employee.avatar}
            onClick={() => inputRef.current.click()}
            alt="avt"
            className="object-cover h-20 w-20 rounded-full cursor-pointer hover:opacity-50 transition-all"
          />
          <input
            type="file"
            className="invisible w-0 h-0"
            ref={inputRef}
            onChange={changeAvatarHandle}
          />
          <div className="flex justify-center items-center mt-4">
            <p className="text-[#00BDD6] text-xs mr-2 font-bold">4.4 / 5</p>
            <FontAwesomeIcon icon={faStar} className="text-[#00BDD6] text-xs" />
          </div>
        </div>
        <div className="w-5/12 pl-20">
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Họ tên:</span>
            <p className="text-base">{employee.name}</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Sinh nhật:</span>
            <p>{formatBirthDate(employee.birthDate)}</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Giới tính:</span>
            <p>{employee.gender}</p>
          </div>
        </div>
        <div className="w-5/12">
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Địa chỉ:</span>
            <p>TP.HCM</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">
              Số điện thoại:
            </span>
            <p>{employee.phone}</p>
          </div>
          <div className="flex my-2">
            <span className="text-slate-500 text-base mr-2">Email:</span>
            <p>{employee.gmail}</p>
          </div>
        </div>
      </div>
      {/* Update Info */}
      <div className="py-10">
        <h2 className="text-left text-[#00BDD6] text-2xl uppercase m-10 font-bold">
          Cập nhật thông tin
        </h2>
        <div className="w-3/5 mx-auto">
          <div className="flex justify-center items-center px-10">
            <h4 className="text-slate-400 text-lg w-1/12 text-left">Giá: </h4>
            <div className="flex-1 flex justify-center items-center">
              <RangeSlider
                className="w-full h-2 mx-6"
                defaultValue={[0, 100]}
                value={[
                  rentFrom ? rentFrom : employee.rent_from,
                  rentTo ? rentTo : employee.rent_to,
                ]}
                onChangeFrom={changeRentFromHandle}
                onChangeTo={changeRentToHandle}
              />
            </div>
            <div className="flex justify-end items-center w-1/6">
              <p className="text-sm">
                ${rentFrom} - ${rentTo}
              </p>
            </div>
          </div>
          <div className="px-10 pt-10">
            <h4 className="text-slate-400 text-lg text-left ">
              Giới thiệu bản thân:
            </h4>
            <textarea
              className="border-2 w-full rounded-lg my-5 border-neutral-500 p-5"
              value={introduce ? introduce : employee.introduce}
              onChange={(e) => changeIntroduceHandle(e.target.value)}
            ></textarea>
          </div>
          <div className="px-10 pt-10">
            <h4 className="text-slate-400 text-lg text-left ">Các sản phẩm:</h4>
            <div className="grid grid-cols-4 gap-4 my-5">
              <input
                type="file"
                className="hidden w-0 h-0"
                ref={inputSpotlightRef}
                onChange={changeSpotlightHandle}
              />
              {spotlight ? (
                spotlight.map((item, id) => {
                  return item.value ? (
                    <>
                      <img
                        key={id}
                        className=" mx-2 rounded-lg min-h-[200px] hover:opacity-50 transition-all cursor-pointer"
                        alt="img"
                        src={item.value}
                        onClick={() => {
                          inputSpotlightRef.current.click();
                          setSelectSpotlight(id);
                        }}
                      />
                    </>
                  ) : (
                    <div
                      onClick={() => {
                        inputSpotlightRef.current.click();
                        setSelectSpotlight(id);
                      }}
                      className="hover:opacity-50 cursor-pointer flex justify-center items-center border border-2 rounded-lg border-blue-300"
                    >
                      <FontAwesomeIcon icon={faPlus} className="text-xl" />
                    </div>
                  );
                })
              ) : (
                <>
                  <img
                    className="w-1/4 mx-2 rounded-sm min-h-[200px] hover:opacity-50 transition-all cursor-pointer"
                    alt="img"
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  />
                  <img
                    className="w-1/4 mx-2 rounded-sm min-h-[200px] hover:opacity-50 transition-all cursor-pointer"
                    alt="img"
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  />
                  <img
                    className="w-1/4 mx-2 rounded-sm min-h-[200px] hover:opacity-50 transition-all cursor-pointer"
                    alt="img"
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  />
                  <img
                    className="w-1/4 mx-2 rounded-sm min-h-[200px] hover:opacity-50 transition-all cursor-pointer"
                    alt="img"
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Button save */}
      <div className="flex justify-center items-center">
        <button
          className="min-w-[200px] bg-[#4F46E5] text-white text-base rounded-3xl mb-10 py-2"
          onClick={submitHandle}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default EmployeeHome;
