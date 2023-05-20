import React from 'react'

const NoneInput = ({label,value}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <span
          className="block text-neutral-500 font-normal md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {label}:
        </span>
      </div>
      <div className="md:w-2/3">
        <span
          className="block text-neutral-500 font-normal md:text-left mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {value}
        </span>
      </div>
    </div>
  )
}

export default NoneInput