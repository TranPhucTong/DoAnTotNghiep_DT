import React from 'react'

const ItemCategory = ({category,onChangeCategory}) => {
const {name,img,value} = category;

  return (
    <div onClick={()=>onChangeCategory({name,value})} className='hover:cursor-pointer hover:border-primary hover:border-1 transition rounded-2xl w-48 flex flex-col justify-center items-center px-5 py-4 border border-gray-300'>
        <img className="w-[48px]" src={img} alt="img" />
        <span className="mt-2 font-semibold text-base">{name}</span>
    </div>
  )
}

export default ItemCategory