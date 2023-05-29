import React from 'react'

const ItemCategory = ({category,onChangeCategory}) => {
const {name,img,value} = category;

  return (
    <div onClick={()=>onChangeCategory({name,value})} className='flex justify-start items-center my-2 -translate-x-[8%] hover:translate-x-0 transition-all duration-500 cursor-pointer hover:text-black text-slate-700'>
        <img className="w-[24px] mr-2 " src={img} alt="img" />
        <span className="mt-2 font-semibold text-bas">{name}</span>
    </div>
  )
}

export default ItemCategory