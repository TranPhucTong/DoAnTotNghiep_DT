import React, { useEffect, useState } from 'react'
import './item-field.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee } from '../../reducers/slices/employeeSlice';
import { updateProfileEmployee } from '../../reducers/actions/employeeAction';
const ItemField = ({field}) => {
    const dispatch = useDispatch();
    const {value,label,title} = field
    const employee = useSelector(selectEmployee);
    const employeeField = employee.field
    const [isField,setIsField] = useState(false)
    useEffect(()=>{
      if(employeeField){
        employeeField.forEach((field)=>{
          field === value && setIsField(true)
        })
      }

    },[employeeField])

    const changeFieldHandle = ()=>{
      const isExist = employeeField.find((item)=> item === value)
      let field
      if(!isExist){
        field = [...employeeField,value];
        setIsField(true)
      }else{
        const filterFields = employeeField.filter((item)=> item !==isExist)
        field = [...filterFields]
        setIsField(false)
      }
      const profile  = {field}
      dispatch(updateProfileEmployee(profile))
    }
  return (
    <div className="px-5 py-10 flex justify-center items-center border-2 border-slate-100 rounded-md shadow-sm">
        <div className="round">
          <input type="checkbox" checked={isField} id={value} onInput={changeFieldHandle}/>
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