import React from 'react'

const InputDate = ({
  label,
  placeholder,
  type,
  register,
  startName,
  endName,
  startOption,
  endOption,
  startError,
  endError,
  
}) => {
  return (
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {label}:
      </label>
      <div className='flex justify-center items-center'>
        <input {...register(startName, { ...startOption })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" placeholder={placeholder}/>
        <p className='w-5 mx-5'>-</p>
        <input {...register(endName, { ...endOption })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" placeholder={placeholder}/>
      </div>
      <p className={startError ? "text-red-600" : "hidden"}>{startError}</p>
      <p className={endError ? "text-red-600" : "hidden"}>{endError}</p>
    </div>
  )
}

export default InputDate