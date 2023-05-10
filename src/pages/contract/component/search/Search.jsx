import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { setListContractFilter } from "../../../../reducers/slices/contractSlice";
 
const Search = () => {
  const dispatch = useDispatch();
  const setListContractFilterHandle = (value)=>{
    dispatch(setListContractFilter(value));
  }
  return (
    <div class="relative my-2">
      <input
        type="search"
        onChange = {(e)=> setListContractFilterHandle(e.target.value)}
        className="text-sm bg-neutral-100 text-neutral-700 placeholder:text-neutral-700 bg-purple-white shadow rounded border-0 p-3 w-full px-10 py-5 outline-blue-500"
        placeholder="Bạn có thể tìm kiếm theo tên đơn thuê, tên người thuê..."
      />
      <div class="translate-x-1/2 translate-y-1/2 absolute left-0 top-0 mt-1 ml-2 text-purple-lighter">
        <FontAwesomeIcon className="text-sm" icon={faSearch}/>
      </div>
    </div>
  );
};

export default Search;
