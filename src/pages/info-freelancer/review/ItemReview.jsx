import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ItemReview = ({ review }) => {
  const {customer,comment} = review
  return (
    <div className="pb-6 border-b-2">
      <div>
        <h4 className="font-bold text-sm mb-1 text-slate-900">{customer.name}</h4>
        <div className="flex items-center ">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <FontAwesomeIcon
                className={`font-semibold text-sm cursor-pointer ${
                  review.rating > rating ? "text-yellow-500" : "text-gray-500"
                } `}
                icon={faStar}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm text-slate-700">{comment}</p>
      </div>
    </div>
  );
};

export default ItemReview;
