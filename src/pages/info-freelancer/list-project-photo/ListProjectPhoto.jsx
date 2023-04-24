import React from 'react'
import listProject from '../../../assests/imgs'
const imagess = [
     listProject.fivver,

    ,
       listProject.total,
    , 
       listProject.project,
    ,
       listProject.project,
    ,
  ]
const ListProjectPhoto = ({images}) => {
  console.log(images);
  return (
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={images[0] ? images[0] : imagess[0]}
              alt={images[0]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={images[1] ? images[1] : imagess[1]}
                alt={images[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={images[2] ? images[2] : imagess[2]}
                alt={images[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={images[3] ? images[3] : imagess[3]}
              alt={images[3]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
  )
}

export default ListProjectPhoto