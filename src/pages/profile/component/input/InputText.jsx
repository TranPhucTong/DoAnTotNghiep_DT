import React from "react";

const InputText = ({
  label,
  placeholder,
  type,
  register,
  name,
  option,
  error,
    defaultValue,
}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-neutral-500 font-normal md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {label}:
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type={type ? type : "text"}
           defaultValue={defaultValue}
          {...register(name, { ...option })}
        />
      </div>
      <p className={error ? "text-red-600" : "hidden"}>{error}</p>
    </div>
  );
};

export default InputText;
