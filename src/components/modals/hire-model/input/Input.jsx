import React from 'react'

const Input = ({
  label,
  placeholder,
  type,
  register,
  name,
  option,
  error,
  defaultValue,
  onChange
}) => {
  return (
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {label}:
      </label>
      <input {...register(name, { ...option })} className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type={type} placeholder={placeholder}/>
    <p className={error ? "text-red-600" : "hidden"}>{error}</p>
    </div>
  )
}

export default Input