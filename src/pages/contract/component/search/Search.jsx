import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setListContractFilter } from "../../../../reducers/slices/contractSlice";
import { setListOrderFilter } from "../../../../reducers/slices/orderSlice";

const Search = ({isContract}) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const setListContractFilterHandle = (value) => {
    isContract ? dispatch(setListContractFilter(value)) :
    dispatch(setListOrderFilter(value));
  };
  useEffect(() => {
      console.log("123");
  });

  return (
    <div className="relative my-2">
      <input
        ref = {inputRef} 
        type="search"
        onChange={(e) => setListContractFilterHandle(e.target.value)}
        className="text-sm bg-neutral-100 text-neutral-700 placeholder:text-neutral-700 bg-purple-white shadow rounded border-0 p-3 w-full px-10 py-5 outline-blue-500"
        placeholder="Bạn có thể tìm kiếm theo tên đơn thuê, tên người thuê..."
      />
      <div className="translate-x-1/2 translate-y-1/2 absolute left-0 top-0 mt-1 ml-2 text-purple-lighter">
        <FontAwesomeIcon className="text-sm" icon={faSearch} />
      </div>
    </div>
  );
};

export default Search;
