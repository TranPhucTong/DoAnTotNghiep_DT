import React from "react";

const InputDate = ({
  label,
  placeholder,
  register,
  name,
  option,
  error,
  defaultValue,
}) => {
  let defaultValues
  if(defaultValue){
    defaultValues = new Date(defaultValue).toISOString().split('T')[0] // yyyy-mm-dd
  }
  return (
    <>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-neutral-500 font-normal md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {label}:
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            type="date"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder={placeholder}
            defaultValue={defaultValues}
            {...register(name, { ...option })}
          />
        </div>
      </div>
        <p className={error ? "text-red-600" : "hidden"}>{error}</p>
    </>
  );
};

export default InputDate;
