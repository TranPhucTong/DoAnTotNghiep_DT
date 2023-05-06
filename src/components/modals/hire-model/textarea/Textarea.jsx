import React from 'react'

const Textarea = ({
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
      <textarea {...register(name, { ...option })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={placeholder}/>
    <p className={error ? "text-red-600" : "hidden"}>{error}</p>
    </div>
  )
}

export default Textarea