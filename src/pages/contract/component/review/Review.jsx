import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({commentRef,selectRating,onRating, onChangeValidComment, isValidComment}) => {
    const changeCommentHandle =(value)=>{
        if(value.length > 0){
            if(!isValidComment)
            onChangeValidComment(true);
        }else{
            onChangeValidComment(false);
        }
    }
  return (
    <div>
      <div className="flex items-center ">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <FontAwesomeIcon
              className={`mx-0.5 font-semibold text-sm cursor-pointer ${
                selectRating > rating ? "text-yellow-500" : "text-gray-500"
              } hover:text-yellow-500`}
              icon={faStar}
              onMouseEnter={() => onRating(rating + 1)}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <textarea onChange={(e)=>changeCommentHandle(e.target.value)} ref={commentRef} className="border w-full h-52 p-4 focus:border-blue-500 "></textarea>
      </div>
    </div>
  );
};

export default Review;
