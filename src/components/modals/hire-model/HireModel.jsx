import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Input from "./input/Input";
import { useForm } from "react-hook-form";
import InputDate from "./input-date/InputDate";
import Textarea from "./textarea/Textarea";
import days from "../../../utils/totalDay";
import contractApi from "../../../api/contractApi";
import { toast } from "react-toastify";

const HireModel = ({ open, onOpen, employee }) => {
  const [confirm, setConfirm] = useState(false);
  const cancelButtonRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandle = async (data) => {
    const contract = { ...data, employee: employee.employeeId };
    setConfirm(true);
    try {
      const res = await contractApi.createContract(contract);
    } catch (error) {
      console.log(error);
    }
  };

  const changeConfirmHandle = () => {
    if (confirm) {
      onOpen(false);
      setConfirm(false);
      return;
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[100] overflow-y-auto">
          <form
            onSubmit={handleSubmit(submitHandle)}
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-bold leading-6 text-gray-900"
                      >
                        <div className="flex justify-center items-center py-3">
                          <img
                            className="h-16 w-16 rounded-full"
                            src={employee.avatar}
                            alt=""
                          />
                        </div>
                        {!confirm ? (
                          <>
                            <p className="text-[#1091F4] text-center text-base">
                              Chào bạn
                            </p>
                            <p className="text-[#1091F4] text-center text-base">
                              Tôi muốn biết thêm thông tin về dự án của chúng ta
                            </p>
                          </>
                        ) : (
                          <div className="my-4">
                            <p className="text-[#1091F4] text-center text-base">
                              Cảm ơn bạn đã lựa chọn tôi
                            </p>
                            <p className="text-[#1091F4] text-center text-base">
                              Tôi sẽ phản hồi với bạn trong 7 ngày làm việc tiếp
                              theo!
                            </p>
                          </div>
                        )}
                      </Dialog.Title>
                      {/* Body */}
                      {!confirm ? (
                        <div className="mt-5">
                          <Input
                            register={register}
                            name="nameProject"
                            label="Tên dự án"
                            placeholder="Tên dự án của bạn..."
                            option={{
                              required: {
                                value: true,
                                message: "Vui lòng nhập tên dự án",
                              },
                              minLength: {
                                value: 4,
                                message: "Tên dự án không được ít hơn 4 ký tự",
                              },
                            }}
                            error={errors.nameProject?.message}
                          />
                          <Input
                            type="number"
                            register={register}
                            name="budget"
                            label="Giá thuê bạn mong muốn"
                            placeholder="50"
                            option={{
                              required: {
                                value: true,
                                message: "Vui lòng nhập giá thuê bạn mong muốn",
                              },
                              maxLength: {
                                value: 3,
                                message: "Giá thuê không được lớn hơn 4 chữ số",
                              },
                              validate: {
                                lessThanValue: (value, formValues) =>
                                  value >= employee.rent_from ||
                                  `Không được < ${employee.rent_from}$`,
                                greaterThanValue: (value, formValues) =>
                                  value <= employee.rent_to ||
                                  `Không được > ${employee.rent_to}$`,
                              },
                            }}
                            error={errors.budget?.message}
                          />
                          <InputDate
                            register={register}
                            startName="startDate"
                            endName="endDate"
                            label="Thời gian"
                            placeholder="50"
                            startOption={{
                              required: {
                                value: true,
                                message: "Vui lòng nhập ngày bắt đầu dự án",
                              },
                              validate: {
                                notPastDate: (value) => {
                                  const date = new Date(value);
                                  const currentDate = new Date();
                                  
                                  return (
                                    days(date,currentDate) >= 7 ||
                                    "Ngày bắt đầu phải sau 7 ngày"
                                  );
                                },
                              },
                            }}
                            endOption={{
                              required: {
                                value: true,
                                message: "Vui lòng nhập ngày kết thúc dự án",
                              },
                              validate: {
                                notPastDate: (value, formValue) => {
                                  const date = new Date(value);
                                  const startDate = new Date(
                                    formValue.startDate
                                  );
                                  return (
                                    date > startDate ||
                                    "Ngày kết thúc không được sau ngày bắt đầu"
                                  );
                                },
                                validDate: (value, formValue) => {
                                  const date = new Date(value);
                                  const startDate = new Date(
                                    formValue.startDate
                                  );
                                  return (
                                    days(date, startDate) >= 7 ||
                                    "Tổng số ngày phải lớn hơn 7"
                                  );
                                },
                              },
                            }}
                            startError={errors.startDate?.message}
                            endError={errors.endDate?.message}
                          />
                          <Textarea
                            register={register}
                            name="description"
                            label="Mô tả"
                            placeholder="Mô tả..."
                            option={{
                              required: {
                                value: true,
                                message: "Vui lòng nhập mô tả dự án",
                              },
                            }}
                            error={errors.description?.message}
                          />
                        </div>
                      ) : (
                        <div className="mt-5"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
                    onClick={() => changeConfirmHandle(true)}
                  >
                    Xác nhận
                  </button>
                  {!confirm && (
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => onOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Hủy bỏ
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </form>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HireModel;
