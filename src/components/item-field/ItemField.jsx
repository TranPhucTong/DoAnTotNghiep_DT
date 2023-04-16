import React, { useEffect, useState } from 'react'
import './item-field.scss'
import { useSelector } from 'react-redux';
import { selectEmployee } from '../../reducers/slices/employeeSlice';
const ItemField = ({field}) => {
    const {value,label,title} = field
    const employee = useSelector(selectEmployee);
    const employeeField = employee.field
    const [isField,setIsField] = useState(false)
    useEffect(()=>{
      employeeField.forEach((field)=>{
        field === value && setIsField(true)
      })

    },[employeeField])

  return (
    <div className="px-5 py-10 flex justify-center items-center border-2 border-slate-100 rounded-md shadow-sm">
        <div className="round">
          <input type="checkbox" checked={isField} id={value}/>
          <label htmlFor={value} className = "bg-white border-1 border-slate-100  rounded-full cursor-pointer h-6 w-6 after:"></label>
          </div>
        <div className="flex flex-col ml-5 pr-20">
            <h4 className="text-left text-[#425E7FFF] text-base">{label}</h4>
            <p className="text-left text-[#BCC1CAFF] text-base">{title}</p>
        </div>
    </div>
  )
}

export default ItemField