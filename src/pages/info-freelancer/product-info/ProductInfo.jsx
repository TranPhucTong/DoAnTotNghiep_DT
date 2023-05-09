import React, { useState } from 'react'
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { dateToAge } from '../../../utils/convert';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../../reducers/slices/customerSlice';
import { useNavigate } from 'react-router-dom';
import configRoutes from '../../../config/configRouter';
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProductInfo = ({employee, onOpen }) => {
  const login = useSelector(isLoggedIn)
  const navigate = useNavigate();
  const hireHandle = ()=> {
    if(!login){
      navigate(configRoutes.login)
      return;
    }
    onOpen(true);

  }
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {employee.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 ">
            <div className="flex justify-center items-center mb-5">
                <img className = 'rounded-full h-24 w-24' src={employee.avatar} alt="" /> 
            </div>
            <p className="text-left text-xl tracking-tight text-gray-900 mb-2">
              Email: {employee.email}
            </p>
            <p className="text-left text-xl tracking-tight text-gray-900 mb-2">
              Tuổi: {dateToAge(employee.birthDate)}t
            </p><p className="text-left text-xl tracking-tight text-gray-900 mb-2">
            Giá: {employee.rent_from}$ - {employee.rent_to}$ /dự án
            </p>
      
            {/* Reviews */}
            <div className="my-3 ">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center ">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <FontAwesomeIcon
                      className="font-semibold cursor-pointer text-green-500"
                      icon={faStar}
                    />
                  ))}
                </div>
                <p className="sr-only">{employee.reviews} out of 5 stars</p>
                {/* <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a> */}
              </div>
            </div>

            <div className="mt-10">

              <button
              onClick = {hireHandle}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Thuê
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-left text-base text-gray-900">
                  {employee.introduce}
                </p>
              </div>
            </div>

            <div className="mt-10 text-left">
              <h3 className="text-sm font-medium text-gray-900">Công nghệ:</h3>

              <div className="mt-4 ">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {employee.skill.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            
          </div>
        </div>
  )
}

export default ProductInfo