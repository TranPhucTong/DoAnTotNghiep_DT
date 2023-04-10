import React from 'react'
import './item-field.scss'
const ItemField = ({field}) => {
    const {value,label,title} = field
  return (
    <div className="px-5 py-10 flex justify-center items-center border-2 border-slate-100 rounded-md shadow-sm">
        <input type="checkbox" className='h-5 w-5  '/>
        <div className="flex flex-col ml-5 pr-20">
            <h4 className="text-left text-[#425E7FFF] text-base">{label}</h4>
            <p className="text-left text-[#BCC1CAFF] text-base">{title}</p>
        </div>
    </div>
  )
}

export default ItemField