import React, { useEffect } from "react";
import Form from "./component/Form";
import { useForm } from "react-hook-form";
import InputText from "./component/input/InputText";
import { useSelector } from "react-redux";
import { selectCustomer } from "../../reducers/slices/customerSlice";
import NoneInput from "./component/input/NoneInput";
import InputRadio from "./component/input/InputRadio";
import InputDate from "./component/input/InputDate";
import customerApi from "../../api/customerApi";
import { toast } from "react-toastify";
const valueForm = {
  name: "name",
  password: "password",
  gender: "gender",
  birthDate: "birthDate",
};
const ProfileCustomer = () => {
  const customer = useSelector(selectCustomer);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  if (!customer) {
    return <></>;
  }
  const { name, gender, birthDate, email, phone } = customer;
  const onSubmit = async (data) => {
    try {
       const res = await customerApi.updateCustomer(data);
      console.log(res);
      res.status === 201 && toast.success("Cập nhật thành công")
    } catch (error) {
      console.log(error);
    }
   
  };
  return (
    <div className="-mb-[100px] h-[90vh] bg-neutral-100 flex justify-center items-center py-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full w-2/3 bg-white rounded-lg px-10 py-14 flex flex-col"
      >
        <h2 className="font-bold text-2xl text-blue-600 text-left ml-10">
          Tài khoản của tôi
        </h2>
        <div className="w-full flex-1  my-10">
          <div className="w-1/2 mx-auto h-full">
            <InputText
              label={"Họ và tên"}
              register={register}
              name={valueForm.name}
              defaultValue={name}
              option={{
                required: {
                  value: true,
                  message: "Vui lòng nhập họ tên",
                },
                minLength: {
                  value: 2,
                  message: "Họ tên không được ít hơn 2 ký tự",
                },
                pattern: {
                  value: /^[\p{L}\s]+$/u,
                  message: "Họ tên chỉ được chứa chữ cái và khoảng trắng",
                },
              }}
              error={errors.name?.message}
            />
            <NoneInput label={"Email"} value={email} />

            <NoneInput label={"Số điện thoại"} value={phone} />
            <InputRadio
              register={register}
              name={valueForm.gender}
              label={"Giới tính"}
              defaultValue={gender}
            />
            <InputDate
              label="Ngày sinh"
              placeholder="14/01/2001"
              name={valueForm.birthDate}
              register={register}
              defaultValue={birthDate}
              option={{
                required: {
                  value: true,
                  message: "Vui lòng nhập ngày sinh",
                },
                validate: {
                  notFutureDate: (value) => {
                    const date = new Date(value);
                    const currentDate = new Date();
                    return (
                      date <= currentDate || "Ngày sinh không thể là tương lai"
                    );
                  },
                  validDay: (value) => {
                    const date = new Date(value);
                    const currentDate = new Date();
                    const diff = currentDate.getFullYear() - date.getFullYear();
                    if (diff > 120) {
                      return "Ngày sinh không hợp lệ";
                    }
                    if (diff < 18) {
                      return "Bạn phải trên 18 tuổi";
                    }
                  },
                },
              }}
              error={errors.birthDate?.message}
            />
          </div>
        </div>
        <div>
          <button class="w-1/4 transition-all bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCustomer;
//
